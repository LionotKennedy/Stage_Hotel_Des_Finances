
import React, { useEffect, useState } from 'react';
import "./profilecard.scss";
import { getProfile } from '../../services/authServices'; // Importez le service
import FullScreenDialog from '../MUI/ProfileModal'; // Importez votre FullScreenDialog
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



const ProfileCard = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedFolderId, setSelectedFolderId] = useState(null);

    const navigate = useNavigate();  // Initialisation de useNavigate

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        if (token && userId) {
            fetchProfileData(userId, token);
        } else {
            setError("Utilisateur non trouvé. Veuillez vous reconnecter.");
        }
    }, []);

    const fetchProfileData = async (userId, token) => {
        try {
            const profileData = await getProfile(userId, token);
            console.log('Données du profil:', profileData);
            setUserData(profileData);  // Mettre à jour les états avec les données du profil
        } catch (error) {
            setError(error.message);
        }
    };

    // Fonction pour ouvrir le dialogue
    const userId = localStorage.getItem('userId');
    const handleOpenDialog = (userId) => {

        setSelectedFolderId(userId);
        setDialogOpen(true);
    };

    // Fonction pour fermer le dialogue
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleSubscribeClick = () => {
        if (userData) {
            const userId = userData.data._id;  // Récupérer l'ID de l'utilisateur
            navigate('/profile/profile_page', { state: { userId } });  // Passer l'ID à la UserPage
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!userData) {
        return <div>Chargement...</div>;
    }

    const { name, email, image } = userData.data; // Extraire les informations de l'utilisateur
    console.log("Coucou____" + image);
    // console.log("Coucou"+userData.data);

    return (
        <div className="container__profile">
            <div className="profile__card"  data-aos="flip-right">
                <div className="image__profile">
                    {/* Afficher l'image récupérée de l'API */}
                    <img
                        src={getImageUrl(image)}
                        alt="Profile Image"
                        className="profile__img"
                    />
                </div>

                <div className="text__data">
                    {/* Afficher le nom et l'email récupérés */}
                    <span className="name">{name}</span>
                    <span className="job">{email}</span>
                </div>

                <div className="media__buttons">
                    <a href="#" className="link facebook">
                        {/* <i className="bx bxl-facebook"></i> */}
                    </a>
                    <a href="#" className="link twitter">
                        {/* <i className="bx bxl-twitter"></i> */}
                    </a>
                    <a href="#" className="link instagram">
                        {/* <i className="bx bxl-instagram"></i> */}
                    </a>
                    <a href="#" className="link youtube">
                        {/* <i className="bx bxl-youtube"></i> */}
                    </a>
                </div>

                <div className="buttons">
                    <button className="button__btn" onClick={handleSubscribeClick}>
                        Modification profile
                    </button>
                    <button className="button__btn" onClick={() => handleOpenDialog(userId)}>
                        Change mot de passe
                    </button>
                </div>

                <div className="analytics">
                    <div className="data">
                        <i className="bx bx-heart"></i>
                        <span className="number"></span>
                    </div>
                    <div className="data">
                        <i className="bx bx-message-rounded"></i>
                        <span className="number"></span>
                    </div>
                    <div className="data">
                        <i className="bx bx-share"></i>
                        <span className="number"></span>
                    </div>
                </div>
            </div>
            {/* Appel du composant FullScreenDialog */}
            <FullScreenDialog open={dialogOpen} handleClose={handleCloseDialog} userId={selectedFolderId} />
        </div>
    );
}

const getImageUrl = (image) => {
    if (image.startsWith('uploads_default')) {
        return `http://127.0.0.1:9876/uploads/${image}`;
    } else {
        return `http://127.0.0.1:9876${image}`;
    }
};


export default ProfileCard;
