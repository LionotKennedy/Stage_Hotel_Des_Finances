import React, { useState } from 'react';
import Calendar from './Calendar';

function Application() {
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const handlePrev = () => {
    setMonth(month - 1);
    if (month < 0) {
      setMonth(11);
      setYear(year - 1);
    }
  };

  const handleNext = () => {
    setMonth(month + 1);
    if (month > 11) {
      setMonth(0);
      setYear(year + 1);
    }
  };

  return (
    <div className="wrapper">
      <header>
        <h2>{new Date().toLocaleString('default', { month: 'long' })} {year}</h2>
        <div className="icons">
          <button onClick={handlePrev}>{'<'} </button>
          <button onClick={handleNext}>{'>'}</button>
        </div>
      </header>
      <Calendar date={date} year={year} month={month} />
    </div>
  );
}

export default Application;
