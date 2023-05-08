import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import CreateWorkout from "../components/CreateWorkout";
import { useAuth0 } from "@auth0/auth0-react";
import WorkoutTable from "../components/WorkoutTable";
import { fetchUserWorkout, deleteUserWorkout } from "../utils/fetchData";

export const Workout = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userWorkout, setUserWorkout] = useState(null);
  const [showCreateWorkout, setShowCreateWorkout] = useState(false);

  const fetchData = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      const fetchedWorkout = await fetchUserWorkout(user.sub, accessToken);
      setUserWorkout(fetchedWorkout);
    } catch (error) {
      console.error("Error fetching user workout:", error);
    }
  };

  useEffect(() => {
    if (user?.sub) {
      fetchData();
    }
  }, [user]);

  const handleWorkoutCreated = () => {
    setShowCreateWorkout(false);
    fetchData();
  };

  const handleDelete = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      const success = await deleteUserWorkout(user.sub, accessToken);
  
      if (success) {
        setUserWorkout(null);
      }
    } catch (error) {
      console.error("Error deleting workout plan:", error);
    }
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
          <WorkoutTable workoutData={userWorkout.workouts} userId={user.sub} onDelete={handleDelete} onWorkoutUpdated={fetchData} />
        </div>
      )}
      {showCreateWorkout && (
        // Render the CreateWorkout component to create a new workout
        <CreateWorkout onWorkoutCreated={handleWorkoutCreated} />
      )}
    </div>
  );
};
