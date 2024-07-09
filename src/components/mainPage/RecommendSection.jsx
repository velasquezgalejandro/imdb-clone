import { Fragment, useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { StyledButtonGroup, Targets } from '../../utils';

const RecommendSection = () => {
  const [buttonValue, setButtonValue] = useState(1);

  const Buttons = (value, label, actions) => {
    return (
      <ToggleButton
        value={value}
        aria-label="left aligned"
        onChange={actions}
        sx={{
          bgcolor: 'buttons.primary',
          color: 'text.primary',
          fontWeight: 'bold',
          '&:hover': {
            bgcolor: 'buttons.hover',
          },
          '&.Mui-selected': {
            bgcolor: 'buttons.secondary',
            color: 'text.white',
            fontWeight: 'bold',
            '&:hover': {
              bgcolor: 'buttons.selectedHover',
            },
          },
        }}
      >
        {label}
      </ToggleButton>
    );
  };

  const renderTargets = (name, src) => {
    return (
      <Grid item xs>
        <Targets name={name} src={src} />
      </Grid>
    );
  };

  const onChange = (_, value) => {
    setButtonValue(value);
  };

  return (
    <Fragment>
      <StyledButtonGroup value={buttonValue}>
        {Buttons(1, 'uno', onChange)}
        {Buttons(2, 'dos', onChange)}
        {Buttons(3, 'tres', onChange)}
      </StyledButtonGroup>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Grid container columnSpacing={1}>
            {renderTargets('uno', '/image/template.jpg')}
            {renderTargets('dos', '/image/template.jpg')}
            {renderTargets('tres', '/image/template.jpg')}
            {renderTargets('cuatro', '/image/template.jpg')}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={1}>
            {renderTargets('cinco', '/image/template.jpg')}
            {renderTargets('seis', '/image/template.jpg')}
            {renderTargets('siete', '/image/template.jpg')}
            {renderTargets('ocho', '/image/template.jpg')}
          </Grid>
        </Grid>
      </Grid>
      <Button>mas</Button>
    </Fragment>
  );
};

export default RecommendSection;
