import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function WorkoutForm({ selectedDays, numRows = 6, onSubmit }) {
  const [formData, setFormData] = useState(() =>
    Array(selectedDays)
      .fill()
      .map(() =>
        Array(numRows)
          .fill()
          .map(() => ({
            exercise: "",
            sets: "",
            reps: "",
            weight: "",
          }))
      )
  );

  const handleFormChange = useCallback(
    (event, formIndex, rowIndex, field) => {
      const newFormData = [...formData];
      newFormData[formIndex][rowIndex][field] = event.target.value;
      setFormData(newFormData);
    },
    [formData]
  );

  const handleFormSubmit = useCallback(() => {
    onSubmit(formData);
  }, [formData, onSubmit]);

  return (
    <div className="workout-root">
      {formData.map((form, formIndex) => (
        <div key={formIndex}>
          <Typography className="workout-label">Workout {formIndex + 1}</Typography>
          <form className="workout-form">
            {form.map((row, rowIndex) => (
              <div key={rowIndex} className="workout-row">
                <Grid container spacing={2} className="workout-form-container">
                  <Grid item xs={3}>
                    <TextField
                      label="Exercise Name"
                      variant="outlined"
                      value={formData[formIndex][rowIndex]?.exercise || ""}
                      onChange={(event) =>
                        handleFormChange(event, formIndex, rowIndex, "exercise")
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      label="Sets"
                      type="number"
                      variant="outlined"
                      value={formData[formIndex][rowIndex]?.sets || ""}
                      onChange={(event) =>
                        handleFormChange(event, formIndex, rowIndex, "sets")
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      label="Reps"
                      type="number"
                      variant="outlined"
                      value={formData[formIndex][rowIndex]?.reps || ""}
                      onChange={(event) =>
                        handleFormChange(event, formIndex, rowIndex, "reps")
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      label="Weight Kg"
                      type="number"
                      variant="outlined"
                      value={formData[formIndex][rowIndex]?.weight || ""}
                      onChange={(event) =>
                        handleFormChange(event, formIndex, rowIndex, "weight")
                      }
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </div>
            ))}
          </form>
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleFormSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default WorkoutForm;
