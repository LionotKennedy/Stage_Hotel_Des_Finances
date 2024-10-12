import React, { useState, useEffect } from 'react';
import "./user.scss";
import UserCard from '../../components/user-card/UserCard';
import { useGetUser } from '../../services/serviceUser';
import { MdAdd } from 'react-icons/md';
import UserScreenDialog from '../../components/MUI/UserModal';
import ReactPaginate from 'react-paginate';
import Calendars from '../../components/calendars/Calendars';
import CalendarComponent from '../../components/calendars/CalendarComponent';
import Clock from '../../components/hours/Clock';
import CurrentTime from '../../components/Timer/CurrentTime';
import AnalogClock from '../../components/Timer/AnalogClock';

const User = () => {
  const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la modale
  const { data: users, refetch, isLoading, isError } = useGetUser();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2; // Nombre d'éléments par page

  // Calcule les éléments à afficher sur la page actuelle
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users?.data?.slice(indexOfFirstItem, indexOfLastItem) || [];

  // Fonction pour changer de page
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    if (refetch) {
      refetch();
    }
  }, [refetch]);

  // Fonction pour ouvrir le dialogue
  const handleOpenDialog = () => {
    setModalOpen(true);
  };

  // Fonction pour fermer le dialogue
  const handleCloseDialog = () => {
    setModalOpen(false);
  };

  if (isLoading) {
    return <p>Chargement des utilisateurs...</p>;
  }

  if (isError) {
    return <p>Erreur lors du chargement des utilisateurs.</p>;
  }

  return (
    <div className='container__archive'>
      <div className='content__users'>
        <div className='title__user'>
          <span>Liste des utilisateurs</span>
        </div>
        <div className='add__users'>
          <MdAdd onClick={handleOpenDialog} className="icon_adds user__add" style={{ marginLeft: '10px', fontSize: '24px' }} />
        </div>
      </div>
      {users?.data && users.data.length > 0 ? (
        <>
          <div className="card-container">
            {/* Pass only the current page items to UserCard */}
            <UserCard users={currentItems} refetch={refetch} />
          </div>
          <ReactPaginate
            previousLabel={'Précédent'}
            nextLabel={'Suivant'}
            breakLabel={'...'}
            pageCount={Math.ceil(users.data.length / itemsPerPage)} // Nombre total de pages
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </>
      ) : (
        <p>Aucun utilisateur trouvé.</p>
      )}
      <UserScreenDialog open={modalOpen} handleClose={handleCloseDialog} onSuccess={refetch} />
      {/* <Calendars /> */}
      {/* <CalendarComponent /> */}
      <div>
        <CurrentTime />
        <AnalogClock />
      </div>
      <Clock />
    </div>
  );
};

export default User;
























// import React, { useState, useEffect } from 'react';
// import "./user.scss"
// import UserCard from '../../components/user-card/UserCard'
// import { useGetUser } from '../../services/serviceUser';
// import { MdAdd } from 'react-icons/md';
// import UserScreenDialog from '../../components/MUI/UserModal';



// const User = () => {
//   const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la modale
//     const { data: users, refetch, isLoading, isError } = useGetUser();


//   useEffect(() => {
//     if (refetch) {
//       refetch();
//     }
//   }, [refetch]);

//   // Fonction pour ouvrir le dialogue
//   const handleOpenDialog = () => {
//     setModalOpen(true);
//     // refetch(); // Rafraîchir les données
//   };

//   // Fonction pour fermer le dialogue
//   const handleCloseDialog = () => {
//     setModalOpen(false);
//   };

//   if (isLoading) {
//     return <p>Chargement des archives...</p>;
//   }

//   if (isError) {
//     return <p>Erreur lors du chargement des archives.</p>;
//   }

//   return (
//     <div className='container__archive'>
//       <div className='content__users'>
//         <div className='title__user'>
//           <span>Liste de l'utilisateur</span>
//         </div>
//         <div className='add__users'>
//           <MdAdd onClick={handleOpenDialog} className="icon_adds user__add" style={{ marginLeft: '10px', fontSize: '24px' }} />
//         </div>
//       </div>
//       {users?.data && users.data.length > 0 ? (
//         <div className="card-container">
//           {/* <UserCard users={users.data} refetch={refetch} /> */}
//           {/* <UserCard users={users.data} onSuccess={refetch} refetch={refetch} /> */}
//           <UserCard users={users.data} refetch={refetch} />
//         </div>
//       ) : (
//         <p>Aucune utilisateur trouvée.</p>
//       )}
//       <UserScreenDialog open={modalOpen} handleClose={handleCloseDialog} onSuccess={refetch} />
//     </div>
//   )
// }

// export default User

























// import CalendarComponent from '../../components/calendar/Calendar';
// import BasicDateCalendar from '../../components/calendar/BasicDateCalendar';
// import CurrentTime from '../../components/Timer/CurrentTime';
// import StyledTimeClock from '../../components/Timer/StyledTimeClock';

// import CustomModal from '../../components/MUI/CustomModal';
// import DateRangeCalendarComponent from '../../components/calendar/DateRangeCalendar';
// import MuiCalendarComponent from '../../components/calendar/MuiCalendarComponent';



{/* <DateRangeCalendarComponent /> */ }
{/* <MuiCalendarComponent /> */ }
{/* <CalendarComponent /> */ }
{/* <BasicDateCalendar /> */ }
{/* <CurrentTime /> */ }
{/* <StyledTimeClock /> */ }