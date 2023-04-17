import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import EditWorkoutForm from "./EditWorkoutForm";
import { useAuth0 } from "@auth0/auth0-react";

function WorkoutTable({ workoutData, userId }) {
  const [editingWorkout, setEditingWorkout] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const handleEdit = (workoutId, exercises) => {
    setEditingWorkout({ workoutId, exercises });
  };

  const handleSave = async (newData) => {
    try {
      const accessToken = await getAccessTokenSilently();
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/workout/${userId}/${editingWorkout.workoutId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",            
          },
          body: JSON.stringify(newData),
        }
      );
  
      if (response.ok) {
        console.log("Workout updated successfully");
        // Refresh the workout data in the parent component
        // ...
      } else {
        console.error("Error updating workout:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating workout:", error);
    }
  
    setEditingWorkout(null);
  };
  


  const handleCancel = () => {
    setEditingWorkout(null);
  };

  return (
    <div className="table-root">
      {editingWorkout ? (
        <EditWorkoutForm
          workoutData={editingWorkout.exercises}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        Object.entries(workoutData).map(([workoutId, exercises], workoutIdx) => (
          <div key={workoutIdx} className="table-row">
            <Typography variant="h5" className="workout-heading">
              Workout {workoutIdx + 1}
              <IconButton
                aria-label="edit"
                onClick={() => handleEdit( workoutId, exercises)}
              >
                <EditIcon />
              </IconButton>
            </Typography>
            <Grid container spacing={2} className="table-form-con">
              <Grid item xs={12} md={3} className="table-grid table-grid-header">
                <Typography variant="subtitle1">Exercise Name</Typography>
              </Grid>
              <Grid item xs={4} md={3} className="table-grid table-grid-header">
                <Typography variant="subtitle1">Sets</Typography>
              </Grid>
              <Grid item xs={4} md={3} className="table-grid table-grid-header">
                <Typography variant="subtitle1">Reps</Typography>
              </Grid>
              <Grid item xs={4} md={3} className="table-grid table-grid-header">
                <Typography variant="subtitle1">Weight (kg)</Typography>
              </Grid>
              {Object.values(exercises).map((exercise, rowIndex) => {
                if (typeof exercise === "object") {
                  return (
                    <React.Fragment key={rowIndex}>
                      <Grid
                        item
                        xs={12}
                        md={3}
                        className={`table-grid ${
                          rowIndex % 2 === 0 ? "table-grid-row" : ""
                        }`}
                      >
                        <Typography>{exercise.exercise}</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        md={3}
                        className={`table-grid ${
                          rowIndex % 2 === 0 ? "table-grid-row" : ""
                        }`}
                      >
                        <Typography>{exercise.sets}</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        md={3}
                        className={`table-grid ${
                          rowIndex % 2 === 0 ? "table-grid-row" : ""
                        }`}
                      >
                        <Typography>{exercise.reps}</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        md={3}
                        className={`table-grid ${
                          rowIndex % 2 === 0 ? "table-grid-row" : ""
                        }`}
                      >
                        <Typography>{exercise.weight} kg</Typography>
                      </Grid>
                    </React.Fragment>
                  );
                } else {
                  return null;
                }
              })}
            </Grid>
          </div>
        ))
      )}
    </div>
  );
}

export default WorkoutTable;
