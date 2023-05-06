import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Data, fetchExercise } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Pagination from './Pagination';

const Exercise = ({ ex, setData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      const exData = await fetchExercise('https://exercisedb.p.rapidapi.com/exercises', Data); 

      setData(exData);
    };

    fetchData();
  }, [setData]);

  // Pagination
  const lastExercise = currentPage * exercisesPerPage;
  const firstExercise = lastExercise - exercisesPerPage;
  const currentExercises = ex.slice(firstExercise, lastExercise);
  const totalPages = Math.ceil(ex.length / exercisesPerPage);

  return (
    <Box id="ex" className="exercise-box">
      <Stack className="exercise-stack" direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }}>
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: '70px' }} alignItems="center">
        {ex.length > exercisesPerPage && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercise;
