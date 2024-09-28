// import React from 'react'
// import "./archivemore.scss"
// import { useNavigate, useLocation } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';
// import TableArchive from '../../components/table/TableArchive';

// const ArchiveMore = () => {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const { date, nombre, dateDebut, salaire, dateExpiration } = location.state || {};

//     const handleBackClick = () => {
//         navigate('/archive');
//     };

//     return (
//         <div className='container__archive-more'>
//             <div className='icon__back'>
//                 <FaArrowLeft
//                     className='back-icon'
//                     onClick={handleBackClick}
//                     size={44}
//                     style={{ cursor: 'pointer' }}
//                 />
//             </div>
//             <h1>Détails de l'archive</h1>
//             <p>Contenu supplémentaire sur cette page...</p>
//             <p>Date : {date}</p>
//             <p>Nombre : {nombre}</p>
//             <p>Date début : {dateDebut}</p>
//             <p>Salaire : {salaire}</p>
//             <p>Date expiration : {dateExpiration}</p>
//             <TableArchive />
//         </div>
//     )
// }

// export default ArchiveMore





















// import React from 'react';
// import "./archivemore.scss";
// import { useNavigate, useLocation } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';
// import TableArchive from '../../components/table/TableArchive';

// const ArchiveMore = () => {
//     const navigate = useNavigate();
//     const location = useLocation();

//     // On récupère uniquement la date (ou année) passée depuis le navigate
//     const { year } = location.state || {};

//     const handleBackClick = () => {
//         navigate('/archive');
//     };

//     return (
//         <div className='container__archive-more'>
//             <div className='icon__back'>
//                 <FaArrowLeft
//                     className='back-icon'
//                     onClick={handleBackClick}
//                     size={44}
//                     style={{ cursor: 'pointer' }}
//                 />
//             </div>
//             <h1>Détails de l'archive</h1>
//             {/* Affichage de l'année reçue */}
//             <p>Année de l'archive : {year}</p>
//             <TableArchive />
//         </div>
//     );
// }

// export default ArchiveMore;

































import React from 'react';
import "./archivemore.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import TableArchive from '../../components/table/TableArchive';
import { useGetArchiveByYear } from '../../services/serviceArchive'; // Importe ton service

const ArchiveMore = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // On récupère l'année passée depuis le navigate
    const { year } = location.state || {};

    // Utilisation du hook pour récupérer les données basées sur l'année
    const { data, isLoading, isError, error } = useGetArchiveByYear(year);

    const handleBackClick = () => {
        navigate('/archive');
    };

    // Gestion du chargement
    if (isLoading) {
        return <p>Chargement des archives...</p>;
    }

    // Gestion des erreurs
    if (isError) {
        return <p>Erreur: {error.message}</p>;
    }

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
            <h1>Détails de l'archive pour l'année {year}</h1>
            {/* Afficher les archives si elles sont disponibles */}
            {data && data.data.length > 0 ? (
                <div>
                    <p>Nombre d'archives : {data.data.length}</p>
                    <ul>
                        {data.data.map((archive) => (
                            <li key={archive._id}>
                                <p><strong>Description :</strong> {archive.description}</p>
                                <p><strong>Nom :</strong> {archive.nom_depose}</p>
                                <p><strong>Prénom :</strong> {archive.prenom_depose}</p>
                                <p><strong>Matricule :</strong> {archive.matricule}</p>
                                <p><strong>Numéro de bordereau :</strong> {archive.numero_bordereaux}</p>
                                <p><strong>Date de départ :</strong> {new Date(archive.date_depart).toLocaleDateString()}</p>
                                <p><strong>Expéditeur :</strong> {archive.expiditeur}</p>
                                <p><strong>Destination :</strong> {archive.destination}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Aucune archive trouvée pour cette année.</p>
            )}
            {/* <TableArchive /> */}
             {/* Afficher le tableau des archives si les données sont disponibles */}
             <TableArchive archives={data ? data.data : []} />
        </div>
    );
}

export default ArchiveMore;
