import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: 'fit-content',
        bgcolor: '#85E3E9',
        pt: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '40%' }}>Footer</Box>
      <Divider
        orientation="vertical"
        sx={{ color: 'Black', height: '200px' }}
      />
      <Box sx={{ width: '40%' }}>Footer</Box>
    </Box>
  );
};

export default Footer;
