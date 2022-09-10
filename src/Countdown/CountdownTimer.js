import React, { useEffect, useState } from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const CounterContainer = styled.div`
  margin-top: 50px;
  @media (max-width: 600px) {
    margin-right: 20px;
    margin-left: 10px;
  }
`;


const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Esta sucediendo!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState(null);

  useEffect( () => {
    const WEEDING_DAY_IN_MS = (new Date(2022, 11, 3, 6, 30) - new Date());
    const NOW_IN_MS = new Date().getTime();
    setTargetDate(NOW_IN_MS + WEEDING_DAY_IN_MS);
  }, [setTargetDate]);
    
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <div />;
  } else {
    return (
      <CounterContainer>
        <Typography variant="h3">¡Nos casamos!</Typography>
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 2 }}
          columns={{ xs: 4, sm: 4, md: 12 }}

          justifyContent="center"
          alignItems="center"
          paddingTop={'100px'}
        >
          <DateTimeDisplay value={days} type={'Días'} showDivider={true}/>
          <DateTimeDisplay value={hours} type={'Horas'} showDivider={true}/>
          <DateTimeDisplay value={minutes} type={'Minutos'} showDivider={true}/>
          <DateTimeDisplay value={seconds} type={'Segundos'}/>
        </Grid>
      </CounterContainer>
    );
  }
};

export default CountdownTimer;