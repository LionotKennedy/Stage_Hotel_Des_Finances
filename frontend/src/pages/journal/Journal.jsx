// import React from 'react'
// import "./journal.scss"

// import Table from '../../components/table/Table'

// import customerList from '../../Data/user.json'

// import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md';


// const customerTableHead = [
//   '',
//   'name',
//   'email',
//   'phone',
//   'total orders',
//   'total spend',
//   'location',
//   'Action' // Nouvelle colonne pour les actions
// ]

// const renderHead = (item, index) => <th key={index}>{item}</th>

// const renderBody = (item, index) => (
//   <tr key={index}>
//       <td>{item.id}</td>
//       <td>{item.name}</td>
//       <td>{item.email}</td>
//       <td>{item.phone}</td>
//       <td>{item.total_orders}</td>
//       <td>{item.total_spend}</td>
//       <td>{item.location}</td>
//       <td>
//       <MdVisibility onClick={() => handleRead(item.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
//       <MdEdit onClick={() => handleEdit(item.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
//       <MdDelete onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer' }} />
//     </td>
//   </tr>
// )


// const handleRead = (id) => {
//   console.log('Read item with id:', id);
//   // Logique pour lire les détails de l'élément
// };

// const handleEdit = (id) => {
//   console.log('Edit item with id:', id);
//   // Logique pour éditer l'élément
// };

// const handleDelete = (id) => {
//   console.log('Delete item with id:', id);
//   // Logique pour supprimer l'élément
// };


// const Journal = () => {
//   return (
//     <div>
//         <h2 className="page-header">
//             Journeaux utilisateur
//         </h2>
//         <div className="row">
//             <div className="col-12">
//                 <div className="card">
//                     <div className="card__body">
//                         <Table
//                             limit='10'
//                             headData={customerTableHead}
//                             renderHead={(item, index) => renderHead(item, index)}
//                             bodyData={customerList}
//                             renderBody={(item, index) => renderBody(item, index)}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Journal









































// import React, { useEffect } from 'react';
// import "./journal.scss";
// import Table from '../../components/table/Table';
// import customerList from '../../Data/user.json';
// import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md';
// import { useGetJournals } from '../../services/serviceJournal';

// // const customerTableHead = [
// //   '',
// //   'name',
// //   'email',
// //   'phone',
// //   'total orders',
// //   'total spend',
// //   'location',
// //   'Action' // Nouvelle colonne pour les actions
// // ];

// // const renderHead = (item, index) => <th key={index}>{item}</th>;

// // const renderBody = (item, index) => (
// //   <tr key={index}>
// //     <td>{item.id}</td>
// //     <td>{item.name}</td>
// //     <td>{item.email}</td>
// //     <td>{item.phone}</td>
// //     <td>{item.total_orders}</td>
// //     <td>{item.total_spend}</td>
// //     <td>{item.location}</td>
// //     <td>
// //       <MdVisibility onClick={() => handleRead(item.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
// //       <MdEdit onClick={() => handleEdit(item.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
// //       <MdDelete onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer' }} />
// //     </td>
// //   </tr>
// // );


// // const handleRead = (id) => {
// //   console.log('Read item with id:', id);
// //   // Logique pour lire les détails de l'élément
// // };

// // const handleEdit = (id) => {
// //   console.log('Edit item with id:', id);
// //   // Logique pour éditer l'élément
// // };

// // const handleDelete = (id) => {
// //   console.log('Delete item with id:', id);
// //   // Logique pour supprimer l'élément
// // };

// const Journal = () => {
//   // Utilisez le hook pour récupérer les dossiers
//   const { data: journals, isLoading, isError } = useGetJournals();

//   useEffect(() => {
//     if (journals && journals.data) {
//       // journals.data.forEach((journal) => console.log('Journal data:', journal));
//       const data = journals.data.forEach((journal) => console.log('Journal data:', journal));
//       console.log('Journal data2:', journals.action)
//     }
//   }, [journals]);


//   const customerTableHead = [
//     '',
//     'action',
//     'date',
//     'details',
//     'user',
//     'userName',
//     'adressEmail',
//     'imageJournale', // Nouvelle colonne pour les actions
//     'Action', // Nouvelle colonne pour les actions
//   ]

//   const renderHead = (item, index) => <th key={index}>{item}</th>;



// const renderBody = (item, index) => (
//   <tr key={index}>
//     <td>{item.action}</td>
//     <td>{item.date}</td>
//     <td>{item.details}</td>
//     <td>{item.user}</td>
//     <td>{item.userName}</td>
//     <td>{item.adressEmail}</td>
//     <td>{item.imageJournale}</td>
//     <td>
//       <MdVisibility onClick={() => handleRead(item.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
//       <MdEdit onClick={() => handleEdit(item.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
//       <MdDelete onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer' }} />
//     </td>
//   </tr>
// );


// const handleRead = (id) => {
//   console.log('Read item with id:', id);
//   // Logique pour lire les détails de l'élément
// };

// const handleEdit = (id) => {
//   console.log('Edit item with id:', id);
//   // Logique pour éditer l'élément
// };

// const handleDelete = (id) => {
//   console.log('Delete item with id:', id);
//   // Logique pour supprimer l'élément
// };

//   return (
//     <div>
//       <h2 className="page-header">
//         Journaux utilisateur
//       </h2>
//       <div className="row">
//         <div className="col-12">
//           <div className="card">
//             <div className="card__body">
//               <Table
//                 limit='10'
//                 headData={customerTableHead}
//                 renderHead={(item, index) => renderHead(item, index)}
//                 // bodyData={customerList}
//                 bodyData={customerList}
//                 renderBody={(item, index) => renderBody(item, index)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Journal;







































// // Fonction pour rendre les lignes du tableau
// const renderBody = (item, index) => (
  
//   <tr key={index}>
//     <td>{item.action}</td>
//     <td>{item.date}</td>
//     <td>{item.details}</td>
//     <td>{item.user}</td>
//     <td>{item.userName}</td>
//     <td>{item.adressEmail}</td>
//     <td>
//       {/* <img src={item.imageJournale} alt="Journal" style={{ width: '50px' }} /> */}
//       <img src={
//         item.imageJournale.startsWith('uploads_default/')
//           ? `http://127.0.0.1:9876/uploads/${item.imageJournale}` // Si l'image est dans "upload_default/", ajouter "uploads/" devant
//           : `http://127.0.0.1:9876${item.imageJournale}` // Sinon, garder le chemin de l'image tel quel
//       } alt="Journal" style={{ width: '50px' }} />
//     </td>
//     <td>
//       <MdVisibility onClick={() => handleRead(item._id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
//       <MdEdit onClick={() => handleEdit(item._id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
//       <MdDelete onClick={() => handleDelete(item._id)} style={{ cursor: 'pointer' }} />
//     </td>
//   </tr>
// );









// Fonction utilitaire pour obtenir la source de l'image
// const getUserImageSrc = (image) => {
//   if (image.startsWith('/uploads_default/')) {
//     return `http://127.0.0.1:9876/uploads/${image}`;
//   } else if (image.startsWith('/')) {
//     return `http://127.0.0.1:9876${image}`;
//   } else {
//     return `http://127.0.0.1:9876/uploads_default/${image}`;
//   }
// };
























{/* <td>
  <img 
    // src={
    //   item.imageJournale.startsWith('uploads_default/')
    //     ? `http://127.0.0.1:9876/uploads/${item.imageJournale}`
    //     : `http://127.0.0.1:9876${item.imageJournale}`
    // }
    
    // src={
    //   item.imageJournale.startsWith('/uploads_default/')
    //     ? `http://127.0.0.1:9876/uploads/${item.imageJournale}`
    //     : item.imageJournale.startsWith('/') 
    //       ? `http://127.0.0.1:9876${item.imageJournale}`
    //       : `http://127.0.0.1:9876/uploads_default/${item.imageJournale}`
    // }

    src={getUserImageSrc(item.imageJournale)}

    alt="Journal"
    style={{ width: '50px' }}
  />
</td> */}















import React, { useEffect } from 'react';
import "./journal.scss";
import Table from '../../components/table/Table';
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md';
import { useGetJournals } from '../../services/serviceJournal';
import JournalDialogs from '../../components/MUI_read/readJournal'; 



const getUserImageSrc = (image) => {
  let imageUrl;

  if (image.startsWith('/uploads_default/')) {
    imageUrl = `http://127.0.0.1:9876/uploads/${image}`;
  } else if (image.startsWith('/')) {
    imageUrl = `http://127.0.0.1:9876${image}`;
  } else {
    imageUrl = `http://127.0.0.1:9876/uploads_default/${image}`;
  }

  console.log('Generated Image URL:', imageUrl); // Affiche l'URL générée dans la console
  return imageUrl;
};


const Journal = () => {
  // Utilisez le hook pour récupérer les journaux
  const { data: journals, isLoading, isError } = useGetJournals();
  const [alertOpenRead, setAlertOpenRead] = useState(false); 
  const [readFolderId, setReadFolderId] = useState(null);

  useEffect(() => {
    if (journals && journals.data) {
      console.log('Journal data:', journals.data); // S'assurer que les journaux sont bien récupérés
      // console.log('Journal data image:', journals.imageJournale); // S'assurer que les journaux sont bien récupérés
    }
  }, [journals]);

  // Définir les colonnes du tableau
  const customerTableHead = [
    'Action',
    'Date',
    'Détails',
    'Utilisateur',
    'Nom d’utilisateur',
    'Email',
    // 'Image du Journal',
    'Actions', // Colonne pour les actions (modifier, supprimer, lire)
  ];

  // Fonction pour rendre l'en-tête
  const renderHead = (item, index) => <th key={index}>{item}</th>;


  const renderBody = (item, index) => {
    const imageUrl = getUserImageSrc(item.imageJournale);
    console.log('Image Journal:', item.imageJournale); // Affiche l'image originale dans la console
    console.log('URL de l\'image:', imageUrl); // Affiche l'URL générée pour l'image
    console.log('Image Journal:', item.imageJournale); // Afficher l'image dans la console
  
    return (
      <tr key={index}>
        <td>{item.action}</td>
        <td>{item.date}</td>
        <td>{item.details}</td>
        <td>{item.user}</td>
        <td>{item.userName}</td>
        <td>{item.adressEmail}</td>
        <td>
          <MdVisibility onClick={() => handleRead(item._id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
          <MdEdit onClick={() => handleEdit(item._id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
          <MdDelete onClick={() => handleDelete(item._id)} style={{ cursor: 'pointer' }} />
        </td>
      </tr>
    );
  };
  

  const handleRead = (id) => {
    console.log('Lire journal avec id:', id);
    // Logique pour lire les détails du journal
  };

  const handleEdit = (id) => {
    console.log('Modifier journal avec id:', id);
    // Logique pour éditer le journal
  };

  const handleDelete = (id) => {
    console.log('Supprimer journal avec id:', id);
    // Logique pour supprimer le journal
  };

  // Gérer l'état de chargement et d'erreur
  if (isLoading) {
    return <div>Chargement des journaux...</div>;
  }

  if (isError) {
    return <div>Erreur lors du chargement des journaux.</div>;
  }

  return (
    <div>
      <h2 className="page-header">
        Journaux utilisateur
      </h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit='10'
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={journals ? journals.data : []} // Utilisation des données récupérées
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
