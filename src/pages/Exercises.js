import React, { useState } from 'react';
import { Box } from '@mui/material'

import Exercise from '../components/Exercise';
import SearchExercises from '../components/SearchExercises';
const Exercises = () => {

    const [exercises, setExercises] = useState([]);
    const [bodyPart,  setBodyPart] = useState('all');

    return (
        <Box>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercise setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
    )
}

export default Exercises;
