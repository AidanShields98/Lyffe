import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Data, fetchExercise } from '../utils/fetchData';
import Detail from '../components/Detail';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchApiExera = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

      const exerciseDetailData = await fetchExercise(`${exerciseDbUrl}/exercises/exercise/${id}`, Data);
      setExerciseDetail(exerciseDetailData);
    };

    fetchApiExera();
  }, [id]);

  // if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box>
      <Detail exerciseData={exerciseDetail} />
    </Box>
  );

};

export default ExerciseDetail;
