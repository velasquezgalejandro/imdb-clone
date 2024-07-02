import Paper from '@mui/material/Paper';

const Targets = ({ name, width = '200px', height = '200px' }) => {
  return <Paper sx={{ width, height, bgcolor: '#f9f9f9' }}>{name}</Paper>;
};

export default Targets;
