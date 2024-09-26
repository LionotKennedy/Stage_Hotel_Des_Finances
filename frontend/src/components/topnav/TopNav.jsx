import React from 'react'

import "./topnav.scss"

import { Link, useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';

import Dropdown from '../dropdown/Dropdown'

import user_image from '../../assets/images/photo.jpg'

import notifications from '../../Data/notification.json'

import user_menu from '../../Data/user_menus.json'

import Theme from '../theme/Theme'

import { logout } from '../../services/authServices'; // Assurez-vous d'importer correctement la fonction logout

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

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">
      {user.display_name}
    </div>
  </div>
)

// const renderUserMenu = (item, index) => (
//   <Link to={item.route || '#'} key={index}>
//     <div className="notification-item">
//       <i className={item.icon}></i>
//       <span>{item.content}</span>
//     </div>
//   </Link>
// );
// ENDING

const TopNav = ({ onLogout }) => {
  
  
  // const history = useHistory();
  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection
  
  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const result = await logout(token);
      if (result.success) {
        // Redirigez vers la page de connexion après la déconnexion
        // history.push('/');
        onLogout(); // Met à jour l'état d'authentification dans App.js
        navigate('/', { replace: true });
      } else {
        console.error('Erreur de déconnexion:', result.message);
      }
    }
  };
  
  
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









  const [sidebarActive, setSidebarActive] = React.useState(false);

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
        {/* <h1>Depart</h1> */}
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
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
          {/* dropdown here */}
        </div>
        <div className="topnav__right-item">
          {/* <ThemeMenu/> */}
          <Theme />
        </div>
        <div className="topnav__right-item mobile-hamburger" onClick={toggleSidebar}>
          {/* <i className="bx bx-menu"></i> */}
          <i className={sidebarActive ? 'bx bx-x' : 'bx bx-menu'}></i>
        </div>
      </div>
    </div>
  )
}

export default TopNav
