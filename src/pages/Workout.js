import React, { useState } from "react";
import SelectDays from "../components/SelectDays";
import { Button } from "@material-ui/core";
import { Stack, Typography } from "@mui/material";
import WorkoutForm from "../components/WorkoutForm";
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Workout = () => {
  const [workoutDays, setWorkoutDays] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [workoutData, setWorkoutData] = useState([]);
  const [accordionDisplayed, setAccordionDisplayed] = useState(false);

  const onDaysSelected = (days) => {
    setWorkoutDays(days);
    setShowForm(true);
  };

  const handleFormChange = (workoutIndex, formData) => {
    const newWorkoutData = [...workoutData];
    newWorkoutData[workoutIndex] = formData;
    setWorkoutData(newWorkoutData);
  };

  const handleFormSubmit = async () => {
    // Save all workout data to the server tbd
  };

  return (
    <div>
      {!workoutDays && !showForm ? (
        <div className="no-workout">
        <Typography variant="h3" gutterBottom > No Workout Data </Typography>
        <Button className="create-workout-btn" variant="contained" color="primary" onClick={() => setShowForm(true)}>Create Workout</Button>
        </div>
      ) : null}
      {showForm && !workoutDays ? (
        <SelectDays onDaysSelected={onDaysSelected} />
      ) : null}
      {workoutDays ? (
        <Stack spacing={2} direction="column" alignItems="center" mt={10}>
          {Array.from({ length: workoutDays }, (_, idx) => (
            <Accordion key={idx} className="workout-accordion" onChange={() => setAccordionDisplayed(true)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} className="workout-title">
                Workout {idx + 1}
              </AccordionSummary>
              <AccordionDetails className="workout-accordion-details">
                <WorkoutForm workoutIndex={idx} onFormChange={handleFormChange} />
              </AccordionDetails>
            </Accordion>
          ))}
          {accordionDisplayed && (
            <Button variant="contained" color="primary" onClick={handleFormSubmit}>
              Save Workouts
            </Button>
          )}
        </Stack>
      ) : null}
    </div>
  );
};

export default Workout;
