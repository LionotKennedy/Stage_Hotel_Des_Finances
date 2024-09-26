import React, { useEffect, useState } from 'react';
import "./profilecard.scss"
import user_image from '../../assets/images/photo.jpg';  
import { getProfile } from '../../services/authServices'; // Importez le service

const ProfileCard = () => {

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');


    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        console.log('token: ' + token);
        console.log('userID: ' + userId);

        if(token && userId) {
            fetchProfileData(userId, token);
        } else {
            setError("Utilisateur non trouvé. Veuillez vous reconnecter.")
        }
    }, []);

    const fetchProfileData = async (userId, token) => {
        try {
            const profileData = await getProfile(userId, token);
        } catch (error) {
            setError(error.message);
        }
    }

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
