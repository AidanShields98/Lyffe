import React, { useState } from 'react';
import { Box } from '@mui/material'

import Exercise from '../components/Exercise';

const Exercises = () => {

    const [exercises, setExercises] = useState([]);
    const [bodyPart] = useState('all');

    return (
        <Box>
            <Exercise setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
    )
}

export default Exercises;
