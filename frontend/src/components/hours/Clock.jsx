import React, { useState, useEffect } from 'react';
import "./clock.scss"

const Clock = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  }, []);

  const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Formatage de l'heure
    const formattedHours = hours % 12 || 12;
    const ampm = hours < 12 ? 'AM' : 'PM';
    // const formattedHours = now.format('HH:mm:ss');
    // const ampm = now.format('A');

    // Mise à jour de l'heure et de la date
    setTime(`${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`);
    setDate(now.toLocaleDateString());
  };

  return (
    <div className="clock-container">
      <div className="clock-face">
        <div className="hour-hand"></div>
        <div className="minute-hand"></div>
        <div className="second-hand"></div>
      </div>
      <div className="clock-info">
        <p>{time}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Clock;






















// import React, { useState, useEffect } from 'react';
// import "./clock.scss";

// const Clock = () => {
//   const [pcTime, setPcTime] = useState('');
//   const [pcDate, setPcDate] = useState('');

//   useEffect(() => {
//     const timer = setInterval(() => tick(), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const tick = () => {
//     // Simuler l'heure de PC (par exemple, 2 heures en avance)
//     const now = new Date();
//     const simulatedHours = now.getHours() - 2; // Par exemple, 2 heures en arrière
//     const simulatedMinutes = now.getMinutes();
//     const simulatedSeconds = now.getSeconds();

//     // Formatage de l'heure
//     const formattedHours = simulatedHours % 12 || 12;
//     const ampm = simulatedHours < 12 ? 'AM' : 'PM';

//     // Mise à jour de l'heure et de la date de PC
//     setPcTime(`${formattedHours.toString().padStart(2, '0')}:${simulatedMinutes.toString().padStart(2, '0')}:${simulatedSeconds.toString().padStart(2, '0')} ${ampm}`);
//     setPcDate(now.toLocaleDateString());
//   };

//   return (
//     <div className="clock-container">
//       <div className="clock-face">
//         <div className="hour-hand"></div>
//         <div className="minute-hand"></div>
//         <div className="second-hand"></div>
//       </div>
//       <div className="clock-info">
//         <p>{pcTime}</p>
//         <p>{pcDate}</p>
//       </div>
//     </div>
//   );
// };

// export default Clock;
























// import React, { useState, useEffect } from 'react';
// import moment from 'moment-timezone';
// import "./clock.scss";

// const Clock = () => {
//   const [time, setTime] = useState('');
//   const [date, setDate] = useState('');

//   useEffect(() => {
//     const timer = setInterval(() => tick(), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const tick = () => {
//     // Utiliser la zone horaire de Paris (Europe/Paris)
//     const now = moment.tz('Europe/Paris').now();
    
//     // Formatage de l'heure
//     const formattedTime = now.format('HH:mm:ss');
//     const ampm = now.format('A');

//     // Mise à jour de l'heure et de la date
//     setTime(`${formattedTime} ${ampm}`);
//     setDate(now.format('LL'));
//   };

//   return (
//     <div className="clock-container">
//       <div className="clock-face">
//         <div className="hour-hand"></div>
//         <div className="minute-hand"></div>
//         <div className="second-hand"></div>
//       </div>
//       <div className="clock-info">
//         <p>{time}</p>
//         <p>{date}</p>
//       </div>
//     </div>
//   );
// };

// export default Clock;
