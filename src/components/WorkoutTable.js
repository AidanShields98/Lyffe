import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import EditWorkoutForm from "./EditWorkoutForm";
import { useAuth0 } from "@auth0/auth0-react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@mui/material";
import { saveUserWorkout } from "../utils/fetchData";

function WorkoutTable({ workoutData, userId, onDelete, onWorkoutUpdated }) {
  const [editingWorkout, setEditingWorkout] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const handleEdit = (workoutId, exercises) => {
    setEditingWorkout({ workoutId, exercises });
  };

  const handleSave = async (newData) => {
    try {
      const accessToken = await getAccessTokenSilently();
      const success = await saveUserWorkout(
        userId,
        editingWorkout.workoutId,
        newData,
        accessToken
      );

      if (success) {
        onWorkoutUpdated();
        setEditingWorkout(null);
      }
    } catch (error) {
      console.error("Error updating workout:", error);
    }
  };

  const handleCancel = () => {
    setEditingWorkout(null);
  };

  const [showDeleteButton, setShowDeleteButton] = useState(true);

  useEffect(() => {
    setShowDeleteButton(editingWorkout === null);
  }, [editingWorkout]);
  return (
    <div className="table-root">
      {editingWorkout ? (
        <EditWorkoutForm
          workoutData={editingWorkout.exercises}
          onSave={handleSave}
          onCancel={handleCancel}
          onWorkoutUpdated={onWorkoutUpdated}
        />
      ) : (
        Object.entries(workoutData).map(
          ([workoutId, exercises], workoutIdx) => (
            <div key={workoutIdx} className="table-row">
              <Typography variant="h5" className="workout-heading">
                Workout {workoutIdx + 1}
                <IconButton
                  aria-label="edit"
                  onClick={() => handleEdit(workoutId, exercises)}
                >
                  <EditIcon />
                </IconButton>
              </Typography>
              <Grid container spacing={2} className="table-form-con">
                <Grid
                  item
                  xs={12}
                  md={3}
                  className="table-grid table-grid-header"
                >
                  <Typography variant="subtitle1">Exercise Name</Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={3}
                  className="table-grid table-grid-header"
                >
                  <Typography variant="subtitle1">Sets</Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={3}
                  className="table-grid table-grid-header"
                >
                  <Typography variant="subtitle1">Reps</Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={3}
                  className="table-grid table-grid-header"
                >
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
          )
        )
      )}
       {showDeleteButton && (
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  onClick={onDelete}
                  style={{ padding: "10px", margin: "10px" }}
                >
                  Delete Workout
                </Button>
              )}
    </div>
  );
}

export default WorkoutTable;
