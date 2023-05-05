import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { fetchExercise, Data } from "../utils/fetchData";
import Autocomplete from '@mui/material/Autocomplete';

function WorkoutForm({ numRows = 6, onFormChange }) {
  const [exercises, setExercises] = useState([]);
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
  const handleInputChange = (eventOrValue, rowIndex, field) => {
    const newFormData = [...formData];
    const value = eventOrValue.target ? eventOrValue.target.value : eventOrValue;
    newFormData[rowIndex][field] = value;
    setFormData(newFormData);
    onFormChange(newFormData);
  };

  const handleAddRow = () => {
    if (formData.length < 8) {
      setFormData((prevFormData) => [
        ...prevFormData,
        { exercise: "", sets: "", reps: "", weight: "" },
      ]);
    }
  };

  const handleDeleteRow = () => {
    const newFormData = formData.slice(0, -1);
    setFormData(newFormData);
  };

  return (
    <div className="workout-root">
      <form className="workout-form">
        {formData.map((row, rowIndex) => (
          <div key={rowIndex} className="workout-row">
            <Grid container spacing={2} className="workout-form-container">
              <Grid item xs={12} md={3}>
              <Autocomplete
                  options={exercises.map((exercise) => exercise.name)}
                  value={formData[rowIndex]?.exercise || ""}
                  onChange={(event, newValue) =>
                    handleInputChange(newValue, rowIndex, "exercise")
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
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Grid item xs={5} sm={6} md={3} className="workout-grid">
            <Button
              variant="contained"
              color="primary"
              className="workout-btn"
              onClick={handleAddRow}
            >
              Add Row
            </Button>
          </Grid>
          <Grid item xs={5} sm={6} md={3} className="workout-grid">
            <Button
              variant="contained"
              color="primary"
              onClick={handleDeleteRow}
              className="workout-btn"
            >
              Delete Row
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default WorkoutForm;
