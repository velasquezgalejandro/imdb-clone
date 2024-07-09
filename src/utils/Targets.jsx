import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Targets = ({
  name,
  src,
  genero = 'accion',
  tipo = 'serie',
  puntuacion = '0.0',
}) => {
  const transparencyStyle = {
    opacity: 0.6,
    bgcolor: 'white',
  };

  return (
    <Paper
      sx={{
        width: 1,
        height: 'auto',
        aspectRatio: '1',
        position: 'relative',
        border: 1,
        borderColor: 'white',
        borderRadius: 2,
        overflow: 'clip',
      }}
    >
      <Box
        component={'img'}
        src={src}
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          top: 0,
          right: 0,
          borderRadius: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          ...transparencyStyle,
          zIndex: 1,
          bottom: 16,
          left: 0,
          width: 1,
          opacity: 0.6,
        }}
      >
        <Typography align="center">{name}</Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          ...transparencyStyle,
          top: 0,
          left: 0,
          width: '20%',
          zIndex: 1,
        }}
      >
        <Typography align="center">{puntuacion}</Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          ...transparencyStyle,
          top: 0,
          right: 0,
          width: '40%',
          opacity: 0.6,
        }}
      >
        <Typography align="center">{tipo}</Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bgcolor: 'white',
          zIndex: 1,
          bottom: 40,
          right: 0,
          width: '40%',
          opacity: 0.6,
        }}
      >
        <Typography align="center">{genero}</Typography>
      </Box>
    </Paper>
  );
};

export default Targets;
