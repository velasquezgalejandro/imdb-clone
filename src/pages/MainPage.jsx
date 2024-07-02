import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Targets from '../components/Targets';
import StyledToggleButtonGroup from '../utils/StyledButtonGroup';

const MainPage = () => {
  const renderButtonSubmenu = (name) => (
    <Button sx={{ width: '100%', height: '100%' }}>{name}</Button>
  );
  return (
    <Container maxWidth={'xl'} sx={{ height: '100vh' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid xs={8} item sx={{ p: 1 }}>
          <Stack justifyContent={'center'} columnGap={2}>
            <StyledToggleButtonGroup>
              <ToggleButton value="left" aria-label="left aligned">
                uno
              </ToggleButton>
              <ToggleButton value="left" aria-label="left aligned">
                dos
              </ToggleButton>
              <ToggleButton value="left" aria-label="left aligned">
                tres
              </ToggleButton>
            </StyledToggleButtonGroup>
            <Stack
              gap={2}
              direction="row"
              justifyContent={'center'}
              sx={{
                width: '100%',
                flexWrap: 'wrap',
              }}
            >
              <Targets name={'uno'} />
              <Targets name={'dos'} />
              <Targets name={'tres'} />
              <Targets name={'cuatro'} />
              <Targets name={'cinco'} />
              <Targets name={'seis'} />
              <Targets name={'siete'} />
              <Targets name={'icho'} />
            </Stack>
            <Button>mas</Button>
          </Stack>
          <Stack sx={{ width: '100%' }}>
            <Typography align="center">Pendientes</Typography>
            <Stack direction="row" sx={{ width: '100%', height: '100px' }}>
              {renderButtonSubmenu('pendientes')}
              {renderButtonSubmenu('seguidos')}
              {renderButtonSubmenu('favoritos')}
              {renderButtonSubmenu('abandonados')}
            </Stack>
          </Stack>
          <Stack sx={{ width: '100%' }}>
            <Typography align="center">Recientes</Typography>
            <Stack
              direction="row"
              gap={2}
              justifyContent={'center'}
              sx={{
                width: '100%',
                height: 'fit-content',
                flexWrap: 'wrap',
                bgcolor: 'steelblue',
              }}
            >
              <Targets name={'uno'} />
              <Targets name={'dos'} />
              <Targets name={'tres'} />
              <Targets name={'cuatro'} />
              <Targets name={'cinco'} />
              <Targets name={'seis'} />
              <Targets name={'siete'} />
              <Targets name={'icho'} />
            </Stack>
          </Stack>
          {/* <Stack
            sx={{
              bgcolor: 'green',
            }}
          >
            <Typography align="center">Recientes</Typography>
            <Stack direction={'row'}>
              <Targets name={'uno'} />
              <Targets name={'dos'} />
              <Targets name={'tres'} />
            </Stack>
          </Stack> */}
        </Grid>
        <Grid xs item>
          <Stack
            sx={{ width: '100%', height: '100%', bgcolor: 'yellow' }}
          ></Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
