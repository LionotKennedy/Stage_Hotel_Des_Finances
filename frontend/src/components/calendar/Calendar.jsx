// src/components/CalendarComponent.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';

const CalendarComponent = () => {
//   const [date, setDate] = useState(new Date()); // Date actuelle

//   return (
//     // <div>
//     //   <h3>Sélectionne une date :</h3>
//     //   <Calendar 
//     //     onChange={setDate} // Met à jour la date quand l'utilisateur clique sur une date
//     //     value={date} // Définit la date actuelle par défaut
//     //   />
//     //   <p>Date sélectionnée : {date.toDateString()}</p> {/* Affiche la date sélectionnée */}
//     // </div>

//     <div className="calendar-container">
//       <h3 className="calendar-title">Sélectionne une date :</h3>
//       <Calendar
//         onChange={setDate} // Met à jour la date quand l'utilisateur clique sur une date
//         value={date} // Définit la date actuelle par défaut
//         className="custom-calendar" // Applique une classe CSS pour le styliser
//       />
//       <div className="selected-date">
//         <p>Date sélectionnée : <strong>{date.toDateString()}</strong></p>
//       </div>
//     </div>

//   );




const [date, setDate] = useState(new Date()); // Date actuelle

  // Fonction pour formater la date en français
  const formatDate = (date) => {
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="calendar-container">
      <h3 className="calendar-title">Sélectionne une date :</h3>
      <Calendar
        onChange={setDate} // Met à jour la date quand l'utilisateur clique sur une date
        value={date} // Définit la date actuelle par défaut
        className="custom-calendar" // Applique une classe CSS pour le styliser
      />
      <div className="selected-date">
        <p>Date sélectionnée : <strong>{formatDate(date)}</strong></p>
      </div>
    </div>
  );



  
};

export default CalendarComponent;
