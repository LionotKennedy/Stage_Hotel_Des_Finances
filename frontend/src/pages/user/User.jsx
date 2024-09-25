import React, { useState } from 'react';
import "./user.scss"
import UserCard from '../../components/user-card/UserCard'
import CustomModal from '../../components/MUI/CustomModal';
import CalendarComponent from '../../components/calendar/Calendar';
import DateRangeCalendarComponent from '../../components/calendar/DateRangeCalendar';
import BasicDateCalendar from '../../components/calendar/BasicDateCalendar';
import CurrentTime from '../../components/Timer/CurrentTime';
import StyledTimeClock from '../../components/Timer/StyledTimeClock';
// import MuiCalendarComponent from '../../components/calendar/MuiCalendarComponent';


const User = () => {
  const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la modale

  const handleOpenModal = () => setModalOpen(true); // Fonction pour ouvrir la modale
  const handleCloseModal = () => setModalOpen(false); // Fonction pour fermer la modale
  return (
    <div className='container__users'>
       <UserCard />
       <UserCard />
       <UserCard />

       {/* <button onClick={handleOpenModal} className="open-modal-btn">
        Ouvrir la Modale
      </button> */}

      <CustomModal open={modalOpen} handleClose={handleCloseModal} />

      {/* <CalendarComponent /> */}
      {/* <MuiCalendarComponent /> */}
      {/* <DateRangeCalendarComponent /> */}
      {/* <BasicDateCalendar /> */}
      {/* <CurrentTime /> */}
      {/* <StyledTimeClock /> */}
    </div>
)
}

export default User
