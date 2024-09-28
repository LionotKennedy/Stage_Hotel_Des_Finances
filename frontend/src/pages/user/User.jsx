import React, { useState, useEffect } from 'react';
import "./user.scss"
import UserCard from '../../components/user-card/UserCard'
// import CustomModal from '../../components/MUI/CustomModal';
// import CalendarComponent from '../../components/calendar/Calendar';
// import DateRangeCalendarComponent from '../../components/calendar/DateRangeCalendar';
// import BasicDateCalendar from '../../components/calendar/BasicDateCalendar';
// import CurrentTime from '../../components/Timer/CurrentTime';
// import StyledTimeClock from '../../components/Timer/StyledTimeClock';
// import MuiCalendarComponent from '../../components/calendar/MuiCalendarComponent';
import { useGetUser } from '../../services/serviceUser';


const User = () => {
  const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la modale
  const { data: users, isLoading, isError } = useGetUser();

  const handleOpenModal = () => setModalOpen(true); // Fonction pour ouvrir la modale
  const handleCloseModal = () => setModalOpen(false); // Fonction pour fermer la modale

  useEffect(() => {
    if (users && users.data) {
      console.log('Données des archives par groupes:', users.data);
    }
  }, [users]);

  if (isLoading) {
    return <p>Chargement des archives...</p>;
  }

  if (isError) {
    return <p>Erreur lors du chargement des archives.</p>;
  }

  return (
    <div className='container__users'>
      {users?.data && users.data.length > 0 ? (
        <div className="card-container">
          <UserCard users={users.data} />
        </div>
      ) : (
        <p>Aucune utilisateur trouvée.</p>
      )}
      {/* <button onClick={handleOpenModal} className="open-modal-btn">
        Ouvrir la Modale
      </button> */}

      {/* <CustomModal open={modalOpen} handleClose={handleCloseModal} /> */}

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
