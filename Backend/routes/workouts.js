const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { ManagementClient } = require('auth0');

const workoutSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  workoutData: {
    // Define the schema for the workout data here
  },
});

const Workout = mongoose.model('Workout', workoutSchema);

const managementClient = new ManagementClient({
  domain: 'lyffe.eu.auth0.com',
  clientId: 'Tnzvjz29Y4d5RqjvTVt9gBIjQLIQLj5s',
  clientSecret: '0UmtmNYUsD4nIdFvh018D970LfNeaPbbaakNpz8qPWYzq1vbby4sXXLrGlIBoW-H',
});

const getManagementApiToken = async (accessToken) => {
  try {
    const managementApiToken = await managementClient.getAccessToken({
      audience: `https://${managementClient.domain}/api/v2/`,
      scope: 'read:users',
      client_id: managementClient.clientId,
      client_secret: managementClient.clientSecret,
      token: accessToken,
    });
    return managementApiToken.access_token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Handle POST requests to save workouts to the database
router.post('/', async (req, res) => {
  try {
    // Extract the access token from the Authorization header
    const authHeader = req.headers.authorization;
    const accessToken = authHeader.split(' ')[1];

    // Use the Auth0 Management API to verify the access token and get the user's sub
    const managementApiToken = await getManagementApiToken(accessToken);
    const { sub } = await managementClient.getProfile(accessToken);

    // Use the user's sub to save the workout to the MongoDB database
    const workoutData = req.body;
    const workout = new Workout({
      userId: sub,
      workoutData,
    });
    await workout.save();

    res.status(200).send('Workout saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Handle GET requests to retrieve workouts from the database
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Use the user's ID to find all workouts with that user ID as a reference
    const workouts = await Workout.find({ userId });

    res.status(200).send(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
