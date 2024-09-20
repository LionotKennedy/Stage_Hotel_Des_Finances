import React from 'react'
import "./archivemore.scss"
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ArchiveMore = () => {
    const navigate = useNavigate();

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
        </div>
    )
}

export default ArchiveMore
