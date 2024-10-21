import React from 'react';

const DaysList = ({ days }) => (
  <ul className="days">
    {days.map((day, index) => (
      <li key={index} className={`${day.length > 0 ? 'active' : ''}`}>
        {day}
      </li>
    ))}
  </ul>
);

export default DaysList;
