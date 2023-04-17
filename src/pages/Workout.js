import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import CreateWorkout from "../components/CreateWorkout";
import { useAuth0 } from "@auth0/auth0-react";
import WorkoutTable from "../components/WorkoutTable";

const fetchUserWorkout = async (userId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/workout/${userId}`);

    if (!response.ok) {
      console.error('Error fetching user workout:', response.status);
      return null;
    }

    const responseText = await response.text();
    const data = JSON.parse(responseText);
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
        // Render the message and button to create a workout if there's no workout
        <div className="no-workout">
          <Typography variant="h3" gutterBottom>
            No Workout Data
          </Typography>
          <Button variant="contained" onClick={() => setShowCreateWorkout(true)}>
            Create Workout
          </Button>
        </div>
      )}
      {userWorkout && (
        // Render the WorkoutTable component if there's a workout
        <div>
          <WorkoutTable workoutData={userWorkout.workouts} userId={user.sub}  />
        </div>
      )}
      {showCreateWorkout && (
        // Render the CreateWorkout component to create a new workout
        <CreateWorkout onWorkoutCreated={handleWorkoutCreated} />
      )}
    </div>
  );
};
