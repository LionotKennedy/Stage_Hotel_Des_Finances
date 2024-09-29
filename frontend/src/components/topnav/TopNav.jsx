import React, { useEffect, useState } from 'react';

import "./topnav.scss"

import { Link, useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';

import Dropdown from '../dropdown/Dropdown'

import user_image from '../../assets/images/photo.jpg'

import notifications from '../../Data/notification.json'

import user_menu from '../../Data/user_menus.json'

import Theme from '../theme/Theme'

// import { logout } from '../../services/authServices'; // Assurez-vous d'importer correctement la fonction logout

// import { getProfile } from '../../services/authServices'; // Importez le service

import { logout, getProfile } from '../../services/authServices';

// CONFIGURATION
const curr_user = {
  display_name: 'Lionot',
  image: user_image
}

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
)


const TopNav = ({ onLogout }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      setUserData(profileData.data); // Mettre à jour les états avec les données du profil
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const result = await logout(token);
      if (result.success) {
        onLogout();
        navigate('/', { replace: true });
      } else {
        console.error('Erreur de déconnexion:', result.message);
      }
    }
  };

  const renderUserToggle = (user) => (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img src={user.image} alt="User" />
      </div>
      <div className="topnav__right-user__name">
        {user.display_name}
      </div>
    </div>
  );

  // Ajouter une vérification pour éviter les erreurs si userData n'est pas encore disponible
  const userToggleContent = userData
    ? { display_name: userData.name, image: `http://127.0.0.1:9876${userData.image}` }
    : { display_name: 'Chargement...', image: user_image }; // Image par défaut ou message de chargement

  const renderUserMenu = (item, index) => {
    if (item.content === "Logout") {
      return (
        <div className="notification-item" key={index} onClick={handleLogout}>
          <i className={item.icon}></i>
          <span>{item.content}</span>
        </div>
      );
    }

    return (
      <Link to={item.route || '#'} key={index}>
        <div className="notification-item">
          <i className={item.icon}></i>
          <span>{item.content}</span>
        </div>
      </Link>
    );
  };

  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
    document.querySelector('.sidebar').classList.toggle('actif');
    document.querySelector('.topnav').classList.toggle('actif');
    document.querySelector('.layout__content').classList.toggle('actif');
  };

  return (
    <div className='topnav'>
      <div className="topnav__search">
        <input type="text" placeholder='Search here...' />
        <i className='bx bx-search'></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(userToggleContent)} // Utilisation de userToggleContent
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon='bx bx-bell'
            badge='13'
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to='/'>View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          <Theme />
        </div>
        <div className="topnav__right-item mobile-hamburger" onClick={toggleSidebar}>
          <i className={sidebarActive ? 'bx bx-x' : 'bx bx-menu'}></i>
        </div>
      </div>
    </div>
  );
}

export default TopNav;

