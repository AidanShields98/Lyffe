const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const { WorkoutPlan, Workout } = require('../models/workouts');


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

    const workoutPlanData = req.body;

    console.log('Received workout data:', workoutPlanData);

    console.log('Workouts before creating instance:', workoutPlanData.workouts);

    const workoutPlan = new WorkoutPlan({
      userId: sub,
      days: Number(workoutPlanData.days),
      workouts: workoutPlanData.workouts.map(day => day.map(workout => new Workout(workout))),
    });

    console.log('Workouts after creating instance:', workoutPlan.workouts);
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

    const workoutPlan = await WorkoutPlan.findOne({ userId });

    if (!workoutPlan) {
      res.status(404).send('Workout plan not found');
      return;
    }

    res.status(200).json(workoutPlan);
  } catch (error) {
    console.error('Error fetching user workout:', error);
    res.status(500).send('Server error');
  }
});

router.put('/:userId/:workoutId', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const accessToken = authHeader.split(' ')[1];

    const sub = await verifyAccessTokenAndGetSub(accessToken);

    if (!sub) {
      res.status(401).send('Unauthorized');
      return;
    }

    const { userId, workoutId } = req.params;
    const workoutData = req.body;

    console.log(`Updating workout ${workoutId} for user ${userId} with data:`, workoutData);

    const workoutPlan = await WorkoutPlan.findOne({ userId });

    if (!workoutPlan) {
      res.status(404).send('Workout plan not found');
      return;
    }

    const workoutIndex = workoutPlan.workouts.findIndex((workout) => workout._id == workoutId);
    if (workoutIndex === -1) {
      res.status(404).send('Workout not found');
      return;
    }

    Object.values(workoutData).forEach((exerciseData) => {
      const exerciseIndex = workoutPlan.workouts[workoutIndex].findIndex((exercise) => exercise._id == exerciseData._id);
      if (exerciseIndex === -1) {
        console.warn(`Exercise ${exerciseData._id} not found in workout ${workoutId}`);
        return;
      }
      workoutPlan.workouts[workoutIndex][exerciseIndex] = exerciseData;
    });

    await workoutPlan.save();

    res.status(200).send('Workout updated successfully');
    console.log('Workout updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});


module.exports = router;
