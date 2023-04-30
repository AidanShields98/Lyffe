import React, {useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = ({ setExercises}) => {
  const [search, setSearch] = useState('');


  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (data) => data.name.toLowerCase().includes(search)
               || data.target.toLowerCase().includes(search)
               || data.equipment.toLowerCase().includes(search)
               || data.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack className="search-stack">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
       Search for any Exercise or Bodypart!
      </Typography>
      <Box className="search-box">
        <TextField
          className="search-text"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }}}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search"
          type="text"
        />
        <Button className="search-btn" sx={{textTransform: 'none', width: { lg: '173px', xs: '80px' }, fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
