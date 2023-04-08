import React, { useState, useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

function WorkoutForm({ numRows = 6, onFormChange }) {
  const [formData, setFormData] = useState(
    Array(numRows)
      .fill()
      .map(() => ({
        exercise: "",
        sets: "",
        reps: "",
        weight: "",
      }))
  );

  const handleFormChange = useCallback(
    (event, rowIndex, field) => {
      const newFormData = [...formData];
      newFormData[rowIndex][field] = event.target.value;
      setFormData(newFormData);
      onFormChange(newFormData);
    },
    [formData, onFormChange]  //updates parent state with new form data prevents unneccessary re renders
  );

  return (
    <div className="workout-root">
      <form className="workout-form">
        {formData.map((row, rowIndex) => (
          <div key={rowIndex} className="workout-row">
            <Grid container spacing={2} className="workout-form-container">
              <Grid item xs={12} md={3}>
                <TextField
                  label="Exercise Name"
                  variant="outlined"
                  value={formData[rowIndex]?.exercise || ""}
                  onChange={(event) =>
                    handleFormChange(event, rowIndex, "exercise")
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={4} md={3}>
                <TextField
                  label="Sets"
                  type="number"
                  variant="outlined"
                  value={formData[rowIndex]?.sets || ""}
                  onChange={(event) =>
                    handleFormChange(event, rowIndex, "sets")
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={4} md={3}>
                <TextField
                  label="Reps"
                  type="number"
                  variant="outlined"
                  value={formData[rowIndex]?.reps || ""}
                  onChange={(event) =>
                    handleFormChange(event, rowIndex, "reps")
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={4} md={3}>
                <TextField
                  label="Kg"
                  type="number"
                  variant="outlined"
                  value={formData[rowIndex]?.weight || ""}
                  onChange={(event) =>
                    handleFormChange(event, rowIndex, "weight")
                  }
                  fullWidth
                />
              </Grid>
            </Grid>
          </div> 
        ))}
      </form>
    </div>
  );
}

export default WorkoutForm;
