import React from 'react'
import "./usercard.scss"
import user from "../../assets/images/user.png"
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';

const UserCard = () => {
  return (
    <div className='container__user'>
      <div className="content_user">
        <div className="user_details">
          <div className="img_user">
            <img className="imageUser" src={user} alt="image" />
          </div>
          <div className="text__user">
            <div className="date_user">RAZAFIMANDIMBY</div>
            <span>Lionot</span><br />
            <span>razafimandimbylionotkennedy@gmail.com</span>
          </div>
        </div>
        <div className="_user">
          <div className="info__User">Role: personnel</div>
          <span>Statut: active</span><br />
          <MdEdit className="icon__user" title="Update" />
           {/* <MdDelete className="icon" title="Delete" /> */}
            <MdVisibility className="icon__user" title="Read" />
        </div>
      </div>
    </div>
  )
}

export default UserCard
