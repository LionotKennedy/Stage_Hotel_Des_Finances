import React, { useEffect } from 'react'
import TableResponsive from '../../components/table/TableResponsive'
import "./dossier.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importer le CSS de AOS


const Dossier = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations en millisecondes
    //   once: true,    // Pour que l'animation se joue une seule fois
    });
  }, []);
  return (
    <div className="container__dossier">
      <div className='title_corrier'>
        <span>Courrier</span>
      </div>
      <div  data-aos="slide-down">
      <TableResponsive />
      </div>
      {/* <div className='container__folder row'>
        <div className='row'>

        </div>
      </div> */}
    </div>
  )
}

export default Dossier
