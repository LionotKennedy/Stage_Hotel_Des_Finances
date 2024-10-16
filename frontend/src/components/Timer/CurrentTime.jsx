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










































// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Paper, Grid, Container } from '@mui/material';
// import './currenttime.scss';

// const CurrentTime = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Container maxWidth="md" sx={{ mt: 4 }}>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6} lg={4}>
//           <Paper elevation={3} className="time-card">
//             <Box sx={{ p: 3, textAlign: 'center' }}>
//               <Typography variant="h4" component="h1" gutterBottom className="current-time">
//                 {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
//               </Typography>
//               <Typography variant="subtitle1" className="time-zone">Heure de Paris</Typography>
//             </Box>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6} lg={4}>
//           <Paper elevation={3} className="date-card">
//             <Box sx={{ p: 3, textAlign: 'center' }}>
//               <Typography variant="h5" component="h2" gutterBottom className="current-date">
//                 {currentTime.toLocaleDateString('fr-FR', {
//                   weekday: 'long',
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric',
//                 })}
//               </Typography>
//               <Typography variant="body1">Paris, France</Typography>
//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default CurrentTime;

















































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
//     <Paper className="time-paper" elevation={3}>
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










































// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Paper, Grid, Container } from '@mui/material';
// import './currenttime.scss';

// const CurrentTime = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Container maxWidth="md" sx={{ mt: 4 }}>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6} lg={4}>
//           <Paper elevation={3} className="time-card">
//             <Box sx={{ p: 3, textAlign: 'center' }}>
//               <Typography variant="h4" component="h1" gutterBottom className="current-time">
//                 {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
//               </Typography>
//               <Typography variant="subtitle1" className="time-zone">Heure de Paris</Typography>
//             </Box>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6} lg={4}>
//           <Paper elevation={3} className="date-card">
//             <Box sx={{ p: 3, textAlign: 'center' }}>
//               <Typography variant="h5" component="h2" gutterBottom className="current-date">
//                 {currentTime.toLocaleDateString('fr-FR', {
//                   weekday: 'long',
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric',
//                 })}
//               </Typography>
//               <Typography variant="body1">Paris, France</Typography>
//             </Box>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6} lg={4}>
//           <Paper elevation={3} className="clock-card">
//             <Box sx={{ p: 3, textAlign: 'center' }}>
//               <svg width="150" height="150" viewBox="0 0 150 150">
//                 <circle cx="75" cy="75" r="70" fill="#ccc" stroke="#000" strokeWidth="2"/>
//                 <line x1="75" y1="75" x2="75" y2="75" stroke="#000" strokeWidth="2"/>
//                 <line x1="75" y1="75" x2="75" y2="75" stroke="#000" strokeWidth="2"/>
//                 <line x1="75" y1="75" x2="75" y2="75" stroke="#000" strokeWidth="2"/>
//                 <text x="75" y="75" textAnchor="middle" dominantBaseline="central" fontSize="30" fill="#000">
//                   {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
//                 </text>
//               </svg>
//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default CurrentTime;



























import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import './currenttime.scss'; // Importer le fichier SCSS
import AnalogClock from './AnalogClock';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Met à jour l'heure toutes les secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle à la désinstallation
  }, []);

  const getRotationDegrees = (unit, totalUnits) => {
    return (unit / totalUnits) * 360;
  };

  return (
    <Paper className="time-paper" elevation={3}>
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

        {/* <div>
        <AnalogClock />
        </div> */}
      </Box>
    </Paper>
  );
};

export default CurrentTime;




















{/* Horloge à aiguilles */}
{/* <div className="analog-clock">
  <div
    className="hand hour-hand"
    style={{
      transform: `rotate(${getRotationDegrees(currentTime.getHours() % 12, 12)}deg)`,
    }}
  />
  <div
    className="hand minute-hand"
    style={{
      transform: `rotate(${getRotationDegrees(currentTime.getMinutes(), 60)}deg)`,
    }}
  />
  <div
    className="hand second-hand"
    style={{
      transform: `rotate(${getRotationDegrees(currentTime.getSeconds(), 60)}deg)`,
    }}
  />
  <div className="center-dot"></div>
</div> */}














