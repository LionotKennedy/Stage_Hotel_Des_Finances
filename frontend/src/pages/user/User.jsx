import React, { useState } from 'react';
import "./user.scss"
import UserCard from '../../components/user-card/UserCard'
import CustomModal from '../../components/MUI/CustomModal';

const User = () => {
  const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la modale

  const handleOpenModal = () => setModalOpen(true); // Fonction pour ouvrir la modale
  const handleCloseModal = () => setModalOpen(false); // Fonction pour fermer la modale
  return (
    <div className='container__users'>
       <UserCard />
       <UserCard />
       <UserCard />

       <button onClick={handleOpenModal} className="open-modal-btn">
        Ouvrir la Modale
      </button>

      <CustomModal open={modalOpen} handleClose={handleCloseModal} />
    </div>
)
}

export default User
