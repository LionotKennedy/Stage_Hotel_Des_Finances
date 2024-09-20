import React from 'react'
import "./archivecard.scss"
import folder from "../../assets/images/user.png"
import { useNavigate } from 'react-router-dom';

const ArchiveCard = () => {

  const navigate = useNavigate();

  // const handleCardClick = () => {
  //   navigate('/archive/details'); 
  // };

  const handleCardClick = () => {
    // Les données que vous voulez envoyer
    const data = {
      date: "2023",
      nombre: 122,
      dateDebut: "2021",
      salaire: "fffff Ariary",
      dateExpiration: "jchjdjcdjsj"
    };

    navigate('/archive/details', { state: data }); 
  };
  
  return (
        <div className='container__card' onClick={handleCardClick}>
          <div className="content_card">
            <div className="card_details">
              <div className="img_folder">
                <img className="imageFolder" src={folder} alt="image" />
              </div>
              <div className="text">
                <div className="date_archive">2023</div>
                <span>Nombre: 122</span><br />
                <span>Date debut: 2021</span>
              </div>
            </div>
            <div className="job_salary">
              <div className="salaireP">Salaire: fffff Ariary</div>
              <span>Date expiration: jchjdjcdjsj</span><br />
            </div>
          </div>
        </div>
  )
}

export default ArchiveCard
