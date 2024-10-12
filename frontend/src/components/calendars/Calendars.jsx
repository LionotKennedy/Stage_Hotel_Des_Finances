// // Calendar.js
// import React, { useState } from 'react';
// import moment from 'moment';
// import './calendar.scss';

// const Calendars = () => {
//   const [currentMonth, setCurrentMonth] = useState(moment());

//   const handlePrevMonth = () => {
//     setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth(currentMonth.clone().add(1, 'month'));
//   };

//   const renderDaysOfWeek = () => {
//     return (
//       <div className="calendar-days-of-week">
//         {moment.weekdaysShort().map((day, index) => (
//           <div key={index} className="day">
//             {day}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderDays = () => {
//     const daysInMonth = currentMonth.daysInMonth();
//     let firstDayOfMonth = currentMonth.startOf('month').day(); // Utiliser let au lieu de const
//     const weeks = [];

//     let dayCount = 1;

//     // Fill in the days before the first of the month
//     const daysBefore = Array(firstDayOfMonth).fill(null);
//     weeks.push(<div className="calendar-week">{daysBefore.map((_, index) => <div key={index} className="day empty"></div>)}</div>);

//     // Fill in the days of the month
//     while (dayCount <= daysInMonth) {
//       const week = [];

//       for (let i = 0; i < 7; i++) {
//         if (dayCount > daysInMonth) break;

//         if (i < firstDayOfMonth && weeks.length === 1) {
//           week.push(<div key={i} className="day empty"></div>);
//         } else {
//           week.push(
//             <div key={i} className="day">
//               {dayCount}
//             </div>
//           );
//           dayCount++;
//         }
//       }

//       weeks.push(<div className="calendar-week">{week}</div>);
//       firstDayOfMonth = 0; // Reset after the first week
//     }

//     return weeks;
// };


//   return (
//     <div className="calendar">
//       <header className="calendar-header">
//         <button onClick={handlePrevMonth}>Précédent</button>
//         <h2>{currentMonth.format('MMMM YYYY')}</h2>
//         <button onClick={handleNextMonth}>Suivant</button>
//       </header>
//       {renderDaysOfWeek()}
//       {renderDays()}
//     </div>
//   );
// };

// export default Calendars;










































// // Calendar.js
// import React, { useState } from 'react';
// import moment from 'moment';
// import './calendar.scss';

// const Calendars = () => {
//   const [currentMonth, setCurrentMonth] = useState(moment());
//   const today = moment(); // Date actuelle

//   const handlePrevMonth = () => {
//     setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth(currentMonth.clone().add(1, 'month'));
//   };

//   const renderDaysOfWeek = () => {
//     return (
//       <div className="calendar-days-of-week">
//         {moment.weekdaysShort().map((day, index) => (
//           <div key={index} className="day">
//             {day}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderDays = () => {
//     const daysInMonth = currentMonth.daysInMonth();
//     let firstDayOfMonth = currentMonth.startOf('month').day();
//     const weeks = [];
//     let dayCount = 1;

//     // Fill in the days before the first of the month
//     const daysBefore = Array(firstDayOfMonth).fill(null);
//     weeks.push(
//       <div className="calendar-week">
//         {daysBefore.map((_, index) => (
//           <div key={index} className="day empty"></div>
//         ))}
//       </div>
//     );

//     // Fill in the days of the month
//     while (dayCount <= daysInMonth) {
//       const week = [];

//       for (let i = 0; i < 7; i++) {
//         if (dayCount > daysInMonth) break;

//         const dayDate = currentMonth.clone().date(dayCount); // Date actuelle du jour

//         // Vérifie si la date correspond à aujourd'hui
//         const isToday = dayDate.isSame(today, 'day');
        
//         week.push(
//           <div key={i} className={`day ${isToday ? 'today' : ''}`}>
//             {dayCount}
//           </div>
//         );
//         dayCount++;
//       }

//       weeks.push(<div className="calendar-week">{week}</div>);
//       firstDayOfMonth = 0; // Reset after the first week
//     }

//     return weeks;
//   };

//   return (
//     <div className="calendar">
//       <header className="calendar-header">
//         <button onClick={handlePrevMonth}>Précédent</button>
//         <h2>{currentMonth.format('MMMM YYYY')}</h2>
//         <button onClick={handleNextMonth}>Suivant</button>
//       </header>
//       {renderDaysOfWeek()}
//       {renderDays()}
//     </div>
//   );
// };

// export default Calendars;


























// Calendar.js
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/fr'; // Importation du locale français
import './calendar.scss';

const Calendars = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());

  useEffect(() => {
    // Configurer Moment.js pour utiliser la langue française
    moment.locale('fr');
  }, []);

  const today = moment(); // Date actuelle

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, 'month'));
  };

  const renderDaysOfWeek = () => {
    return (
      <div className="calendar-days-of-week">
        {moment.weekdaysShort().map((day, index) => (
          <div key={index} className="day">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderDays = () => {
    const daysInMonth = currentMonth.daysInMonth();
    let firstDayOfMonth = currentMonth.startOf('month').day();
    const weeks = [];
    let dayCount = 1;

    // Remplir les jours avant le début du mois
    const daysBefore = Array(firstDayOfMonth).fill(null);
    weeks.push(
      <div className="calendar-week">
        {daysBefore.map((_, index) => (
          <div key={index} className="day empty"></div>
        ))}
      </div>
    );

    // Remplir les jours du mois
    while (dayCount <= daysInMonth) {
      const week = [];

      for (let i = 0; i < 7; i++) {
        if (dayCount > daysInMonth) break;

        const dayDate = currentMonth.clone().date(dayCount); // Date actuelle du jour
        const isToday = dayDate.isSame(today, 'day'); // Vérifie si c'est aujourd'hui

        week.push(
          <div key={i} className={`day ${isToday ? 'today' : ''}`}>
            {dayCount}
          </div>
        );
        dayCount++;
      }

      weeks.push(<div className="calendar-week">{week}</div>);
      firstDayOfMonth = 0; // Réinitialiser après la première semaine
    }

    return weeks;
  };

  return (
    <div className="calendar">
      <header className="calendar-header">
        <button onClick={handlePrevMonth}>Précédent</button>
        <h2>{currentMonth.format('MMMM YYYY')}</h2> {/* Format français */}
        <button onClick={handleNextMonth}>Suivant</button>
      </header>
      {renderDaysOfWeek()}
      {renderDays()}
    </div>
  );
};

export default Calendars;
