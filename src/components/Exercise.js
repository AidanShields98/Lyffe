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

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);   //this authorizes me to make the request with rapidapi so it is passed to both using the key 
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

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
  
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

  return (
    <Box id="exercises" padding= "60px 20px 60px" >
      <Stack direction="row" sx={{ gap: { lg: '89px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
      {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ m: { lg: '30px', xs: '30px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            flexWrap="nowrap"
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="medium"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercise;

