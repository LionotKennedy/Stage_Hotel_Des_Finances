import React, { useState, useEffect } from 'react';
import "./user.scss"
import UserCard from '../../components/user-card/UserCard'
import { useGetUser } from '../../services/serviceUser';
import { MdAdd } from 'react-icons/md';
import UserScreenDialog from '../../components/MUI/UserModal';
// import CustomModal from '../../components/MUI/CustomModal';

import CalendarComponent from '../../components/calendar/Calendar';
// import DateRangeCalendarComponent from '../../components/calendar/DateRangeCalendar';
import BasicDateCalendar from '../../components/calendar/BasicDateCalendar';
import CurrentTime from '../../components/Timer/CurrentTime';
// import StyledTimeClock from '../../components/Timer/StyledTimeClock';
// import MuiCalendarComponent from '../../components/calendar/MuiCalendarComponent';


const User = () => {
  const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la modale
  const { data: users, refetch, isLoading, isError } = useGetUser();

  // Fonction pour ouvrir le dialogue
  const handleOpenDialog = () => {
    setModalOpen(true);
  };

  // Fonction pour fermer le dialogue
  const handleCloseDialog = () => {
    setModalOpen(false);
  };


  useEffect(() => {
    if (users && users.data) {
      console.log('Données des archives par groupes:', users.data);
    }
  }, [users]);

  useEffect(() => {
    refetch();
}, [refetch]);


  if (isLoading) {
    return <p>Chargement des archives...</p>;
  }

  if (isError) {
    return <p>Erreur lors du chargement des archives.</p>;
  }

  return (
    <div className='container__archive'>
      <div className='add__users'>
      <MdAdd onClick={handleOpenDialog} className="icon_adds user__add" style={{ marginLeft: '10px', fontSize: '24px' }} />
      </div>
      {users?.data && users.data.length > 0 ? (
        <div className="card-container">
          <UserCard users={users.data} />
        </div>
      ) : (
        <p>Aucune utilisateur trouvée.</p>
      )}

      <UserScreenDialog open={modalOpen} handleClose={handleCloseDialog} onSuccess={refetch} />


      {/* <button onClick={handleOpenModal} className="open-modal-btn">
        Ouvrir la Modale
      </button> */}

      {/* <CustomModal open={modalOpen} handleClose={handleCloseModal} /> */}

      {/* <DateRangeCalendarComponent /> */}
      {/* <MuiCalendarComponent /> */}
      <CalendarComponent />
      <BasicDateCalendar />
      <CurrentTime />
      {/* <StyledTimeClock /> */}
    </div>
  )
}

export default User
