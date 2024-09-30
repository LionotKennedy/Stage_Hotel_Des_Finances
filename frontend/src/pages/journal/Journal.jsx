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






















import React, { useEffect } from 'react';
import "./journal.scss";
import Table from '../../components/table/Table';
import customerList from '../../Data/user.json';
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md';
import { useGetJournals } from '../../services/serviceJournal';

// const customerTableHead = [
//   '',
//   'name',
//   'email',
//   'phone',
//   'total orders',
//   'total spend',
//   'location',
//   'Action' // Nouvelle colonne pour les actions
// ];

// const renderHead = (item, index) => <th key={index}>{item}</th>;

// const renderBody = (item, index) => (
//   <tr key={index}>
//     <td>{item.id}</td>
//     <td>{item.name}</td>
//     <td>{item.email}</td>
//     <td>{item.phone}</td>
//     <td>{item.total_orders}</td>
//     <td>{item.total_spend}</td>
//     <td>{item.location}</td>
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

const Journal = () => {
  // Utilisez le hook pour récupérer les dossiers
  const { data: journals, isLoading, isError } = useGetJournals();

  useEffect(() => {
    if (journals && journals.data) {
      // journals.data.forEach((journal) => console.log('Journal data:', journal));
      const data = journals.data.forEach((journal) => console.log('Journal data:', journal));
      console.log('Journal data2:', journals.action)
    }
  }, [journals]);


  const customerTableHead = [
    '',
    'action',
    'date',
    'details',
    'user',
    'userName',
    'adressEmail',
    'imageJournale', // Nouvelle colonne pour les actions
    'Action', // Nouvelle colonne pour les actions
  ]

  const renderHead = (item, index) => <th key={index}>{item}</th>;


  
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.action}</td>
    <td>{item.date}</td>
    <td>{item.details}</td>
    <td>{item.user}</td>
    <td>{item.userName}</td>
    <td>{item.adressEmail}</td>
    <td>{item.imageJournale}</td>
    <td>
      <MdVisibility onClick={() => handleRead(item.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
      <MdEdit onClick={() => handleEdit(item.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
      <MdDelete onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer' }} />
    </td>
  </tr>
);


const handleRead = (id) => {
  console.log('Read item with id:', id);
  // Logique pour lire les détails de l'élément
};

const handleEdit = (id) => {
  console.log('Edit item with id:', id);
  // Logique pour éditer l'élément
};

const handleDelete = (id) => {
  console.log('Delete item with id:', id);
  // Logique pour supprimer l'élément
};

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
                // bodyData={customerList}
                bodyData={customerList}
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
