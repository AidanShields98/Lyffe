const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true },
  weight: { type: Number, required: true },
});



const Workout = mongoose.model('Workout', workoutSchema);

const workoutPlanSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  days: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 3  && value < 6;
      },
      message: 'Days must be a number between 3 and 6',
    },
  },
  workouts: [workoutSchema],
});

const workoutSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  workoutData: workoutPlanSchema,
});

module.exports = mongoose.model('WorkoutPlan', workoutPlanSchema);
