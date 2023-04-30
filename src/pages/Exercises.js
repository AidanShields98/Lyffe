import React, { useState } from 'react';
import { Box } from '@mui/material'

import Exercise from '../components/Exercise';
import SearchExercises from '../components/SearchExercises';

const Exercises = () => {
    const [ex, setData] = useState([]);

    return (
        <Box>
            <SearchExercises setData={setData} />
            <Exercise setData={setData} ex={ex}  />
        </Box>
    )
}

export default Exercises;
