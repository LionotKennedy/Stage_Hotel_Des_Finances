import React from 'react';

const WeeksList = ({ weeks }) => (
  <ul className="weeks">
    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
      <li key={index}>{day}</li>
    ))}
  </ul>
);

export default WeeksList;
