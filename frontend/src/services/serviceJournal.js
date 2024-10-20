import { useMutation, useQuery, useQueryClient } from "react-query";

const API_URL = "http://127.0.0.1:9876/api";

export const useGetJournals = () => {
  return useQuery("journal", async () => {
    const token = localStorage.getItem("token");
    // console.log('Token:', token); // Debugging token

    const response = await fetch(`${API_URL}/get_journal`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Vérifiez si la réponse est OK
    if (!response.ok) {
      console.error(
        "Erreur lors de la récupération des dossiers:",
        response.status,
        response.statusText
      );
      throw new Error("Erreur lors de la récupération des dossiers");
    }

    return response.json();
  });
};

export const useGetJournalById = (id) => {
  return useQuery(["journal", id], async () => {
    // Utilisez une clé de requête unique pour chaque ID
    const token = localStorage.getItem("token");
    // console.log('Token:', token); // Debugging token

    const response = await fetch(`${API_URL}/edit_journal/${id}`, {
      // Ajoutez l'ID au chemin de l'URL
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Vérifiez si la réponse est OK
    if (!response.ok) {
      console.error(
        "Erreur lors de la récupération du dossier:",
        response.status,
        response.statusText
      );
      throw new Error("Erreur lors de la récupération du dossier");
    }

    return response.json();
  });
};

export const useDeleteJournal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }) => {
      const token = localStorage.getItem("token");
      // console.log('Token:', token);

      const response = await fetch(`${API_URL}/delete_journal/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error(
          "Erreur lors de la suppression du dossier:",
          response.status,
          response.statusText
        );
        throw new Error("Erreur lors de la suppression du dossier");
      }

      return response.json();
    },
    onSuccess: () => {
      // Forcez l'actualisation des données après la suppression réussie
      queryClient.invalidateQueries(["journal"]);
    },
  });
};

// export const useDeleteJournal = () => {
//   return useMutation(['deleteJournal'], ({ id }) => // Correction du paramètre ici
//     fetch(`${API_URL}/delete_journal/${id}`, { // Corrigez l'URL ici
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`
//       }
//     })
//     .then(res => res.json())
//   );
// };

// export const useDeleteJournal = () => {
//   const queryClient = useQueryClient();  // Assurez-vous que c'est dans un composant fonctionnel ou un hook
//   return useMutation(['deleteJournal'], ({ id }) =>
//     fetch(`${API_URL}/delete_journal/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     }).then((res) => res.json())
//   );
// };

//   const queryClient = useQueryClient();

// export const useDeleteJournal = () => {
//   return useMutation(
//     ({ id }) =>
//       fetch(`${API_URL}/delete_journal/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`
//         }
//       }).then((res) => res.json()),
//     {
//       onSuccess: () => {
//         // Invalider les journaux pour forcer un refetch après suppression
//         queryClient.invalidateQueries('journal');
//       }
//     }
//   );
// };

// export const useGetJournals = () => {
//   return useQuery('journal', async () => {
//     const token = localStorage.getItem('token');
//     const response = await fetch(`${API_URL}/get_journal`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (!response.ok) {
//       throw new Error('Erreur lors de la récupération des journaux');
//     }
//     return response.json();
//   }, {
//     refetchInterval: 5000, // Re-fetch every 5 seconds
//   });
// };
