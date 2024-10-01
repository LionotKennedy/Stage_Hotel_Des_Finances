// import "./App.scss"
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { useEffect,useState } from 'react';
// import Login from './pages/login/Login';
// import Layout from './layout/Layout';
// import Dossier from './pages/dossier/Dossier';
// import Home from './pages/home/Home';
// import Visa from './pages/visa/Visa';
// import Archive from './pages/archive/Archive';
// import Journal from './pages/journal/Journal';
// import User from './pages/user/User';
// import Profile from './pages/profile/Profile';
// import ArchiveMore from "./pages/archivemore/ArchiveMore";
// import ProtectedRoute from './ProtectedRoute'; // Assurez-vous que le chemin est correct
// import { getProfile } from './services/authServices'; // Importez le service
// import UserPage from "./pages/userpage/UserPage";
// import ShowUser from "./pages/showuser/ShowUser";


// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//     setIsAuthenticated(false);
//   };

//   // Ajoutez cette nouvelle fonction pour gérer l'expiration du token
//   const handleTokenExpiration = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//     setIsAuthenticated(false);
//   };

//   // useEffect(() => {
//   //   const intervalId = setInterval(() => {
//   //     // Vérifiez si le token est toujours valide
//   //     const storedToken = localStorage.getItem('token');
//   //     if (storedToken) {
//   //       try {
//   //         const profileData = getProfile(null, storedToken); // Utilisez null pour userId car nous n'avons pas besoin de vérifier les données
          
//   //         // Si la requête réussit, le token est toujours valide
//   //         return;
//   //       } catch (error) {
//   //         if (error.message === 'Token a expiré') {
//   //           handleTokenExpiration();
//   //         }
//   //       }
//   //     }
//   //   }, 60000); // Vérifiez toutes les minutes

//   //   return () => clearInterval(intervalId);
//   // }, []);


//   // useEffect(() => {
//   //   const intervalId = setInterval(() => {
//   //     const storedToken = localStorage.getItem('token');
//   //     if (storedToken) {
//   //       try {
//   //         const userId = localStorage.getItem('userId');
//   //         const profileData = await getProfile(userId, storedToken);
          
//   //         // Si la requête réussit, le token est toujours valide
//   //         return;
//   //       } catch (error) {
//   //         if (error.message === 'Token a expiré') {
//   //           handleTokenExpiration();
//   //         }
//   //       }
//   //     }
//   //   }, 60000); // Vérifiez toutes les minutes
  
//   //   return () => clearInterval(intervalId);
//   // }, [])





// //   useEffect(() => {
// //     const intervalId = setInterval(async () => {
// //       const storedToken = localStorage.getItem('token');
// //       console.log("message simba APP 0");
// //       if (storedToken) {
// //         try {
// //           const userId = localStorage.getItem('userId');
// //           await getProfile(userId, storedToken);
// //           console.log("message simba APP 1");
// //           handleTokenExpiration();
          
// //           // Si la requête réussit, le token est toujours valide
// //           return;
// //         } catch (error) {
// //           if (error.message === 'Token a expiré') {
// //             handleTokenExpiration();
// //             console.log(error.message);
// //             console.log("message simba APP 2");
// //           }
// //         }
// //       }
// //     // }, 60000); // Vérifiez toutes les minutes
// //   // }, 1800000); // Vérifiez toutes les 3 heures
// // }, 60000); // Vérifier toutes les 1 minute (60000 millisecondes)
// //   return () => clearInterval(intervalId);
// // }, []);
  
// useEffect(() => {
//   const intervalId = setInterval(async () => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       try {
//         const userId = localStorage.getItem('userId');
//         const profileData = await getProfile(userId, storedToken);

//         // Si tout se passe bien, le token est valide
//         console.log("Token valide");
//       } catch (error) {
//         // Vérifiez si l'erreur est liée à l'expiration du token
//         if (error.message.includes('Token a expiré')) {
//           console.log("Token a expiré");
//           handleTokenExpiration();
//         } else {
//           console.error("Erreur lors de la récupération du profil coucou:", error);
//           handleLogout()
//         }
//       }
//     }
//   }, 60000); // Vérifier toutes les 1 minute (60000 millisecondes)

//   return () => clearInterval(intervalId);
// }, []);


//   return (
//     <Router>
//     <Routes>
//       <Route
//         path="/"
//         element={isAuthenticated ? <Navigate to="/accueil" /> : <Login onLogin={() => setIsAuthenticated(true)} />}
//       />
//       {isAuthenticated && (
//         <Route element={<Layout onLogout={handleLogout} />}> {/* Passez la fonction onLogout */}
//           <Route path="/accueil" element={<Home />} />
//           <Route path="/courrier" element={<Dossier />} />
//           <Route path="/visa" element={<Visa />} />
//           <Route path="/archive" element={<Archive />} />
//           <Route path="/journal" element={<Journal />} />
//           <Route path="/utilisateur" element={<User />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/archive/details" element={<ArchiveMore />} />
//           <Route path="/profile/profile_page" element={<UserPage />} />
//           <Route path="/utilisateur/show_user" element={<ShowUser />} />
//         </Route>
//       )}
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   </Router>
//   )
// }

// export default App














































import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './pages/login/Login';
import Layout from './layout/Layout';
import Dossier from './pages/dossier/Dossier';
import Home from './pages/home/Home';
import Visa from './pages/visa/Visa';
import Archive from './pages/archive/Archive';
import Journal from './pages/journal/Journal';
import User from './pages/user/User';
import Profile from './pages/profile/Profile';
import ArchiveMore from "./pages/archivemore/ArchiveMore";
import ProtectedRoute from './ProtectedRoute'; 
import { getProfile } from './services/authServices'; 
import UserPage from "./pages/userpage/UserPage";
import ShowUser from "./pages/showuser/ShowUser";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
  };

  // Fonction pour gérer l'expiration du token
  const handleTokenExpiration = () => {
    handleLogout(); // Appeler handleLogout pour supprimer les données et déconnecter l'utilisateur
    alert('Votre session a expiré, veuillez vous reconnecter.'); // Optionnel: afficher un message d'alerte
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const userId = localStorage.getItem('userId');
          await getProfile(userId, storedToken); // Essayez de récupérer le profil
          console.log("Token valide");
        } catch (error) {
          // Vérifiez si l'erreur est liée à l'expiration du token
          if (error.message.includes('Token a expiré')) {
            console.log("Token a expiré");
            handleTokenExpiration(); // Gérer l'expiration du token
          } else {
            console.error("Erreur lors de la récupération du profil:", error);
            handleLogout(); // Déconnexion en cas d'autres erreurs
          }
        }
      }
    }, 60000); // Vérifier toutes les 1 minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/accueil" /> : <Login onLogin={() => setIsAuthenticated(true)} />}
        />
        {isAuthenticated && (
          <Route element={<Layout onLogout={handleLogout} />}>
            <Route path="/accueil" element={<Home />} />
            <Route path="/courrier" element={<Dossier />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/utilisateur" element={<User />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/archive/details" element={<ArchiveMore />} />
            <Route path="/profile/profile_page" element={<UserPage />} />
            <Route path="/utilisateur/show_user" element={<ShowUser />} />
          </Route>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
