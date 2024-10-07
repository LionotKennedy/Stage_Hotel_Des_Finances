import React, { useState, useEffect } from 'react';
import "./user.scss"
import UserCard from '../../components/user-card/UserCard'
import { useGetUser } from '../../services/serviceUser';
import { MdAdd } from 'react-icons/md';
import UserScreenDialog from '../../components/MUI/UserModal';

import CalendarComponent from '../../components/calendar/Calendar';
import BasicDateCalendar from '../../components/calendar/BasicDateCalendar';
import CurrentTime from '../../components/Timer/CurrentTime';
// import CustomModal from '../../components/MUI/CustomModal';
// import DateRangeCalendarComponent from '../../components/calendar/DateRangeCalendar';
// import StyledTimeClock from '../../components/Timer/StyledTimeClock';
// import MuiCalendarComponent from '../../components/calendar/MuiCalendarComponent';


const User = () => {
  const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la modale
  const { data: users, refetch, isLoading, isError } = useGetUser();

  // Fonction pour ouvrir le dialogue
  const handleOpenDialog = () => {
    setModalOpen(true);
    refetch(); // Rafraîchir les données
  };

  // Fonction pour fermer le dialogue
  const handleCloseDialog = () => {
    setModalOpen(false);
  };


  useEffect(() => {
    // if (users && users.data) {
    //   console.log('Données des archives par groupes:', users.data);
    // }
    users?.data?.forEach((users) => console.log('Folder data:', users));
  }, [users]);

  useEffect(() => {
    if (refetch) refetch(); // Assure-toi que refetch est bien défini
  }, [refetch]);  // Vérifie aussi si c'est nécessaire, ou si tu peux déplacer ça dans `TableArchive`.


  if (isLoading) {
    return <p>Chargement des archives...</p>;
  }

  if (isError) {
    return <p>Erreur lors du chargement des archives.</p>;
  }

  return (
    <div className='container__archive'>
      <div className='content__users'>
        <div className='title__user'>
          <span>Liste de l'utilisateur</span>
        </div>
        <div className='add__users'>
          <MdAdd onClick={handleOpenDialog} className="icon_adds user__add" style={{ marginLeft: '10px', fontSize: '24px' }} />
        </div>
      </div>
      {users?.data && users.data.length > 0 ? (
        <div className="card-container">
          <UserCard users={users.data} refetch={refetch} />
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
