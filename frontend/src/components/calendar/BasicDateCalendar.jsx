// import * as React from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { Box, Typography } from '@mui/material';
// import dayjs from 'dayjs';
// import 'dayjs/locale/fr'; // Import de la locale française

// // Configurer la locale par défaut
// dayjs.locale('fr');

// export default function BasicDateCalendar() {
//   const [selectedDate, setSelectedDate] = React.useState(dayjs()); // Date actuelle

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
//         <Typography variant="h6" gutterBottom>
//           Sélectionnez une date :
//         </Typography>
//         <DateCalendar
//           value={selectedDate}
//           onChange={(newDate) => setSelectedDate(newDate)} // Met à jour la date sélectionnée
//           sx={{
//             border: '1px solid #ccc',
//             borderRadius: '8px',
//             boxShadow: 2,
//           }}
//         />
//         <Typography variant="body1" sx={{ marginTop: 2 }}>
//           Date sélectionnée : <strong>{selectedDate.format('DD MMMM YYYY')}</strong>
//         </Typography>
//       </Box>
//     </LocalizationProvider>
//   );
// }



























import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Typography, Paper } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/fr'; // Import de la locale française
import "./basicdatecalendar.scss"

// Configurer la locale par défaut
dayjs.locale('fr');

export default function BasicDateCalendar() {
  const [selectedDate, setSelectedDate] = React.useState(dayjs()); // Date actuelle

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <Paper 
    //     elevation={3} 
    //     sx={{ 
    //       padding: 3, 
    //       borderRadius: '8px', 
    //       backgroundColor: '#f9f9f9',
    //       textAlign: 'center'
    //     }}
    //   >
    //     <Typography variant="h5" sx={{ marginBottom: 2, color: '#333' }}>
    //       Sélectionnez une date :
    //     </Typography>
    //     <DateCalendar
    //       value={selectedDate}
    //       onChange={(newDate) => setSelectedDate(newDate)} // Met à jour la date sélectionnée
    //       sx={{
    //         border: '1px solid #ccc',
    //         borderRadius: '8px',
    //         boxShadow: 2,
    //         transition: '0.3s', // Animation fluide
    //         '&:hover': {
    //           boxShadow: 4, // Augmenter l'ombre au survol
    //         },
    //       }}
    //     />
    //     <Typography variant="body1" sx={{ marginTop: 2, color: '#555' }}>
    //       Date sélectionnée : <strong>{selectedDate.format('DD MMMM YYYY')}</strong>
    //     </Typography>
    //     <Typography variant="body2" sx={{ marginTop: 1, color: '#777' }}>
    //       Cliquez sur une date pour la sélectionner
    //     </Typography>
    //   </Paper>
    // </LocalizationProvider>


    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper className="calendar-paper">
        <Typography variant="h5" className="calendar-title">
          Sélectionnez une date :
        </Typography>
        <DateCalendar
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)} // Met à jour la date sélectionnée
          className="calendar"
        />
        <Typography variant="body1" className="selected-date">
          Date sélectionnée : <strong>{selectedDate.format('DD MMMM YYYY')}</strong>
        </Typography>
        <Typography variant="body2" className="calendar-instruction">
          Cliquez sur une date pour la sélectionner
        </Typography>
      </Paper>
    </LocalizationProvider>


  );
}
