const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const workoutSchema = new mongoose.Schema({
  exercise: { type: String, required: true },
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
  workouts: { type: Map, of: [workoutSchema] },
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

    const workoutsMap = new Map(
      workoutPlanData.workouts.map((workout) => [uuidv4(), workout])
    );

    const workoutPlan = new WorkoutPlan({
      userId: sub,
      days: workoutPlanData.days,
      workouts: workoutsMap,
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

    if (!workoutPlan.workouts.has(workoutId)) {
      res.status(404).send('Workout not found');
      return;
    }


    const updatedWorkout = workoutPlan.workouts.get(workoutId).map((exercise, index) => {
      return workoutData[index] ? workoutData[index] : exercise;
    });

    workoutPlan.workouts.set(workoutId, updatedWorkout);
    await workoutPlan.save();

    res.status(200).send('Workout updated successfully');
    console.log('Workout updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const accessToken = authHeader.split(' ')[1];

    const sub = await verifyAccessTokenAndGetSub(accessToken);

    if (!sub) {
      res.status(401).send('Unauthorized');
      return;
    }

    const userId = req.params.userId;

    const workoutPlan = await WorkoutPlan.findOneAndDelete({ userId });

    if (!workoutPlan) {
      res.status(404).send('Workout plan not found');
      return;
    }

    res.status(200).send('Workout plan deleted successfully');
    console.log('Workout plan deleted successfully');
  } catch (error) {
    console.error('Error deleting workout plan:', error);
    res.status(500).send('Server error');
  }
});



module.exports = router;
