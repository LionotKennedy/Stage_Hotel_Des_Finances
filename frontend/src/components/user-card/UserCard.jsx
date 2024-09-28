// import React from 'react'
// import "./usercard.scss"
// import user from "../../assets/images/user.png"
// import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';

// const UserCard = ({ users }) => {
//     // Si users est indéfini ou s'il ne s'agit pas d'un tableau, on retourne null ou un message.
//     if (!users || !Array.isArray(users)) {
//       return <p>Aucun utilisateur trouvé.</p>;
//     }
//   return (
//     <div className='container__user'>
//       {users.map((user, index) => (
//       <div key={index} className="content_user">
//         <div className="user_details">
//           <div className="img_user">
//             <img className="imageUser" src={user} alt="image" />
//           </div>
//           <div className="text__user">
//             <div className="date_user">RAZAFIMANDIMBY</div>
//             <span>Lionot</span><br />
//             <span>razafimandimbylionotkennedy@gmail.com</span>
//           </div>
//         </div>
//         <div className="_user">
//           <div className="info__User">Role: personnel</div>
//           <span>Statut: active</span><br />
//           <MdEdit className="icon__user" title="Update" />
//            {/* <MdDelete className="icon" title="Delete" /> */}
//             <MdVisibility className="icon__user" title="Read" />
//         </div>
//       </div>
//        ))}
//     </div>
//   )
// }

// export default UserCard
























import React from 'react';
import "./usercard.scss";
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md';

// Le composant reçoit un tableau d'utilisateurs via les props
const UserCard = ({ users }) => {
  // Si users est indéfini ou vide, afficher un message d'erreur
  if (!users || !Array.isArray(users) || users.length === 0) {
    return <p>Aucun utilisateur trouvé.</p>;
  }

  return (
    <div className='container__user'>
      {users.map((user, index) => (
        <div key={index} className="content_user">
          <div className="user_details">
            <div className="img_user">
              {/* Utilisation d'une image par défaut si l'utilisateur n'a pas d'image */}
              <img 
                className="imageUser" 
                src={user.image ? `http://127.0.0.1:9876/uploads/${user.image}` : "default_user_image.png"} 
                alt="Profile" 
              />
            </div>
            <div className="text__user">
              <div className="name_user">{user.name}</div>
              <span>{user.email}</span><br />
              <span>{user.role}</span>
            </div>
          </div>
          <div className="_user">
            <div className="info__User">Rôle: {user.role}</div>
            <span>Statut: {user.status}</span><br />
            {/* Icônes d'édition, suppression et vue */}
            <MdEdit className="icon__user" title="Modifier" />
            <MdVisibility className="icon__user" title="Afficher" />
            <MdDelete className="icon__user" title="Supprimer" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserCard;
