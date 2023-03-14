import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack className="exercise-card-stack" direction="row" spacing={2}>
      <Button className="exercise-card-button" sx={{ ml: "21px" }}>
        {exercise.bodyPart}
      </Button>
      <Button className="exercise-card-button" sx={{ ml: "21px" }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      className="exercise-card-typ"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
