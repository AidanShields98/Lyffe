const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const WorkoutPlan = require('../models/workouts');

const verifyAccessTokenAndGetSub = async (accessToken) => {
  try {
    const response = await axios.get(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const { sub } = response.data;
    return sub;
  } catch (error) {
    console.error('Error verifying access token:', error);
    return null;
  }
};

router.post('/addworkout', async (req, res) => {
  try {
    // Extract the access token from the Authorization header
    const authHeader = req.headers.authorization;
    const accessToken = authHeader.split(' ')[1];

    // Use the Auth0 Management API to verify the access token and get the user's sub
    const sub = await verifyAccessTokenAndGetSub(accessToken);

    if (!sub) {
      res.status(401).send('Unauthorized');
      return;
    }

    // Use the user's sub to save the workout plan to the MongoDB database
    const workoutPlanData = req.body;

    console.log('Received workout data:', workoutPlanData);

    const workoutPlan = new WorkoutPlan({
      userId: sub,
      days: workoutPlanData.days,
      workouts: workoutPlanData.workouts,
    });
    await workoutPlan.save();

    res.status(200).send('Workout plan saved successfully');
    console.log('Workout plan saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});


router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch the workout plan associated with the user ID from the MongoDB database
    const workoutPlan = await WorkoutPlan.findOne({ userId });

    if (!workoutPlan) {
      res.status(404).send('Workout plan not found');
      return;
    }

    // Send the workout plan data as a JSON response
    res.status(200).json(workoutPlan);
  } catch (error) {
    console.error('Error fetching user workout:', error);
    res.status(500).send('Server error');
  }
});


module.exports = router;
