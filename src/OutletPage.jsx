import React from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './layout';

const OutletPage = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default OutletPage;
