import { useMutation, useQuery } from 'react-query';
const API_URL = "http://127.0.0.1:9876/api";
export const useGetFolders = () => {
    return useQuery('folders', async () => {
      const token = localStorage.getItem('token');
      console.log('Token:', token); // Debugging token
  
      const response = await fetch(`${API_URL}/get_folder`, {
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
  

export const useAddFolder = () => {
  return useMutation(['addFolder'], (data) =>
    fetch(`${API_URL}/add_folder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
  );
};


export const useGetFolderById = (folderId) => {
  return useQuery(['folder', folderId], async () => { // Utilisez une clé de requête unique pour chaque ID
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Debugging token

    const response = await fetch(`${API_URL}/edit_folder/${folderId}`, { // Ajoutez l'ID au chemin de l'URL
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // Vérifiez si la réponse est OK
    if (!response.ok) {
      console.error('Erreur lors de la récupération du dossier:', response.status, response.statusText);
      throw new Error('Erreur lors de la récupération du dossier');
    }

    return response.json();
  });
};