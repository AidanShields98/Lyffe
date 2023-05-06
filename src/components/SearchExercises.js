import React, {useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Data, fetchExercise } from '../utils/fetchData';

const SearchExercises = ({ setData}) => {
  const [search, setSearch] = useState('');


  const handleSearch = async () => {
    if (search) {
      const exData = await fetchExercise('https://exercisedb.p.rapidapi.com/exercises', Data);

      const searched = exData.filter(
        (data) => data.name.toLowerCase().includes(search)
               || data.target.toLowerCase().includes(search)
               || data.equipment.toLowerCase().includes(search)
               || data.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setData(searched);
    }
  };

  return (
    <Stack className="search-stack">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
       Search through over 1300 Exercises!
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
