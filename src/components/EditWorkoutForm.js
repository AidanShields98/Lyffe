import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function EditWorkoutForm({ workoutData, onSave, onCancel, onWorkoutUpdated }) {
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

  const handleDeleteRow = () => {
    const newFormData = formData.slice(0, -1);
    setFormData(newFormData);
  };
  

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
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
      <Grid container spacing={2} justifyContent="space-between" style={{ marginTop: '1rem' }}>
        <Grid item xs={3} md={2}>
          <Button variant="contained" color="primary" onClick={handleAddRow} fullWidth>
            Add Row
          </Button>
        </Grid>
        <Grid item xs={3} md={2}>
          <Button variant="contained" color="primary" onClick={handleDeleteRow} fullWidth>
            Delete Row
          </Button>
        </Grid>
        <Grid item xs={3} md={2}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Save
          </Button>
        </Grid>
        <Grid item xs={3} md={2}>
          <Button variant="contained" color="secondary" onClick={onCancel} fullWidth>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditWorkoutForm;
