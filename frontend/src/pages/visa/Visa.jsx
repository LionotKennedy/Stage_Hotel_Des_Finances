import React from 'react'
import "./visa.scss"
// import customerList from '../../Data/user.json'
// import TablePersonalize from '../../components/table/TablePersonalize'
// import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md';
import TableVisa from '../../components/table/TableVisa';


// const customerTableHead = [
//   '',
//   'name',
//   'email',
//   'phone',
//   'total orders',
//   'total spend',
//   'location',
//   'Actions'
// ]

// const renderHead = (item, index) => <th key={index}>{item}</th>

// const renderBody = (item, index) => (
//   <tr className='tr' key={index}>
//     <td className='td'>{item.id}</td>
//     <td className='td'>{item.name}</td>
//     <td className='td'>{item.email}</td>
//     <td className='td'>{item.phone}</td>
//     <td className='td'>{item.total_orders}</td>
//     <td className='td'>{item.total_spend}</td>
//     <td className='td'>{item.location}</td>
//     <td>
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


const Visa = () => {
  return (
    <div className='rowc container__visa'>
      {/* <TablePersonalize
        limit='10'
        headData={customerTableHead}
        renderHead={(item, index) => renderHead(item, index)}
        bodyData={customerList}
        renderBody={(item, index) => renderBody(item, index)}
      /> */}
      <TableVisa />
    </div>
  )
}

export default Visa
