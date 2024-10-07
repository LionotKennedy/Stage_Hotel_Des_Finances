import React from 'react'
import TableResponsive from '../../components/table/TableResponsive'
import "./dossier.scss"


const Dossier = () => {
  return (
    <div className="container__dossier">
      <div className='title_corrier'>
        <span>Courrier</span>
      </div>
      <TableResponsive />
      {/* <div className='container__folder row'>
        <div className='row'>

        </div>
      </div> */}
    </div>
  )
}

export default Dossier
