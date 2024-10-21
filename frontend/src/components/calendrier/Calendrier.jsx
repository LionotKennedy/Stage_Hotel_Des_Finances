import React, { useState, useEffect } from "react";
// import "./calendrier.scss"; // Importation du fichier CSS

const Calendrier = () => {
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [daysHTML, setDaysHTML] = useState("");
  
  const months = ["January", "February", "March", "April", "May", "June", "July", 
                  "August", "September", "October", "November", "December"];

  const renderCalendar = () => {
    let date = new Date(),
      firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
      lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
      lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
      lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    return liTag;
  };

  useEffect(() => {
    setDaysHTML(renderCalendar());
  }, [currYear, currMonth]);

  const handlePrevNext = (direction) => {
    setCurrMonth((prev) => (direction === "prev" ? prev - 1 : prev + 1));

    if (currMonth < 0 || currMonth > 11) {
      let newDate = new Date(currYear, currMonth);
      setCurrYear(newDate.getFullYear());
      setCurrMonth(newDate.getMonth());
    }
  };

  return (
    <div className="wrapper">
      <header>
        <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
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
        <ul
          className="days"
          dangerouslySetInnerHTML={{ __html: daysHTML }} // Pour afficher les jours rendus
        ></ul>
      </div>
    </div>
  );
};

export default Calendrier;
