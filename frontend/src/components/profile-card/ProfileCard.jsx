import React, { useEffect, useState } from 'react';
import "./profilecard.scss"
import user_image from '../../assets/images/photo.jpg'
// import { jwt_decode } from 'jwt-decode'; // Importez jwt-decode
// import jwtDecode from 'jwt-decode';
// import * as jwtDecode from 'jwt-decode';
// import jwtDecode from 'jwt-decode';  
import { getProfile } from '../../services/authServices'; // Importez le service

const ProfileCard = () => {

    // const [userData, setUserData] = useState(null);
    // const [error, setError] = useState('');

    // useEffect(() => {
    //     const token = localStorage.getItem('token'); // Assurez-vous que le token est stocké après login

    //     if (token) {
    //         // Décoder le token pour obtenir l'ID de l'utilisateur
    //         const decodedToken = jwt_decode(token);
    //         const userId = decodedToken.userId; // Récupère l'userId depuis la payload du token

    //         const fetchUserData = async () => {
    //             try {
    //                 const profileData = await getProfile(userId, token); // Utilise l'ID utilisateur décodé
    //                 setUserData(profileData.data); // Récupère les données utilisateur
    //             } catch (err) {
    //                 setError(err.message);
    //             }
    //         };

    //         fetchUserData();
    //     }
    // }, []);

    // if (error) {
    //     return <p>{error}</p>;
    // }

    // if (!userData) {
    //     return <p>Loading...</p>; // Affiche un message de chargement pendant la récupération des données
    // }


  

    // useEffect(() => {
    //     // Récupère le token et les données utilisateur depuis localStorage après login
    //     const token = localStorage.getItem('token');
    //     const userInfo = JSON.parse(localStorage.getItem('userData')); // On stocke l'info utilisateur dans le localStorage après le login
    //     console.log(userInfo);

    //     if (token && userInfo) {
    //         setUserData(userInfo); // Charge les informations de l'utilisateur
    //     } else {
    //         setError("Utilisateur non trouvé. Veuillez vous reconnecter.");
    //     }
    // }, []);

    // if (error) {
    //     return <p>{error}</p>;
    // }

    // if (!userData) {
    //     return <p>Chargement des informations utilisateur...</p>;
    // }



    return (
        <div className="container__profile">

            <div className="profile__card">
                <div className="image__profile">
                    <img src={user_image} alt="" className="profile__img" />
                </div>

                <div className="text__data">
                    <span className="name">Lionot RAZAFIMANDIMBY</span>
                    <span className="job">razafimandimbylionotkennedy@gmail.com</span>
                </div>

                <div className="media__buttons">
                    {/* style="background: #4267b2;" */}
                    <a href="#" className="link facebook">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    {/* style="background: #1da1f2;" */}
                    <a href="#" className="link twitter">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    {/* style="background: #e1306c;" */}
                    <a href="#" className="link instagram">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    {/* style="background: #ff0000;" */}
                    <a href="#" className="link youtube">
                        <i className="bx bxl-youtube"></i>
                    </a>
                </div>
                <div className="buttons">
                    <button className="button__btn">Subscribe</button>
                    <button className="button__btn">Message</button>
                </div>


                <div className="analytics">
                    <div className="data">
                        <i className="bx bx-heart"></i>
                        <span className="number">60k</span>
                    </div>
                    <div className="data">
                        <i className="bx bx-message-rounded"></i>
                        <span className="number">20k</span>
                    </div>
                    <div className="data">
                        <i className="bx bx-share"></i>
                        <span className="number">12k</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
