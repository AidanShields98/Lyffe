import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export function WorkoutDaysPicker(props) {
  const [days, setDays] = useState(1);

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <TextField
      id="days-picker"
      label="Number of Days"
      type="number"
      value={days}
      onChange={handleDaysChange}
      InputProps={{ inputProps: { min: 1 } }}
    />
  );
}
