import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const Counter = styled(Grid)`
  align-items: center;
  border-right: ${(props) => props.showDivider ? '1px solid #525E22' : 'none'}
`;

const Value = styled(Typography)`
  margin: 0;
  color: #525E22;
`;

const DateTimeDisplay = ({ value, type, showDivider = false }) => {
  return (
    <Counter item xs={1} sm={2} md={2} showDivider={showDivider}>
      <Value variant='h2'>{value}</Value>
      <Typography variant='h5'>{type}</Typography>
    </Counter>
  );
};

export default DateTimeDisplay;