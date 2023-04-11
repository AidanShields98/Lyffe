import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const WorkoutTable = ({ workoutData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Workout #</TableCell>
            <TableCell>Exercise Name</TableCell>
            <TableCell>Sets</TableCell>
            <TableCell>Reps</TableCell>
            <TableCell>Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workoutData.map((workout, idx) => (
            <React.Fragment key={idx}>
              {workout.exercises.map((exercise, index) => (
                <TableRow key={index}>
                  {index === 0 && (
                    <TableCell rowSpan={workout.exercises.length}>{idx + 1}</TableCell>
                  )}
                  <TableCell>{exercise.name}</TableCell>
                  <TableCell>{exercise.sets}</TableCell>
                  <TableCell>{exercise.reps}</TableCell>
                  <TableCell>{exercise.weight}</TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WorkoutTable;
