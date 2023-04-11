const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true },
  weight: { type: Number, required: true },
});

const workoutPlanSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  days: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 3 && value <= 6;
      },
      message: 'Days must be a number between 3 and 6',
    },
  },
  workouts: [[workoutSchema]],
});

const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);

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

router.post('/workout', async (req, res) => {
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

module.exports = router;
