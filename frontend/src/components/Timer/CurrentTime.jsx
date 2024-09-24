// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Paper } from '@mui/material';
// import './currenttime.scss'; // Importer le fichier SCSS

// const CurrentTime = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000); // Met à jour l'heure toutes les secondes

//     return () => clearInterval(interval); // Nettoyer l'intervalle à la désinstallation
//   }, []);

//   return (
//     <Paper className="time-paper">
//       <Box className="time-container">
//         <Typography variant="h4" className="current-time">
//           {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
//         </Typography>
//         <Typography variant="body1" className="current-date">
//           {currentTime.toLocaleDateString('fr-FR', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//           })}
//         </Typography>
//       </Box>
//     </Paper>
//   );
// };

// export default CurrentTime;




































import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import './currenttime.scss'; // Importer le fichier SCSS

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Met à jour l'heure toutes les secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle à la désinstallation
  }, []);

  return (
    <Paper className="time-paper">
      <Box className="time-container">
        <Typography variant="h4" className="current-time">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </Typography>
        <Typography variant="body1" className="current-date">
          {currentTime.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CurrentTime;
