import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import CreateWorkout from "../components/CreateWorkout";
import { useAuth0 } from "@auth0/auth0-react";
import WorkoutTable from "../components/WorkoutTable";

const fetchUserWorkout = async (userId) => {
  try {
    const response = await fetch(`/workout/${userId}`);

    if (!response.ok) {
      console.error('Error fetching user workout:', response.status);
      return null;
    }

    const data = await response.json();
    console.log('User workout data:', data);
    return data;

  } catch (error) {
    console.error('Error fetching user workout:', error);
    return null;
  }
};

export const Workout = () => {
  const { user } = useAuth0();
  const [userWorkout, setUserWorkout] = useState(null);
  const [showCreateWorkout, setShowCreateWorkout] = useState(false);

 useEffect(() => {

  const fetchData = async () => {
    const fetchedWorkout = await fetchUserWorkout(user.sub);
    setUserWorkout(fetchedWorkout);
  };

  if (user?.sub) {
    fetchData();
  }
}, [user]);

  const handleWorkoutCreated = () => {
    // Fetch the updated user workout and update the state
    const fetchData = async () => {
      const fetchedWorkout = await fetchUserWorkout(user.sub);
      setUserWorkout(fetchedWorkout);
    };

    setShowCreateWorkout(false);
    fetchData();
  };

  return (
    <div>
      {!userWorkout && !showCreateWorkout && (
        <div className="no-workout">
          <Typography variant="h3" gutterBottom>
            No Workout Data
          </Typography>
          <Button variant="contained" onClick={() => setShowCreateWorkout(true)}>
            Create Workout
          </Button>
        </div>
      )}
      {!showCreateWorkout && userWorkout && (
        <div>
          <WorkoutTable workoutData={userWorkout} />
        </div>
      )}
      {showCreateWorkout && (
        <CreateWorkout onWorkoutCreated={handleWorkoutCreated} />
      )}
    </div>
  );
};

export default Workout;
