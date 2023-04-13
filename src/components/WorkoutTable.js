import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

function WorkoutTable({ workoutData }) {
  const handleEdit = (exercise) => {
   
  };

  return (
    <div className="table-root">
      {workoutData.map((workout, workoutIdx) => (
        <div key={workoutIdx} className="table-row">
          <Typography variant="h5" className="workout-heading">
            Workout {workoutIdx + 1}
            <IconButton
              aria-label="edit"
              onClick={() => handleEdit(workout[0])}
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
            {Object.values(workout).map((exercise, rowIndex) => {
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
      ))}
    </div>
  );
}

export default WorkoutTable;
