import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SelectDays from "../components/SelectDays";
import WorkoutForm from "../components/WorkoutForm";
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Stack, Button } from "@mui/material";

export const CreateWorkout = ({ onWorkoutCreated }) => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [workoutDays, setWorkoutDays] = useState(null);
  const [workoutData, setWorkoutData] = useState([]);

  const onDaysSelected = (days) => {
    setWorkoutDays(days);
  };

  const handleFormChange = (workoutIndex, formData) => {
    const newWorkoutData = [...workoutData];
    newWorkoutData[workoutIndex] = formData;
    setWorkoutData(newWorkoutData);
  };

  const handleFormSubmit = async () => {
    console.log('Form submitted');
    try {
      const accessToken = await getAccessTokenSilently();
      console.log('Access token:', accessToken);
      const workoutDataToSave = {
        userId: user.sub,
        workouts: workoutData,
      };
      await fetch('/workout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(workoutDataToSave)
      });
      onWorkoutCreated();
    } catch (error) {
      console.error('Error saving workout:', error);
    }
  };
 
  return (
    <Stack spacing={2} direction="column" alignItems="center" mt={10}>
      {!workoutDays && <SelectDays onDaysSelected={onDaysSelected} />}
      {workoutDays &&
        Array.from({ length: workoutDays }, (_, idx) => (
          <Accordion key={idx} className="workout-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="workout-title">
              Workout {idx + 1}
            </AccordionSummary>
            <AccordionDetails className="workout-accordion-details">
              <WorkoutForm workoutIndex={idx} onFormChange={handleFormChange} />
            </AccordionDetails>
          </Accordion>
        ))}
      {workoutDays && (
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Save Workouts
        </Button>
      )}
    </Stack>
  );
};

export default CreateWorkout;
