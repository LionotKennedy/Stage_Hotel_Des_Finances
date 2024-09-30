import { useMutation, useQuery } from 'react-query';

const API_URL = "http://127.0.0.1:9876/api";

export const useGetJournals = () => {
    return useQuery('journal', async () => {
      const token = localStorage.getItem('token');
      console.log('Token:', token); // Debugging token
  
      const response = await fetch(`${API_URL}/get_journal`, {
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
  

  export const useGetJournalById = (folderId) => {
    return useQuery(['journal', folderId], async () => { // Utilisez une clé de requête unique pour chaque ID
      const token = localStorage.getItem('token');
      console.log('Token:', token); // Debugging token
      
      const response = await fetch(`${API_URL}/edit_journal/${folderId}`, { // Ajoutez l'ID au chemin de l'URL
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
  

  export const useDeleteJournal = () => {
    return useMutation(['deleteJournal'], ({ folderId }) => // Correction du paramètre ici
      fetch(`${API_URL}/delete_journal/${folderId}`, { // Corrigez l'URL ici
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => res.json())
    );
  };