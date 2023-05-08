// BmiCalc.js
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

export const BmiCalc = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightMeters = height / 100;
      const calculatedBmi = (weight / (heightMeters * heightMeters)).toFixed(1);  //converts number to string with 1 decimal place
      setBmi(calculatedBmi);
    }
  };

  return (
    <div>
      <Typography variant="h6" component="div">
        BMI Calculator
      </Typography>
      <TextField
        label="Height (cm)"
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Weight (kg)"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button variant="contained" onClick={calculateBMI}>
        Calculate BMI
      </Button>
      {bmi && (
        <Typography variant="body1" component="div">
          Your BMI is: {bmi}
        </Typography>
      )}
    </div>
  );
};

export default BmiCalc;
