// import React, { useEffect } from 'react'
// import "./archivecard.scss"
// import folder from "../../assets/images/archive.png"
// import { useNavigate } from 'react-router-dom';
// import { useGetGroupArchive } from '../../services/serviceArchive';

// const ArchiveCard = () => {

//   const navigate = useNavigate();


//      // Utilisez le hook pour récupérer les dossiers
//      const { data: groups, isLoading, isError } = useGetGroupArchive();

//      useEffect(() => {
//       if (groups) {
//           console.log('Données des archive par groupes:', groups);
//           console.log('Données des data:', groups.data);
//       }
//   }, [groups]);

//   const handleCardClick = () => {
//     // Les données que vous voulez envoyer
//     const data = {
//       date: "2023",
//       nombre: 122,
//       dateDebut: "2021",
//       salaire: "fffff Ariary",
//       dateExpiration: "jchjdjcdjsj"
//     };

//     navigate('/archive/details', { state: data }); 
//   };
  
//   return (
//         <div className='container__card'>
//           <div className="content_card" onClick={handleCardClick}>
//             <div className="card_details">
//               <div className="img_folder">
//                 <img className="imageFolder" src={folder} alt="image" />
//               </div>
//               <div className="text">
//                 <div className="date_archive">2023</div>
//                 <span>Nombre: 122</span><br />
//                 <span>Date debut: 2021</span>
//               </div>
//             </div>
//             <div className="job_salary">
//               <div className="salaireP">Salaire: fffff Ariary</div>
//               <span>Date expiration: jchjdjcdjsj</span><br />
//             </div>
//           </div>
//         </div>
//   )
// }

// export default ArchiveCard























// import React, { useEffect } from 'react'
// import "./archivecard.scss"
// import folder from "../../assets/images/archive.png"
// import { useNavigate } from 'react-router-dom';
// import { useGetGroupArchive } from '../../services/serviceArchive';

// const ArchiveCard = () => {
//   const navigate = useNavigate();

//   const { data: groups, isLoading, isError } = useGetGroupArchive();

//   useEffect(() => {
//     if (groups && groups.data) {
//       console.log('Données des archives par groupes:', groups.data);
//     }
//   }, [groups]);

//   const handleCardClick = (year, archives) => {
//     const data = {
//       year: year,
//       archives: archives.map(archive => ({
//         id: archive._id,
//         description: archive.description,
//         name: archive.nom_depose,
//         firstName: archive.prenom_depose,
//         matricule: archive.matricule,
//         bordereauNumber: archive.numero_bordereaux,
//         departureDate: archive.date_depart,
//         sender: archive.expiditeur,
//         destination: archive.destination
//       }))
//     };
//     navigate(`/archive/${year}`, { state: data });
//   };
  
//   return (
//     <div className='container__cards'>
//       {groups?.data?.map((group, index) => (
//         <div key={index} className="content_card" onClick={() => handleCardClick(group._id, group.archives)}>
//           <div className="card_details">
//             <div className="img_folder">
//               <img className="imageFolder" src={folder} alt="image" />
//             </div>
//             <div className="text">
//               <div className="date_archive">{group._id}</div>
//               <span>Nombre: {group.archives.length}</span>
//             </div>
//           </div>
//           <div className="job_salary">
//             <div className="salaireP">Détails: {group.archives.length} archives</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ArchiveCard





















// import React from 'react'
// import "./archivecard.scss"
// import folder from "../../assets/images/archive.png"
// import { useNavigate } from 'react-router-dom';

// const ArchiveCard = ({ groups }) => {
//   const navigate = useNavigate();

//   const handleCardClick = (year) => {
//     const data = {
//       year: year,
//       archives: archives.map(archive => ({
//         id: archive._id,
//         description: archive.description,
//         name: archive.nom_depose,
//         firstName: archive.prenom_depose,
//         matricule: archive.matricule,
//         bordereauNumber: archive.numero_bordereaux,
//         departureDate: archive.date_depart,
//         sender: archive.expiditeur,
//         destination: archive.destination
//       }))
//     };
//     navigate(`/archive/details`, { state: data });
//   };
  
//   return (
//     <div className='container__cards'>
//       {groups.map((group, index) => (
//         <div key={index} className="content_card" onClick={() => handleCardClick(group._id)}>
//           <div className="card_details">
//             <div className="img_folder">
//               <img className="imageFolder" src={folder} alt="image" />
//             </div>
//             <div className="text">
//               <div className="date_archive">{group._id}</div>
//               <span>Nombre: {group.archives.length}</span>
//             </div>
//           </div>
//           <div className="job_salary">
//             <div className="salaireP">Détails: {group.archives.length} archives</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ArchiveCard;

















import React from 'react';
import "./archivecard.scss";
import folder from "../../assets/images/archive.png";
import { useNavigate } from 'react-router-dom';

const ArchiveCard = ({ groups }) => {
  const navigate = useNavigate();

  // On ne passe que l'année (ou date) au lieu de toutes les archives
  const handleCardClick = (year) => {
    navigate(`/archive/details`, { state: { year } });
  };

  return (
    <div className='container__cards'>
      {groups.map((group, index) => (
        <div key={index} className="content_card" onClick={() => handleCardClick(group._id)}>
          <div className="card_details">
            <div className="img_folder">
              <img className="imageFolder" src={folder} alt="image" />
            </div>
            <div className="text">
              <div className="date_archive">{group._id}</div>
              <span>Nombre: {group.archives.length}</span>
            </div>
          </div>
          <div className="job_salary">
            <div className="salaireP">Détails: {group.archives.length} archives</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArchiveCard;
