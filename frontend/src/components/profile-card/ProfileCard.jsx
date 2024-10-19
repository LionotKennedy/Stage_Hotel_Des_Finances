
// import React, { useEffect, useState } from 'react';
// import "./profilecard.scss";
// import { getProfile } from '../../services/authServices'; // Importez le service
// import FullScreenDialog from '../MUI/ProfileModal'; // Importez votre FullScreenDialog
// import { useNavigate } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';



// const ProfileCard = () => {
//     const [userData, setUserData] = useState(null);
//     const [error, setError] = useState('');
//     const [dialogOpen, setDialogOpen] = useState(false);
//     const [selectedFolderId, setSelectedFolderId] = useState(null);

//     const navigate = useNavigate();  // Initialisation de useNavigate

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userId');

//         if (token && userId) {
//             fetchProfileData(userId, token);
//         } else {
//             setError("Utilisateur non trouvé. Veuillez vous reconnecter.");
//         }
//     }, []);

//     const fetchProfileData = async (userId, token) => {
//         try {
//             const profileData = await getProfile(userId, token);
//             console.log('Données du profil:', profileData);
//             setUserData(profileData);  // Mettre à jour les états avec les données du profil
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     // Fonction pour ouvrir le dialogue
//     const userId = localStorage.getItem('userId');
//     const handleOpenDialog = (userId) => {

//         setSelectedFolderId(userId);
//         setDialogOpen(true);
//     };

//     // Fonction pour fermer le dialogue
//     const handleCloseDialog = () => {
//         setDialogOpen(false);
//     };

//     const handleSubscribeClick = () => {
//         if (userData) {
//             const userId = userData.data._id;  // Récupérer l'ID de l'utilisateur
//             navigate('/profile/profile_page', { state: { userId } });  // Passer l'ID à la UserPage
//         }
//     };

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!userData) {
//         return <div>Chargement...</div>;
//     }

//     const { name, email, image } = userData.data; // Extraire les informations de l'utilisateur
//     console.log("Coucou____" + image);
//     // console.log("Coucou"+userData.data);

//     return (
//         <div className="container__profile">
//             <div className="profile__card"  data-aos="flip-right">
//                 <div className="image__profile">
//                     {/* Afficher l'image récupérée de l'API */}
//                     <img
//                         src={getImageUrl(image)}
//                         alt="Profile Image"
//                         className="profile__img"
//                     />
//                 </div>

//                 <div className="text__data">
//                     {/* Afficher le nom et l'email récupérés */}
//                     <span className="name">{name}</span>
//                     <span className="job">{email}</span>
//                 </div>

//                 <div className="media__buttons">
//                     <a href="#" className="link facebook">
//                         {/* <i className="bx bxl-facebook"></i> */}
//                     </a>
//                     <a href="#" className="link twitter">
//                         {/* <i className="bx bxl-twitter"></i> */}
//                     </a>
//                     <a href="#" className="link instagram">
//                         {/* <i className="bx bxl-instagram"></i> */}
//                     </a>
//                     <a href="#" className="link youtube">
//                         {/* <i className="bx bxl-youtube"></i> */}
//                     </a>
//                 </div>

//                 <div className="buttons">
//                     <button className="button__btn" onClick={handleSubscribeClick}>
//                         Modification profile
//                     </button>
//                     <button className="button__btn" onClick={() => handleOpenDialog(userId)}>
//                         Change mot de passe
//                     </button>
//                 </div>

//                 <div className="analytics">
//                     <div className="data">
//                         <i className="bx bx-heart"></i>
//                         <span className="number"></span>
//                     </div>
//                     <div className="data">
//                         <i className="bx bx-message-rounded"></i>
//                         <span className="number"></span>
//                     </div>
//                     <div className="data">
//                         <i className="bx bx-share"></i>
//                         <span className="number"></span>
//                     </div>
//                 </div>
//             </div>
//             {/* Appel du composant FullScreenDialog */}
//             <FullScreenDialog open={dialogOpen} handleClose={handleCloseDialog} userId={selectedFolderId} />
//         </div>
//     );
// }

// const getImageUrl = (image) => {
//     if (image.startsWith('uploads_default')) {
//         return `http://127.0.0.1:9876/uploads/${image}`;
//     } else {
//         return `http://127.0.0.1:9876${image}`;
//     }
// };


// export default ProfileCard;












































































// import React, { useEffect, useState } from 'react';
// import "./profilecard.scss";
// import { getProfile } from '../../services/authServices'; 
// import FullScreenDialog from '../MUI/ProfileModal'; 
// import { useNavigate } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const ProfileCard = () => {
//     const [userData, setUserData] = useState(null);
//     const [error, setError] = useState('');
//     const [dialogOpen, setDialogOpen] = useState(false);
//     const [imageOpen, setImageOpen] = useState(false); // État pour le modal d'image
//     const [selectedFolderId, setSelectedFolderId] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(''); // État pour l'image sélectionnée

//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userId');

//         if (token && userId) {
//             fetchProfileData(userId, token);
//         } else {
//             setError("Utilisateur non trouvé. Veuillez vous reconnecter.");
//         }
//     }, []);

//     const fetchProfileData = async (userId, token) => {
//         try {
//             const profileData = await getProfile(userId, token);
//             console.log('Données du profil:', profileData);
//             setUserData(profileData);  
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     const handleOpenDialog = (userId) => {
//         setSelectedFolderId(userId);
//         setDialogOpen(true);
//     };

//     const handleCloseDialog = () => {
//         setDialogOpen(false);
//     };

//     const handleImageClick = (image) => {
//         setSelectedImage(image);
//         setImageOpen(true); // Ouvre le modal d'image
//     };

//     const handleCloseImage = () => {
//         setImageOpen(false);
//         setSelectedImage(''); // Réinitialise l'image sélectionnée
//     };

//     const handleSubscribeClick = () => {
//         if (userData) {
//             const userId = userData.data._id; 
//             navigate('/profile/profile_page', { state: { userId } });
//         }
//     };

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!userData) {
//         return <div>Chargement...</div>;
//     }

//     const { name, email, image } = userData.data;

//     return (
//         <div className="container__profile">
//             <div className="profile__card" data-aos="flip-right">
//                 <div className="image__profile">
//                     <img
//                         src={getImageUrl(image)}
//                         alt="Profile Image"
//                         className="profile__img"
//                         onClick={() => handleImageClick(getImageUrl(image))}  // Ouvre l'image agrandie au clic
//                         style={{ cursor: 'pointer' }}  // Ajout du curseur cliquable
//                     />
//                 </div>

//                 <div className="text__data">
//                     <span className="name">{name}</span>
//                     <span className="job">{email}</span>
//                 </div>

//                 <div className="media__buttons">
//                     <a href="#" className="link facebook"></a>
//                     <a href="#" className="link twitter"></a>
//                     <a href="#" className="link instagram"></a>
//                     <a href="#" className="link youtube"></a>
//                 </div>

//                 <div className="buttons">
//                     <button className="button__btn" onClick={handleSubscribeClick}>
//                         Modification profile
//                     </button>
//                     <button className="button__btn" onClick={() => handleOpenDialog(userId)}>
//                         Change mot de passe
//                     </button>
//                 </div>

//                 <div className="analytics">
//                     <div className="data">
//                         <i className="bx bx-heart"></i>
//                         <span className="number"></span>
//                     </div>
//                     <div className="data">
//                         <i className="bx bx-message-rounded"></i>
//                         <span className="number"></span>
//                     </div>
//                     <div className="data">
//                         <i className="bx bx-share"></i>
//                         <span className="number"></span>
//                     </div>
//                 </div>
//             </div>
            
//             {/* Appel du composant FullScreenDialog */}
//             <FullScreenDialog open={dialogOpen} handleClose={handleCloseDialog} userId={selectedFolderId} />
            
//             {/* Modal pour afficher l'image agrandie */}
//             {imageOpen && (
//                 <div className="image-modal" onClick={handleCloseImage}>
//                     <img src={selectedImage} alt="Agrandir" className="modal-image" />
//                 </div>
//             )}
//         </div>
//     );
// };

// const getImageUrl = (image) => {
//     if (image.startsWith('uploads_default')) {
//         return `http://127.0.0.1:9876/uploads/${image}`;
//     } else {
//         return `http://127.0.0.1:9876${image}`;
//     }
// };

// export default ProfileCard;
















































// import React, { useEffect, useState } from 'react';
// import "./profilecard.scss";
// import { getProfile } from '../../services/authServices'; 
// import FullScreenDialog from '../MUI/ProfileModal'; 
// import { useNavigate } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const ProfileCard = () => {
//     const [userData, setUserData] = useState(null);
//     const [error, setError] = useState('');
//     const [dialogOpen, setDialogOpen] = useState(false);
//     const [imageOpen, setImageOpen] = useState(false); // État pour le modal d'image
//     const [selectedFolderId, setSelectedFolderId] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(''); // État pour l'image sélectionnée

//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userId');

//         if (token && userId) {
//             fetchProfileData(userId, token);
//         } else {
//             setError("Utilisateur non trouvé. Veuillez vous reconnecter.");
//         }
        
//         // Initialisation de AOS
//         AOS.init();
//     }, []);

//     const fetchProfileData = async (userId, token) => {
//         try {
//             const profileData = await getProfile(userId, token);
//             console.log('Données du profil:', profileData);
//             setUserData(profileData);  
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     const handleOpenDialog = (userId) => {
//         setSelectedFolderId(userId);
//         setDialogOpen(true);
//     };

//     const handleCloseDialog = () => {
//         setDialogOpen(false);
//     };

//     const handleImageClick = (image) => {
//         setSelectedImage(image);
//         setImageOpen(true); // Ouvre le modal d'image
//     };

//     const handleCloseImage = () => {
//         setImageOpen(false);
//         setSelectedImage(''); // Réinitialise l'image sélectionnée
//     };

//     const handleSubscribeClick = () => {
//         if (userData) {
//             const userId = userData.data._id; 
//             navigate('/profile/profile_page', { state: { userId } });
//         }
//     };

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!userData) {
//         return <div>Chargement...</div>;
//     }

//     const { name, email, image } = userData.data;

//     return (
//         <div className="container__profile">
//             <div className="profile__card" data-aos="flip-right">
//                 <div className="image__profile">
//                     <img
//                         src={getImageUrl(image)}
//                         alt="Profile Image"
//                         className="profile__img"
//                         onClick={() => handleImageClick(getImageUrl(image))}  // Ouvre l'image agrandie au clic
//                         style={{ cursor: 'pointer' }}  // Ajout du curseur cliquable
//                     />
//                 </div>

//                 <div className="text__data">
//                     <span className="name">{name}</span>
//                     <span className="job">{email}</span>
//                 </div>

//                 <div className="media__buttons">
//                     <a href="#" className="link facebook"></a>
//                     <a href="#" className="link twitter"></a>
//                     <a href="#" className="link instagram"></a>
//                     <a href="#" className="link youtube"></a>
//                 </div>

//                 <div className="buttons">
//                     <button className="button__btn" onClick={handleSubscribeClick}>
//                         Modification profile
//                     </button>
//                     <button className="button__btn" onClick={() => handleOpenDialog(userId)}>
//                         Change mot de passe
//                     </button>
//                 </div>

//                 <div className="analytics">
//                     <div className="data">
//                         <i className="bx bx-heart"></i>
//                         <span className="number"></span>
//                     </div>
//                     <div className="data">
//                         <i className="bx bx-message-rounded"></i>
//                         <span className="number"></span>
//                     </div>
//                     <div className="data">
//                         <i className="bx bx-share"></i>
//                         <span className="number"></span>
//                     </div>
//                 </div>
//             </div>
            
//             {/* Appel du composant FullScreenDialog */}
//             <FullScreenDialog open={dialogOpen} handleClose={handleCloseDialog} userId={selectedFolderId} />
            
//             {/* Modal pour afficher l'image agrandie avec animation AOS */}
//             {imageOpen && (
//                 <div className="image-modal" onClick={handleCloseImage} data-aos="flip-up" data-aos-duration="300">
//                     <img src={selectedImage} alt="Agrandir" className="modal-image" />
//                 </div>
//             )}
//         </div>
//     );
// };

// const getImageUrl = (image) => {
//     if (image.startsWith('uploads_default')) {
//         return `http://127.0.0.1:9876/uploads/${image}`;
//     } else {
//         return `http://127.0.0.1:9876${image}`;
//     }
// };

// export default ProfileCard;






























// import React, { useEffect, useState } from 'react';
// import "./profilecard.scss";
// import { getProfile } from '../../services/authServices'; 
// import FullScreenDialog from '../MUI/ProfileModal'; 
// import { useNavigate } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const ProfileCard = () => {
//     const [userData, setUserData] = useState(null);
//     const [error, setError] = useState('');
//     const [dialogOpen, setDialogOpen] = useState(false);
//     const [imageOpen, setImageOpen] = useState(false);
//     const [closing, setClosing] = useState(false); // État pour gérer la fermeture du modal
//     const [selectedFolderId, setSelectedFolderId] = useState(null);
//     const [selectedImage, setSelectedImage] = useState('');

//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userId');

//         if (token && userId) {
//             fetchProfileData(userId, token);
//         } else {
//             setError("Utilisateur non trouvé. Veuillez vous reconnecter.");
//         }
        
//         // Initialisation de AOS
//         AOS.init();
//     }, []);

//     const fetchProfileData = async (userId, token) => {
//         try {
//             const profileData = await getProfile(userId, token);
//             console.log('Données du profil:', profileData);
//             setUserData(profileData);  
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     const handleOpenDialog = (userId) => {
//         setSelectedFolderId(userId);
//         setDialogOpen(true);
//     };

//     const handleCloseDialog = () => {
//         setDialogOpen(false);
//     };

//     const handleImageClick = (image) => {
//         setSelectedImage(image);
//         setImageOpen(true); // Ouvre le modal d'image
//     };

//     const handleCloseImage = () => {
//         setClosing(true); // Déclenche l'animation de fermeture
//         setTimeout(() => {
//             setImageOpen(false); // Après le délai, ferme le modal
//             setClosing(false); // Réinitialise l'état de fermeture
//             setSelectedImage(''); // Réinitialise l'image sélectionnée
//         }, 300); // Correspond à la durée de l'animation
//     };

//     const handleSubscribeClick = () => {
//         if (userData) {
//             const userId = userData.data._id; 
//             navigate('/profile/profile_page', { state: { userId } });
//         }
//     };

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (!userData) {
//         return <div>Chargement...</div>;
//     }

//     const { name, email, image } = userData.data;

//     return (
//         <div className="container__profile">
//             <div className="profile__card" data-aos="flip-right">
//                 <div className="image__profile">
//                     <img
//                         src={getImageUrl(image)}
//                         alt="Profile Image"
//                         className="profile__img"
//                         onClick={() => handleImageClick(getImageUrl(image))}
//                         style={{ cursor: 'pointer' }}
//                     />
//                 </div>

//                 <div className="text__data">
//                     <span className="name">{name}</span>
//                     <span className="job">{email}</span>
//                 </div>

//                 <div className="media__buttons">
//                     <a href="#" className="link facebook"></a>
//                     <a href="#" className="link twitter"></a>
//                     <a href="#" className="link instagram"></a>
//                     <a href="#" className="link youtube"></a>
//                 </div>

//                 <div className="buttons">
//                     <button className="button__btn" onClick={handleSubscribeClick}>
//                         Modification profile
//                     </button>
//                     <button className="button__btn" onClick={() => handleOpenDialog(userId)}>
//                         Change mot de passe
//                     </button>
//                 </div>

//                 <div className="analytics">
//                     <div className="data">
//                         <i className="bx bx-heart"></i>
//                         <span className="number"></span>
//                     </div>
//                     <div className="data">
//                         <i className="bx bx-message-rounded"></i>
//                         <span className="number"></span>
//                     </div>
//                     <div className="data">
//                         <i className="bx bx-share"></i>
//                         <span className="number"></span>
//                     </div>
//                 </div>
//             </div>
            
//             <FullScreenDialog open={dialogOpen} handleClose={handleCloseDialog} userId={selectedFolderId} />
            
//             {/* Modal pour afficher l'image agrandie avec animation AOS */}
//             {imageOpen && (
//                 <div 
//                     className={`image-modal ${closing ? 'closing' : ''}`} 
//                     onClick={handleCloseImage} 
//                     data-aos="flip-up" 
//                     data-aos-duration="400"
//                 >
//                     <img src={selectedImage} alt="Agrandir" className="modal-image" />
//                 </div>
//             )}
//         </div>
//     );
// };

// const getImageUrl = (image) => {
//     if (image.startsWith('uploads_default')) {
//         return `http://127.0.0.1:9876/uploads/${image}`;
//     } else {
//         return `http://127.0.0.1:9876${image}`;
//     }
// };

// export default ProfileCard;








































import React, { useEffect, useState } from 'react';
import "./profilecard.scss";
import { getProfile } from '../../services/authServices'; 
import FullScreenDialog from '../MUI/ProfileModal'; 
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProfileCard = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [imageOpen, setImageOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [selectedFolderId, setSelectedFolderId] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        if (token && userId) {
            fetchProfileData(userId, token);
        } else {
            setError("Utilisateur non trouvé. Veuillez vous reconnecter.");
        }
        
        AOS.init();
    }, []);

    const fetchProfileData = async (userId, token) => {
        try {
            const profileData = await getProfile(userId, token);
            console.log('Données du profil:', profileData);
            setUserData(profileData);  
        } catch (error) {
            setError(error.message);
        }
    };

    const handleOpenDialog = (userId) => {
        setSelectedFolderId(userId);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setImageOpen(true);
    };

    const handleCloseImage = () => {
        setClosing(true);
        setTimeout(() => {
            setImageOpen(false);
            setClosing(false);
            setSelectedImage('');
        }, 300);
    };

    const handleSubscribeClick = () => {
        if (userData) {
            const userId = userData.data._id; 
            navigate('/profile/profile_page', { state: { userId } });
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    if (!userData) {
        return <div>Chargement...</div>;
    }

    const { name, email, image } = userData.data;

    return (
        <div className="container__profile">
            <div className="profile__card" data-aos="flip-right">
                <div className="image__profile">
                    <img
                        src={getImageUrl(image)}
                        alt="Profile Image"
                        className="profile__img"
                        onClick={() => handleImageClick(getImageUrl(image))}
                        style={{ cursor: 'pointer' }}
                    />
                </div>

                <div className="text__data">
                    <span className="name">{name}</span>
                    <span className="job">{email}</span>
                </div>

                <div className="media__buttons">
                    <a href="#" className="link facebook"></a>
                    <a href="#" className="link twitter"></a>
                    <a href="#" className="link instagram"></a>
                    <a href="#" className="link youtube"></a>
                </div>

                <div className="buttons">
                    <button className="button__btn" onClick={handleSubscribeClick}>
                    Modification du profil
                    </button>
                    <button className="button__btn" onClick={() => handleOpenDialog(userData.data._id)}>
                    Modifier mot de passe
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
            
            <FullScreenDialog open={dialogOpen} handleClose={handleCloseDialog} userId={selectedFolderId} />
            
            {imageOpen && (
                <div 
                    className={`image-modal ${closing ? 'closing' : ''}`} 
                    onClick={handleCloseImage} 
                    data-aos="flip-up" 
                    data-aos-duration="400"
                >
                    <img src={selectedImage} alt="Agrandir" className="modal-image" />
                </div>
            )}
        </div>
    );
};

const getImageUrl = (image) => {
    if (image.startsWith('uploads_default')) {
        return `http://127.0.0.1:9876/uploads/${image}`;
    } else {
        return `http://127.0.0.1:9876${image}`;
    }
};

export default ProfileCard;
