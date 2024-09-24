// // src/components/MuiCalendarComponent.js

// import * as React from 'react';
// import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { Box } from '@mui/material';

// const MuiCalendarComponent = () => {
//   const [selectedDate, setSelectedDate] = React.useState(new Date()); // Par défaut, la date actuelle est sélectionnée

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <CalendarPicker
//           date={selectedDate}
//           onChange={(newDate) => setSelectedDate(newDate)} // Met à jour la date lorsque l'utilisateur la sélectionne
//         />
//         <p>Date sélectionnée : {selectedDate.toDateString()}</p> {/* Affiche la date actuelle ou sélectionnée */}
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default MuiCalendarComponent;
