import { useMutation, useQuery } from 'react-query';
const API_URL = "http://127.0.0.1:9876/api";
export const useGetGroupArchive = () => {
    return useQuery('groups', async () => {
      const token = localStorage.getItem('token');
      console.log('Token:', token); // Debugging token
  
      const response = await fetch(`${API_URL}/archive/grouped`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Vérifiez si la réponse est OK
      if (!response.ok) {
        console.error('Erreur lors de la récupération des dossiers:', response.status, response.statusText);
        throw new Error('Erreur lors de la récupération des dossiers');
      }
  
      return response.json();
    });
  };

  
// export const useGetArchiveByYear = () => {
//     return useQuery('byYear', async () => {
//       const token = localStorage.getItem('token');
//       console.log('Token:', token); // Debugging token
  
//       const response = await fetch(`${API_URL}/archive/year/`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
  
//       // Vérifiez si la réponse est OK
//       if (!response.ok) {
//         console.error('Erreur lors de la récupération des dossiers:', response.status, response.statusText);
//         throw new Error('Erreur lors de la récupération des dossiers');
//       }
  
//       return response.json();
//     });
//   };
  













export const useGetArchiveByYear = (year) => {
  return useQuery(['byYear', year], async () => {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Debugging token

    const response = await fetch(`${API_URL}/archive/year/${year}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // Vérifiez si la réponse est OK
    if (!response.ok) {
      console.error('Erreur lors de la récupération des dossiers:', response.status, response.statusText);
      throw new Error('Erreur lors de la récupération des dossiers');
    }

    return response.json();
  });
};