// src/components/DateRangeCalendar.js

// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
// import { Box, Typography } from '@mui/material';

// export default function DateRangeCalendarComponent() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h6">Calendrier de Plage de Dates</Typography>
//         <DemoContainer components={['DateRangeCalendar']}>
//           <DateRangeCalendar />
//         </DemoContainer>
//       </Box>
//     </LocalizationProvider>
//   );
// }


// src/components/DateRangeCalendar.js

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Style personnalisé pour le conteneur du calendrier
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '8px',
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.default,
  width: '100%',
  maxWidth: '600px',
  margin: 'auto',
}));

export default function DateRangeCalendarComponent() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledPaper>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold', color: '#1976d2' }}>
            Calendrier de Plage de Dates
          </Typography>
          <DemoContainer components={['DateRangeCalendar']}>
            <DateRangeCalendar />
          </DemoContainer>
        </Box>
      </StyledPaper>
    </LocalizationProvider>
  );
}
