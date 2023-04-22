import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercise = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);   //this authorizes me to make the request with rapidapi so it is passed to both using the key 

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

    // Pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  
    const paginate = (event, value) => {
      setCurrentPage(value);
  
      window.scrollTo({ top: 100, behavior: 'smooth' });
    };

  return (
    <Box id="exercises" className="exercise-box" sx={{ mt: { lg: '109px'} }}>
      <Stack  className="exercise-stack"  direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }}>
      {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: '70px'  }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            size="medium" 
            page={currentPage}
            onChange={paginate}            
            count={Math.ceil(exercises.length / exercisesPerPage)}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercise;

