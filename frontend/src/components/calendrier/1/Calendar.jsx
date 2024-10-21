// import React from 'react';
// import DaysList from './DaysList';
// import WeeksList from './WeeksList';

// const Calendar = ({ date, year, month }) => {
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const firstDayOfMonth = new Date(year, month, 1).getDay();

//   const weeks = Array.from({ length: Math.ceil((firstDayOfMonth + daysInMonth) / 7) }, (_, i) =>
//     Array.from({ length: 7 }, (_, j) => j >= firstDayOfMonth && j < firstDayOfMonth + daysInMonth ? j - firstDayOfMonth + 1 : '')
//   );

//   return (
//     <div className="calendar">
//       <WeeksList weeks={weeks} />
//       <DaysList days={weeks[0]} />
//     </div>
//   );
// };

// export default Calendar;








import React from 'react';
import DaysList from './DaysList';
import WeeksList from './WeeksList';

const Calendar = ({ date, year, month }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const weeks = Array.from({ length: Math.ceil((firstDayOfMonth + daysInMonth) / 7) }, (_, i) =>
    Array.from({ length: 7 }, (_, j) => j >= firstDayOfMonth && j < firstDayOfMonth + daysInMonth ? j - firstDayOfMonth + 1 : '')
  );

  const renderDays = () => {
    return weeks.map((week, weekIndex) =>
      week.map((day, dayIndex) => (
        <li key={`${weekIndex}-${dayIndex}`} className={day ? 'active' : ''}>
          {day}
        </li>
      ))
    );
  };

  return (
    <div className="calendar">
      <WeeksList />
      <DaysList days={renderDays()} />
    </div>
  );
};

export default Calendar;

