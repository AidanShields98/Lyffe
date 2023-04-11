import React, { useState } from "react";
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

const SelectDays = ({ onDaysSelected }) => {
  const [days, setDays] = useState("");

  const handleChange = (event) => {
    setDays(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDaysSelected(days);
  };

  return (
    <div className="days-form">
    <Typography variant="h6" align="center">
      How many days would you like to workout a week?
    </Typography>
    <form onSubmit={handleSubmit}>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={8}>
          <FormControl className="days-form-con">
            <InputLabel id="workout-days-label">Select days</InputLabel>
            <Select
              labelId="workout-days-label"
              id="workout-days-select"
              value={days}
              onChange={handleChange}
            >
              <MenuItem value="">Select days</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={10} md={8}>
          <Button
            className="days-submit"
            variant="contained"
            color="primary"
            type="submit"
            disabled={!days}
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  </div>
);
}

export default SelectDays;

