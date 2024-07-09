import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RecommendSection } from '../components/mainPage';
import { Targets } from '../utils';

const MainPage = () => {
  const renderButtonSubmenu = (name) => (
    <Button sx={{ width: '100%', height: '100%' }}>{name}</Button>
  );
  return (
    <Container maxWidth={'xl'} sx={{}}>
      <Grid container sx={{ height: '100%' }}>
        <Grid xs={8} item sx={{ p: 1 }}>
          <Stack justifyContent={'center'} columnGap={2}>
            <RecommendSection />
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
