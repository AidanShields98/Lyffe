import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { Data, fetchExercise } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercise = ({ ex, setData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchApiExera = async () => {
      let exData = [];
        exData = await fetchExercise('https://exercisedb.p.rapidapi.com/exercises', Data); 

      setData(exData);
    };

    fetchApiExera();
  }, []);


    // Pagination
    const LastExercise = currentPage * exercisesPerPage;
    const FirstExercise = LastExercise - exercisesPerPage;
    const currentExercises = ex.slice(FirstExercise, LastExercise);
  
    const paginate = (event, value) => {
      setCurrentPage(value);
  
      window.scrollTo({ top: 100, behavior: 'smooth' });
    };

  return (
    <Box id="ex" className="exercise-box" sx={{ mt: { lg: '109px'} }}>
      <Stack  className="exercise-stack"  direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }}>
      {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: '70px'  }} alignItems="center">
        {ex.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            size="medium" 
            page={currentPage}
            onChange={paginate}            
            count={Math.ceil(ex.length / exercisesPerPage)}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercise;

