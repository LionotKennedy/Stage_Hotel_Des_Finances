import "./App.scss"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/accueil" /> : <Login onLogin={() => setIsAuthenticated(true)} />}
        />

         {/* Protected Routes inside Layout */}
         {isAuthenticated && (
          <Route element={<Layout />}>
            <Route path="/accueil" element={<Home />} />
            <Route path="/courrier" element={<Dossier />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/utilisateur" element={<User />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/archive/details" element={<ArchiveMore />} />
          </Route>
        )}

         {/* Redirect to Login if no match */}
         <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
