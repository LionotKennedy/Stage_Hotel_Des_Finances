
import { useMutation } from 'react-query';

const API_URL = 'http://127.0.0.1:9876/api'; // Assurez-vous que cette URL correspond à votre backend

export const useLogin = () => {
  return useMutation(({ email, password }) =>
    fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(res => res.json()),
  );
};


export const useRegisterUser = () => {
  return useMutation(({ name, email, password }) =>
    fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then(res => res.json()),
  );
};

export const useGetUserProfile = (token) => {
  return useMutation(['profile', token], () =>
    fetch(`${API_URL}/profile/${token}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json()),
  );
};


export const usePasswordReset = () => {
  return useMutation(({ email }) =>
    fetch(`${API_URL}/password_reset_request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }).then(res => res.json()),
  );
};



export const useNewPasswordVerification = () => {
  return useMutation(({ token, newPassword }) =>
    fetch(`${API_URL}/password_reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, newPassword }),
    }).then(res => res.json()),
  );
};


// export const getProfile = async (userId, token) => {
//   try {
//     const response = await fetch(`${API_URL}/profile/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });
//     const data = await response.json();
    
//     // Vérifiez si le token est toujours valide
//     const now = Date.now() / 1000;
//     if (data.expireAt && data.expireAt < now) {
//       throw new Error('Token a expiré');
//       let time = 0
//     }

//     // Si le token est valide, retournez les données
//     return data;
//   } catch (error) {
//     console.error('Erreur lors de la récupération du profil utilisateur:', error);
    
//     // Si le token est expiré, supprimez-le et l'ID utilisateur du localStorage
//     // if (error.message === 'Token a expiré') {
//     if (time == 0) {
//       localStorage.removeItem('token');
//       localStorage.removeItem('userId');
//     }
    
//     throw new Error('Échec de la récupération du profil utilisateur:' + error.message);
//   }
// };











export const getProfile = async (userId, token) => {
  try {
    const response = await fetch(`${API_URL}/profile/${userId || ''}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    
    // Vérifiez si le token est toujours valide
    const now = Date.now() / 1000;
    if (data.expireAt && data.expireAt < now) {
      throw new Error('Token a expiré');
      console.log( error.message);
    }

    // Si le token est valide, retournez les données
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération du profil utilisateur:', error);
    
    // Si le token est expiré, supprimez-le et l'ID utilisateur du localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    
    throw new Error('Échec de la récupération du profil utilisateur foryyyy:' + error.message);
  }
};
