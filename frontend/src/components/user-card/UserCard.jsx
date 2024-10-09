


import React, { useState, useEffect } from 'react';
import "./usercard.scss";
import { MdEdit, MdVisibility } from 'react-icons/md';
import UserUpdateScreenDialog from '../MUI/UserModalUpdate';
import { useNavigate } from 'react-router-dom';
const UserCard = ({ users, refetch }) => {
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();  // Initialisation de useNavigate

  // Si users est indéfini ou vide, afficher un message d'erreur
  if (!users || !Array.isArray(users) || users.length === 0) {
    return <p>Aucun utilisateur trouvé.</p>;
  }

  const handleOpenModal = (userId) => {
    setSelectedFolderId(userId);
    console.log(userId)
    // setMode(mode);
    setModalOpen(true);
  };
  
  const handleShowClick = (userId) => {
    console.log("Show")
    console.log(userId)
    // setSelectedFolderId(userId);
    navigate('/utilisateur/show_user', { state: { userId } });  // Passer l'ID à la UserPage
    if (selectedFolderId) {
      // const userId = selectedFolderId.data._id;  // Récupérer l'ID de l'utilisateur
      console.log(userId)
      // navigate('/utilisateur/show_user', { state: { userId } });  // Passer l'ID à la UserPage
    }
};

  const handleCloseModal = () => setModalOpen(false);

  // useEffect(() => {
  //   if (onSuccess) onSuccess(); // Assure-toi que refetch est bien défini
  // }, [onSuccess]);  // Vérifie aussi si c'est nécessaire, ou si tu peux déplacer ça dans `TableArchive`.



  return (
    <div className='container__cards'>
      {users.map((user, index) => (
        <div key={index} className="content_user">
          <div className="user_details">
            <div className="img_user">
              {/* Utilisation d'une image par défaut si l'utilisateur n'a pas d'image */}
              <img
                className="imageUser"
                // src={user.image ? `http://127.0.0.1:9876/uploads/${user.image}` : "default_user_image.png"}
                src={
                  user.image.startsWith('uploads_default/')
                  ? `http://127.0.0.1:9876/uploads/${user.image}` // Si l'image est dans "upload_default/", ajouter "uploads/" devant
                  : `http://127.0.0.1:9876${user.image}` // Sinon, garder le chemin de l'image tel quel
              }
                alt="Profile"
              />
            </div>
            <div className="text__user">
              <div className="name_user">{user.name}</div>
              <span>{user.email}</span><br />
              <span>{user.role}</span>
            </div>
          </div>
          <div className="_user">
            <div className="info__User">Rôle: {user.role}</div>
            <span>Statut: {user.status}</span><br />
            {/* Icônes d'édition, suppression et vue */}
            <MdEdit onClick={() => handleOpenModal(user._id)} className="icon__user" title="Modifier" />
            <MdVisibility className="icon__user" title="Afficher" onClick={() => handleShowClick(user._id)} />
            {/* <MdDelete className="icon__user" title="Supprimer" /> */}
          </div>
        </div>
      ))}

      {modalOpen && (
        <UserUpdateScreenDialog
          open={modalOpen}
          handleClose={handleCloseModal}
          userId={selectedFolderId} // Passer l'ID du courrier à la modale
          onSuccess={refetch} // On passe refetch ici
        />
      )}
    </div>
  );
}

export default UserCard;
