import React, { useState, useEffect } from "react";
// import "./Calendrier_2.scss";

const Calendrier_2 = () => {
  const [currDate, setCurrDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(currDate.getFullYear());
  const [currMonth, setCurrMonth] = useState(currDate.getMonth());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    renderCalendar();
  }, [currMonth, currYear]);

  const renderCalendar = () => {
    const daysTag = document.querySelector(".days");
    const currentDate = document.querySelector(".current-date");
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday =
        i === currDate.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
  };

  const handlePrevNext = (direction) => {
    setCurrMonth((prev) => {
      let newMonth = direction === "prev" ? prev - 1 : prev + 1;
      if (newMonth < 0) {
        setCurrYear(currYear - 1);
        newMonth = 11;
      } else if (newMonth > 11) {
        setCurrYear(currYear + 1);
        newMonth = 0;
      }
      return newMonth;
    });
  };

  return (
    <div className="wrapper">
      <header>
        <p className="current-date"></p>
        <div className="icons">
          <span
            id="prev"
            className="material-symbols-rounded"
            onClick={() => handlePrevNext("prev")}
          >
            chevron_left
          </span>
          <span
            id="next"
            className="material-symbols-rounded"
            onClick={() => handlePrevNext("next")}
          >
            chevron_right
          </span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days"></ul>
      </div>
    </div>
  );
};

export default Calendrier_2;
