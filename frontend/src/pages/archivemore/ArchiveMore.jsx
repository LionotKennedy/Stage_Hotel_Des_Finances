import React from 'react'
import "./archivemore.scss"
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import TableArchive from '../../components/table/TableArchive';

const ArchiveMore = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { date, nombre, dateDebut, salaire, dateExpiration } = location.state || {};

    const handleBackClick = () => {
        navigate('/archive');
    };

    return (
        <div className='container__archive-more'>
            <div className='icon__back'>
                <FaArrowLeft
                    className='back-icon'
                    onClick={handleBackClick}
                    size={44}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <h1>Détails de l'archive</h1>
            <p>Contenu supplémentaire sur cette page...</p>
            <p>Date : {date}</p>
            <p>Nombre : {nombre}</p>
            <p>Date début : {dateDebut}</p>
            <p>Salaire : {salaire}</p>
            <p>Date expiration : {dateExpiration}</p>
            <TableArchive />
        </div>
    )
}

export default ArchiveMore
