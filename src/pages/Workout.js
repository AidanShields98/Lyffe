import React, { useState } from "react";
import SelectDays from "../components/SelectDays";
import WorkoutForm from "../components/WorkoutForm";

export const Workout = () => {
  const [workoutDays, setWorkoutDays] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const onDaysSelected = (days) => {
    setWorkoutDays(days);
    setShowForm(true);
  };

  return (
    <div>
      {!workoutDays && !showForm ? (
        <button onClick={() => setShowForm(true)}>Create Workout</button>
      ) : null}
      {showForm && !workoutDays ? (
        <SelectDays onDaysSelected={onDaysSelected} />
      ) : null}
      {workoutDays
        ? Array.from({ length: workoutDays }, (_, idx) => (
            <WorkoutForm key={idx} />
          ))
        : null}
    </div>
  );
};

export default Workout;
