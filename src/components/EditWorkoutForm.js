import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { fetchExercise, Data } from "../utils/fetchData";
import Autocomplete from "@mui/material/Autocomplete";

function EditWorkoutForm({ workoutData, onSave, onCancel }) {
  const [formData, setFormData] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setFormData(workoutData);
  }, [workoutData]);

  useEffect(() => {
    const fetchApiExera = async () => {
      let exData = [];
      exData = await fetchExercise(
        "https://exercisedb.p.rapidapi.com/exercises",
        Data
      );

      setExercises(exData);
    };

    fetchApiExera();
  }, []);

  const handleInputChange = (event, rowIndex, field) => {
    const newFormData = [...formData];
    newFormData[rowIndex] = {
      ...newFormData[rowIndex],
      [field]: event.target.value,
    };
    setFormData(newFormData);
  };

  const handleAddRow = () => {
    setFormData([
      ...formData,
      {
        exercise: "",
        sets: "",
        reps: "",
        weight: "",
      },
    ]);
  };
  
  const handleSubmit = (event) => {
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
              <Autocomplete
                options={exercises.map((exercise) => exercise.name)}
                value={formData[rowIndex]?.exercise || ""}
                onChange={(event, newValue) =>
                  handleInputChange(event, rowIndex, "exercise")
                }
                onBlur={(event) =>
                  handleInputChange(event, rowIndex, "exercise")
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Exercise Name"
                    variant="outlined"
                    fullWidth
                  />
                )}
                clearIcon={null}
              />
            </Grid>
            <Grid item xs={4} md={3}>
              <TextField
                label="Sets"
                type="number"
                variant="outlined"
                value={formData[rowIndex]?.sets || ""}
                onChange={(event) => handleInputChange(event, rowIndex, "sets")}
                fullWidth
              />
            </Grid>
            <Grid item xs={4} md={3}>
              <TextField
                label="Reps"
                type="number"
                variant="outlined"
                value={formData[rowIndex]?.reps || ""}
                onChange={(event) => handleInputChange(event, rowIndex, "reps")}
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
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        style={{ marginTop: "1rem" }}
      >
        <Grid item xs={3} md={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddRow}
            fullWidth
          >
            Add Row
          </Button>
        </Grid>
        <Grid item xs={3} md={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDeleteRow}
            fullWidth
          >
            Delete Row
          </Button>
        </Grid>
        <Grid item xs={3} md={3}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Save
          </Button>
        </Grid>
        <Grid item xs={3} md={3}>
          <Button
            variant="contained"
            color="secondary"
            onClick={onCancel}
            fullWidth
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditWorkoutForm;
