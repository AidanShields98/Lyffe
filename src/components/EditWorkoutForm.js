import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

function EditWorkoutForm({ workoutData, onSave, onCancel }) {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    setFormData(workoutData);
  }, [workoutData]);

  const handleInputChange = (event, rowIndex, field) => {
    const newFormData = [...formData];
    newFormData[rowIndex] = {
      ...newFormData[rowIndex],
      [field]: event.target.value,
    };
    setFormData(newFormData);
  };

  const handleAddRow = () => {
    setFormData([...formData, {}]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
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
                    handleInputChange(event, rowIndex, "exercise")
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
                    handleInputChange(event, rowIndex, "sets")
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
                    handleInputChange(event, rowIndex, "reps")
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
                    handleInputChange(event, rowIndex, "weight")
                  }
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        ))}
        <Button variant="contained" color="primary" onClick={handleAddRow}>
          Add Row
        </Button>
      </form>
      <ButtonGroup  spacing={5}> 
      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
      <Button variant="contained" color="secondary" onClick={onCancel}>
        Cancel
      </Button>
      </ButtonGroup>
    </form>
  );
}

export default EditWorkoutForm;
