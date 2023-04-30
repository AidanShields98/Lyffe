import React, { useState } from 'react';
import { Box } from '@mui/material'

import Exercise from '../components/Exercise';
import SearchExercises from '../components/SearchExercises';

const Exercises = () => {

    const [exercises, setExercises] = useState([]);

    return (
        <Box>
            <SearchExercises setExercises={setExercises} />
            <Exercise setExercises={setExercises} exercises={exercises}  />
        </Box>
    )
}

export default Exercises;
