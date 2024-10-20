import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/'); // Rediriger vers la page de login si pas de token
    } else {
      const user = JSON.parse(atob(token.split('.')[1])); // Décoder le token JWT pour obtenir le statut
      if (user.status !== 'active') {
        navigate('/'); // Rediriger vers login si utilisateur désactivé
      }
    }
  }, [navigate]);

  return children;
};

export default ProtectedRoute;
