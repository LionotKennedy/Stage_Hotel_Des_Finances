// import { useQuery } from 'react-query';

// const API_URL = 'http://127.0.0.1:9876/api'; // Assurez-vous que cette URL correspond à votre backend

// export const useLogin = (email, password) => {
//   return useQuery(['login', email, password], () =>
//     fetch(`${API_URL}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     }).then(res => res.json()),
//   );
// };

// export const useRegisterUser = (name, email, password) => {
//   return useQuery(['register', name, email, password], () =>
//     fetch(`${API_URL}/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, password }),
//     }).then(res => res.json()),
//   );
// };

// export const useGetUserProfile = (token) => {
//   return useQuery(['profile', token], () =>
//     fetch(`${API_URL}/profile/${token}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then(res => res.json()),
//   );
// };
















// import { useMutation } from 'react-query';

// const API_URL = 'http://127.0.0.1:9876/api'; // Assurez-vous que cette URL correspond à votre backend

// export const useLogin = () => {
//   return useMutation(({ email, password }) =>
//     fetch(`${API_URL}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     }).then(res => res.json()),
//   );
// };


















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























// import { useMutation } from 'react-query';

// const API_URL = 'http://127.0.0.1:9876/api'; // Assurez-vous que cette URL correspond à votre backend

// export const useLogin = () => {
//   return useMutation(({ email, password }) =>
//     fetch(`${API_URL}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     }).then(res => res.json()),
//   ).transformResponse(response => {
//     if (!response.success) {
//       console.error(`Erreur lors de la connexion: ${response.message}`);
//       return { success: false, message: getUserFriendlyErrorMessage(response.message) };
//     }
//     return response;
//   });
// };

// export const useRegisterUser = () => {
//   return useMutation(({ name, email, password }) =>
//     fetch(`${API_URL}/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, password }),
//     }).then(res => res.json()),
//   ).transformResponse(response => {
//     if (!response.success) {
//       console.error(`Erreur lors de l'enregistrement: ${response.message}`);
//       return { success: false, message: getUserFriendlyErrorMessage(response.message) };
//     }
//     return response;
//   });
// };

// export const useGetUserProfile = (token) => {
//   return useMutation(['profile', token], () =>
//     fetch(`${API_URL}/profile/${token}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then(res => res.json()),
//   ).transformResponse(response => {
//     if (!response.success) {
//       console.error(`Erreur lors de récupération du profil: ${response.message}`);
//       return { success: false, message: getUserFriendlyErrorMessage(response.message) };
//     }
//     return response;
//   });
// };

// const getUserFriendlyErrorMessage = (message) => {
//   switch(message) {
//     case 'Email is incorrect':
//       return 'Adresse email invalide';
//     case 'Password is incorrect':
//       return 'Mot de passe incorrect';
//     case 'Your account is not active':
//       return 'Votre compte n\'est pas actif';
//     default:
//       return 'Une erreur s\'est produite. Veuillez réessayer.';
//   }
// };





























// import { useMutation } from 'react-query';

// const API_URL = 'http://127.0.0.1:9876/api'; // Assurez-vous que cette URL correspond à votre backend

// export const useLogin = () => {
//   return useMutation(({ email, password }) =>
//     fetch(`${API_URL}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     }).then(res => res.json()),
//   ).onSuccess(response => {
//     if (!response.success) {
//       console.error(`Erreur lors de la connexion: ${response.message}`);
//       throw new Error(getUserFriendlyErrorMessage(response.message));
//     }
//   });
// };

// export const useRegisterUser = () => {
//   return useMutation(({ name, email, password }) =>
//     fetch(`${API_URL}/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, password }),
//     }).then(res => res.json()),
//   ).onSuccess(response => {
//     if (!response.success) {
//       console.error(`Erreur lors de l'enregistrement: ${response.message}`);
//       throw new Error(getUserFriendlyErrorMessage(response.message));
//     }
//   });
// };

// export const useGetUserProfile = (token) => {
//   return useMutation(['profile', token], () =>
//     fetch(`${API_URL}/profile/${token}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then(res => res.json()),
//   ).onSuccess(response => {
//     if (!response.success) {
//       console.error(`Erreur lors de récupération du profil: ${response.message}`);
//       throw new Error(getUserFriendlyErrorMessage(response.message));
//     }
//   });
// };

// const getUserFriendlyErrorMessage = (message) => {
//   switch(message) {
//     case 'Email is incorrect':
//       return 'Adresse email invalide';
//     case 'Password is incorrect':
//       return 'Mot de passe incorrect';
//     case 'Your account is not active':
//       return 'Votre compte n\'est pas actif';
//     default:
//       return 'Une erreur s\'est produite. Veuillez réessayer.';
//   }
// };






























// import { useMutation } from 'react-query';

// const API_URL = 'http://127.0.0.1:9876/api'; // Assurez-vous que cette URL correspond à votre backend

// export const useLogin = () => {
//   return useMutation(({ email, password }) =>
//     fetch(`${API_URL}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     }).then(res => res.json()),
//   ).onSuccess((response) => {
//     if (!response.success) {
//       console.error(`Erreur lors de la connexion: ${response.message}`);
//       throw new Error(getUserFriendlyErrorMessage(response.message));
//     }
//   });
// };

// export const useRegisterUser = () => {
//   return useMutation(({ name, email, password }) =>
//     fetch(`${API_URL}/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, password }),
//     }).then(res => res.json()),
//   ).onSuccess((response) => {
//     if (!response.success) {
//       console.error(`Erreur lors de l'enregistrement: ${response.message}`);
//       throw new Error(getUserFriendlyErrorMessage(response.message));
//     }
//   });
// };

// export const useGetUserProfile = (token) => {
//   return useMutation(['profile', token], () =>
//     fetch(`${API_URL}/profile/${token}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then(res => res.json()),
//   ).onSuccess((response) => {
//     if (!response.success) {
//       console.error(`Erreur lors de récupération du profil: ${response.message}`);
//       throw new Error(getUserFriendlyErrorMessage(response.message));
//     }
//   });
// };

// const getUserFriendlyErrorMessage = (message) => {
//   switch(message) {
//     case 'Email is incorrect':
//       return 'Adresse email invalide';
//     case 'Password is incorrect':
//       return 'Mot de passe incorrect';
//     case 'Your account is not active':
//       return 'Votre compte n\'est pas actif';
//     default:
//       return 'Une erreur s\'est produite. Veuillez réessayer.';
//   }
// };








































// import { useMutation } from 'react-query';

// const API_URL = 'http://127.0.0.1:9876/api'; // Assurez-vous que cette URL correspond à votre backend

// // Utilisez une mutation pour le login
// export const useLogin = () => {
//   return useMutation(
//     async ({ email, password }) => {
//       const response = await fetch(`${API_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       // Si la réponse n'est pas OK, on lance une erreur
//       if (!response.ok) {
//         throw new Error(data.message || 'Erreur inconnue');
//       }

//       return data;
//     },
//     {
//       // Gestion du succès
//       onSuccess: (data) => {
//         if (!data.success) {
//           console.error(`Erreur lors de la connexion: ${data.message}`);
//         }
//       },
//       // Gestion des erreurs
//       onError: (error) => {
//         console.error(`Erreur: ${error.message}`);
//       },
//     }
//   );
// };

// // Utilisez une mutation pour l'enregistrement d'utilisateur
// export const useRegisterUser = () => {
//   return useMutation(
//     async ({ name, email, password }) => {
//       const response = await fetch(`${API_URL}/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Erreur inconnue');
//       }

//       return data;
//     },
//     {
//       onSuccess: (data) => {
//         if (!data.success) {
//           console.error(`Erreur lors de l'enregistrement: ${data.message}`);
//         }
//       },
//       onError: (error) => {
//         console.error(`Erreur: ${error.message}`);
//       },
//     }
//   );
// };

// // Utilisez une mutation pour récupérer le profil utilisateur
// export const useGetUserProfile = (token) => {
//   return useMutation(
//     async () => {
//       const response = await fetch(`${API_URL}/profile/${token}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Erreur inconnue');
//       }

//       return data;
//     },
//     {
//       onSuccess: (data) => {
//         if (!data.success) {
//           console.error(`Erreur lors de la récupération du profil: ${data.message}`);
//         }
//       },
//       onError: (error) => {
//         console.error(`Erreur: ${error.message}`);
//       },
//     }
//   );
// };

// // Fonction pour traduire les messages d'erreur
// const getUserFriendlyErrorMessage = (message) => {
//   switch(message) {
//     case 'Email is incorrect':
//       return 'Adresse email invalide';
//     case 'Password is incorrect':
//       return 'Mot de passe incorrect';
//     case 'Your account is not active':
//       return 'Votre compte n\'est pas actif';
//     default:
//       return 'Une erreur s\'est produite. Veuillez réessayer.';
//   }
// };




























// import { useMutation } from 'react-query';

// const API_URL = 'http://127.0.0.1:9876/api'; // Assurez-vous que cette URL correspond à votre backend



// // Fonction pour traduire les messages d'erreur
// const getUserFriendlyErrorMessage = (message) => {
//   switch(message) {
//     case 'Email is incorrect':
//       return 'Adresse email invalide';
//     case 'Password is incorrect':
//       return 'Mot de passe incorrect';
//     case 'Your account is not active':
//       return 'Votre compte n\'est pas actif';
//     default:
//       return 'Une erreur s\'est produite. Veuillez réessayer.';
//   }
// };

// // Utilisez une mutation pour le login
// export const useLogin = () => {
//   return useMutation(
//     async ({ email, password }) => {
//       const response = await fetch(`${API_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       // Si la réponse n'est pas OK, on lance une erreur
//       if (!response.ok) {
//         throw new Error(data.message || 'Erreur inconnue');
//       }

//       return data;
//     },
//     {
//       // Gestion des succès
//       onSuccess: (data) => {
//         if (!data.success) {
//           console.error(`Erreur lors de la connexion: ${data.message}`);
//         }
//       },
//       // Gestion des erreurs
//       onError: (error) => {
//         console.error(`Erreur: ${error.message}`);
//       },
//     }
//   );
// };
