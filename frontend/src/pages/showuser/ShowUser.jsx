// import React, { useEffect } from 'react'
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useGetUserById } from '../../services/serviceUser';
// import { FaArrowLeft } from 'react-icons/fa';
// import "./showuser.scss"

// const ShowUser = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const userId = location.state?.userId;
//   const { data: userData, error, isLoading } = useGetUserById(userId);
//   useEffect(() => {
//     if (userData && userData.data) {
//       console.log('Données du formulairelll:', userData.data.image);
//       console.log('Données du formulairelll:', userData);
//       console.log('Données du formulairelll:', userData.data.name);
//       console.log('Données du formulairelll:', userData);
//     }
//   }, [userData])
  

//   const handleBackClick = () => {
//     navigate('/utilisateur');
//   };

//   return (
//     <div className='container__users'>
//       <h1>User Profile</h1>
//       <div className='icon__back'>
//         <FaArrowLeft
//           className='back-icon'
//           onClick={handleBackClick}
//           size={44}
//           style={{ cursor: 'pointer' }}
//         />
//       </div>
//       {userId ? (
//         <p>ID Utilisateur: {userId}</p>
//       ) : (
//         <p>ID utilisateur non trouvé.</p>
//       )}
//       {isLoading && <p>Chargement des données...</p>}
//       {error && <p>Erreur lors de la récupération des données utilisateur: {error.message}</p>}

//       {/* <h1>{userData.data.name}</h1> */}
//       {/* <div>{userData.data.email}</div>
//       <div>{userData.data.role}</div>
//       <div>{userData.data.status}</div>
//       <div className='imgs_show'>
//         <img className='img_show' src={userData.data.image} alt="" />
//       </div> */}
//     </div>
//   )
// }

// export default ShowUser
































import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGetUserById } from '../../services/serviceUser';
import { FaArrowLeft } from 'react-icons/fa';
import './showuser.scss';

const ShowUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state?.userId;
  const { data: userData, error, isLoading } = useGetUserById(userId);

  useEffect(() => {
    if (userData && userData.data) {
      console.log('Données de l\'utilisateur:', userData);
    }
  }, [userData]);

  const handleBackClick = () => {
    navigate('/utilisateur');
  };

  return (
    <div className="container__users">
      <h1>User Profile</h1>
      <div className="icon__back">
        <FaArrowLeft
          className="back-icon"
          onClick={handleBackClick}
          size={44}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {userId ? (
        <p>ID Utilisateur: {userId}</p>
      ) : (
        <p>ID utilisateur non trouvé.</p>
      )}
      {isLoading && <p>Chargement des données...</p>}
      {error && <p>Erreur lors de la récupération des données utilisateur: {error.message}</p>}
      
      {/* Afficher les données de l'utilisateur si elles existent */}
      {userData && userData.data && (
        <div className="user-details">
          <h2>Nom: {userData.data.name}</h2>
          <p>Email: {userData.data.email}</p>
          <p>Rôle: {userData.data.role === 1 ? 'Admin' : 'Utilisateur'}</p>
          <p>Statut: {userData.data.status}</p>
          <div className="imgs_show">
            <img className="img_show" src={userData.data.image} alt="User" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowUser;
