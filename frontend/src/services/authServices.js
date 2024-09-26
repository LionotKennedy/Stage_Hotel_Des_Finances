
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


// Fonction pour récupérer le profil utilisateur
export const getProfile = async (userId, token) => {
  try {
    const response = await fetch(`${API_URL}/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error('Failed to fetch user profile: ' + error.message);
  }
};



