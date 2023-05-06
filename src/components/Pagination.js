import React from 'react';
import { Pagination } from '@mui/material';

const CustomPagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handleChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <Pagination
      color="standard"
      shape="rounded"
      defaultPage={1}
      size="medium"
      page={currentPage}
      onChange={handleChange}
      count={totalPages}
    />
  );
};

export default CustomPagination;
