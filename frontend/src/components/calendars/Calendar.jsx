// import React, { useState, useEffect } from 'react';
// import './calendar.scss'; // Assurez-vous que le fichier CSS est dans le même répertoire
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const Calendar = () => {
//   const [date, setDate] = useState(new Date());
//   const [currentMonth, setCurrentMonth] = useState(date.getMonth());
//   const [currentYear, setCurrentYear] = useState(date.getFullYear());
//   const [days, setDays] = useState([]);

//   const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
//     "Août", "Septembre", "Octobre", "Novembre", "Décembre"];


//   const renderCalendar = () => {
//     const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
//     const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//     const lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
//     const lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
//     const daysInMonth = [];

//     for (let i = firstDayOfMonth; i > 0; i--) {
//       daysInMonth.push(<li className="inactive" key={`last-${i}`}>{lastDateOfLastMonth - i + 1}</li>);
//     }

//     for (let i = 1; i <= lastDateOfMonth; i++) {
//       const isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
//       daysInMonth.push(<li className={isToday} key={i}>{i}</li>);
//     }

//     for (let i = lastDayOfMonth; i < 6; i++) {
//       daysInMonth.push(<li className="inactive" key={`next-${i}`}>{i - lastDayOfMonth + 1}</li>);
//     }

//     setDays(daysInMonth);
//   };

//   useEffect(() => {
//     renderCalendar();
//   }, [currentMonth, currentYear]);

//   const changeMonth = (increment) => {
//     const newMonth = currentMonth + increment;
//     if (newMonth < 0 || newMonth > 11) {
//       const newDate = new Date(currentYear, newMonth, 1);
//       setCurrentYear(newDate.getFullYear());
//       setCurrentMonth(newDate.getMonth());
//     } else {
//       setCurrentMonth(newMonth);
//     }
//   };

//   return (
//     <div className="wrapper">
//       <header>
//         <p className="current-date">{`${months[currentMonth]} ${currentYear}`}</p>
//         <div className="icons">
//           <span onClick={() => changeMonth(-1)} id="prev" className="material-symbols-rounded">
//             <FaChevronLeft />
//           </span>
//           <span onClick={() => changeMonth(1)} id="next" className="material-symbols-rounded">
//             <FaChevronRight />
//           </span>
//         </div>
//       </header>
//       <div className="calendar">
//         <ul className="weeks">
//           <li>Dim</li>
//           <li>Lun</li>
//           <li>Mar</li>
//           <li>Mer</li>
//           <li>Jeu</li>
//           <li>Ven</li>
//           <li>Sam</li>
//         </ul>
//         <ul className="days">
//           {days}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Calendar;
































import React, { useState, useEffect } from 'react';
import './calendar.scss'; // Assurez-vous que le fichier CSS est dans le même répertoire
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [days, setDays] = useState([]);

  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
    "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  // Fonction pour décaler le jour de la semaine, en commençant par lundi au lieu de dimanche
  const adjustFirstDayOfMonth = (day) => {
    return (day === 0) ? 6 : day - 1; // Si le jour est dimanche (0), on le place en dernier
  };

  const renderCalendar = () => {
    const firstDayOfMonth = adjustFirstDayOfMonth(new Date(currentYear, currentMonth, 1).getDay());
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    const lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    const daysInMonth = [];

    // Jours du mois précédent
    for (let i = firstDayOfMonth; i > 0; i--) {
      daysInMonth.push(<li className="inactive" key={`last-${i}`}>{lastDateOfLastMonth - i + 1}</li>);
    }

    // Jours du mois en cours
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
      daysInMonth.push(<li className={isToday} key={i}>{i}</li>);
    }

    // Jours du mois suivant
    for (let i = lastDayOfMonth; i < 6; i++) {
      daysInMonth.push(<li className="inactive" key={`next-${i}`}>{i - lastDayOfMonth + 1}</li>);
    }

    setDays(daysInMonth);
  };

  useEffect(() => {
    renderCalendar();
  }, [currentMonth, currentYear]);

  const changeMonth = (increment) => {
    const newMonth = currentMonth + increment;
    if (newMonth < 0 || newMonth > 11) {
      const newDate = new Date(currentYear, newMonth, 1);
      setCurrentYear(newDate.getFullYear());
      setCurrentMonth(newDate.getMonth());
    } else {
      setCurrentMonth(newMonth);
    }
  };

  return (
    <div className="wrapper">
      <header>
        <p className="current-date">{`${months[currentMonth]} ${currentYear}`}</p>
        <div className="icons">
          <span onClick={() => changeMonth(-1)} id="prev" className="material-symbols-rounded">
            <FaChevronLeft />
          </span>
          <span onClick={() => changeMonth(1)} id="next" className="material-symbols-rounded">
            <FaChevronRight />
          </span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Lun</li>
          <li>Mar</li>
          <li>Mer</li>
          <li>Jeu</li>
          <li>Ven</li>
          <li>Sam</li>
          <li>Dim</li>
        </ul>
        <ul className="days">
          {days}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
