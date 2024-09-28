

import React, { useEffect, useRef, useState } from 'react';
import search from "../../assets/image/search.png"
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
import { FaArrowUp } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { useGetFolders } from '../../services/serviceFolder'; // Assurez-vous que le chemin est correct
import AlertDialogSlide from '../MUI_alert/deleteFolder'; // Importer l'alert modal
import CustomizedDialogs from '../MUI_read/readFolder'; // Importer l'alert modal

import "./tableResponsive.scss"
import CustomModal from '../MUI/CustomModal';

const TableResponsive = () => {
    const tableRef = useRef(null);
    const searchRef = useRef(null);
    const [searchType, setSearchType] = useState('name');
    const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la modale
    const [selectedFolderId, setSelectedFolderId] = useState(null); // État pour gérer l'ID du courrier sélectionné

    const [alertOpen, setAlertOpen] = useState(false); // État pour l'alert modal
    const [deleteFolderId, setDeleteFolderId] = useState(null); // ID pour suppression

    const [alertOpenRead, setAlertOpenRead] = useState(false); // État pour l'alert modal
    const [readFolderId, setReadFolderId] = useState(null); // ID pour suppression

    // Utilisez le hook pour récupérer les dossiers
    const { data: folders, isLoading, isError } = useGetFolders();


    const [mode, setMode] = useState('add'); // Nouveau état pour le mode de la modale

    const handleOpenModal = (folderId, mode) => {
        setSelectedFolderId(folderId); // Stocke l'ID du courrier sélectionné
        setMode(mode);
        setModalOpen(true); // Ouvre la modale
    };

    const handleCloseModal = () => setModalOpen(false); // Fonction pour fermer la modale

    // Ouvre le modal d'alerte avec l'ID du courrier à supprimer
    const handleDeleteClick = (folderId) => {
        setDeleteFolderId(folderId);
        setAlertOpen(true); // Ouvre l'alert modal
        console.log(folderId)
    };
    
    // Ouvre le modal d'alerte avec l'ID du courrier à supprimer
    const handleReadClick = (folderId) => {
        setReadFolderId(folderId);
        setAlertOpenRead(true); // Ouvre l'alert modal
        console.log(folderId)
    };
    
    useEffect(() => {
        if (folders && folders.data) {
            folders.data.forEach((folder) => console.log('Folder data:', folder));
        }
    }, [folders])

    useEffect(() => {
        const searchInput = searchRef.current;
        const table = tableRef.current;
        const tableRows = table.querySelectorAll('tbody tr');

        const searchTable = () => {
            tableRows.forEach((row, i) => {
                let table_data = row.textContent.toLowerCase(),
                    search_data = searchInput.value.toLowerCase();

                row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
                row.style.setProperty('--delay', i / 25 + 's');
            });

            document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
                visible_row.style.backgroundColor = (i % 2 === 0) ? '--second-bg' : '--second-bg';
                visible_row.style.animationDelay = `${i * 0.1}s`;
            });
        };

        searchInput.addEventListener('input', searchTable);

        return () => {
            searchInput.removeEventListener('input', searchTable);
        };
    }, []);

    return (
        <div className='container__table'>
            <main className="table" ref={tableRef} id="customers_table">
                <section className="table__header">
                    <select className='searchByeverything' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                        <option value="name">Search by Name</option>
                        <option value="id">Search by ID</option>
                    </select>
                    <div className="input-group">
                        <input type="search" placeholder="Search Data..." ref={searchRef} />
                        <img src={search} alt="Search Icon" />
                    </div>
                    <div className='option_right'>
                        {/* <MdAdd onClick={handleOpenModal} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} /> */}
                        <MdAdd onClick={() => handleOpenModal(null, 'add')} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
                    </div>
                </section>

                <section className="table__body">
                    <table className='table'>
                        <thead className='thead'>
                            <tr>
                                <th className='th'>ID Courrier </th>
                                <th className='th'>Nom </th>
                                <th className='th'>Prénom </th>
                                <th className='th'>Matricule </th>
                                <th className='th'>Expediteur </th>
                                <th className='th'>Destination </th>
                                <th className='th'>Numero Bordereaux </th>
                                <th className='th'>Date Départ </th>
                                <th className='th'>Actions </th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {folders && folders.data && folders.data.map((folder, index) => (
                                <tr key={index}>
                                    <td className="td">{folder._id}</td>
                                    <td className="td">{folder.id_nature.nom_depose}</td>
                                    <td className="td">{folder.id_nature.prenom_depose}</td>
                                    <td className="td">{folder.id_nature.matricule}</td>
                                    <td className="td">{folder.expiditeur}</td>
                                    <td className="td">{folder.destination}</td>
                                    <td className="td">{folder.numero_bordereaux}</td>
                                    <td className="td">{new Date(folder.date_depart).toLocaleDateString()}</td>
                                    <td className="td">
                                        {/* <MdEdit className="action-icon icon" title="Update" /> */}
                                        {/* <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal()} /> */}
                                        <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
                                        <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
                                        <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                <AnimatePresence>
                    {/* <CustomModal open={modalOpen} handleClose={handleCloseModal} /> */}
                    {modalOpen && (
                        <CustomModal
                            open={modalOpen}
                            handleClose={handleCloseModal}
                            folderId={selectedFolderId} // Passer l'ID du courrier à la modale
                            mode={mode} // Passer le mode à la modale
                        />
                    )}
                </AnimatePresence>
                {/* Inclusion du modal d'alerte */}
                <AlertDialogSlide open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} />
                <CustomizedDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
            </main>
        </div>
    );
}

export default TableResponsive;


