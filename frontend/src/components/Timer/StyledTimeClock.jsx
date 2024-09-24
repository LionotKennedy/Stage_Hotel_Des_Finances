import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import { Box, Paper, Typography } from '@mui/material';
import './styledtimeclock.scss'; // Importer le fichier SCSS

const StyledTimeClock = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper className="time-clock-paper">
        <Box className="time-clock-container">
          <Typography variant="h5" className="time-clock-title">
            Heure Actuelle
          </Typography>
          <TimeClock />
        </Box>
      </Paper>
    </LocalizationProvider>
  );
};

export default StyledTimeClock;
