import { Fragment, useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
    </Fragment>
  );
};

export default RecommendSection;
