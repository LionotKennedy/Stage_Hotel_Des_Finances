import React from 'react'
import "./usercard.scss"
import user from "../../assets/images/user.png"

const UserCard = () => {
  return (
    <div className='container__user'>
    <div className="content_user">
      <div className="user_details">
        <div className="img_user">
          <img className="imageUser" src={user} alt="image" />
        </div>
        <div className="text__user">
          <div className="date_user">2023</div>
          <span>Nombre: 122</span><br />
          <span>Date debut: 2021</span>
        </div>
      </div>
      <div className="_user">
        <div className="info__User">Salaire: fffff Ariary</div>
        <span>Date expiration: jchjdjcdjsj</span><br />
      </div>
    </div>
  </div>
  )
}

export default UserCard
