import React from 'react'
import "./visa.scss"
import customerList from '../../Data/user.json'
import TablePersonalize from '../../components/table/TablePersonalize'


const customerTableHead = [
  '',
  'name',
  'email',
  'phone',
  'total orders',
  'total spend',
  'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
  <tr className='tr' key={index}>
      <td className='td'>{item.id}</td>
      <td className='td'>{item.name}</td>
      <td className='td'>{item.email}</td>
      <td className='td'>{item.phone}</td>
      <td className='td'>{item.total_orders}</td>
      <td className='td'>{item.total_spend}</td>
      <td className='td'>{item.location}</td>
  </tr>
)



const Visa = () => {
  return (
    <div className='rowx'>
      <TablePersonalize
        limit='10'
        headData={customerTableHead}
        renderHead={(item, index) => renderHead(item, index)}
        bodyData={customerList}
        renderBody={(item, index) => renderBody(item, index)}
       />
    </div>
  )
}

export default Visa
