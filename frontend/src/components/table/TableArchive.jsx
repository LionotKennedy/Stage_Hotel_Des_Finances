
import React, { useEffect, useRef, useState } from 'react';
import "./tableResponsive.scss";
import search from "../../assets/image/search.png"
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';
import { useGetFolders } from '../../services/serviceFolder'; 
import AlertDialogArchiveSlide from '../MUI_alert/deleteArchive';
import ArchiveDialogs from '../MUI_read/readArchive'; 
import ArchiveModal from '../MUI/ArchiveModal';

const TableArchive = ({ archives }) => {

    const tableRef = useRef(null);
    const searchRef = useRef(null);
    const [searchType, setSearchType] = useState('name');
    const [modalOpen, setModalOpen] = useState(false); 
    const [selectedFolderId, setSelectedFolderId] = useState(null); 

    const [alertOpen, setAlertOpen] = useState(false); 
    const [deleteFolderId, setDeleteFolderId] = useState(null); 

    const [alertOpenRead, setAlertOpenRead] = useState(false); 
    const [readFolderId, setReadFolderId] = useState(null);

    // Utilisez le hook pour récupérer les dossiers
    const { data: folders, isLoading, isError } = useGetFolders();


    const [mode, setMode] = useState('add'); 

    const handleOpenModal = (folderId, mode) => {
        setSelectedFolderId(folderId); 
        setMode(mode);
        setModalOpen(true); 
    };

    const handleCloseModal = () => setModalOpen(false); 

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

        if (!table || !searchInput) return; 

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
    }, [archives]); 



    return (
        <div className='container__table'>
            <main className="table" id="archive_table">
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
                                {/* <th className='th'>ID</th> */}
                                <th className='th'>Description</th>
                                <th className='th'>Nom</th>
                                <th className='th'>Prénom</th>
                                <th className='th'>Matricule</th>
                                <th className='th'>Numéro Bordereaux</th>
                                <th className='th'>Date Départ</th>
                                <th className='th'>Expéditeur</th>
                                <th className='th'>Destination</th>
                                <th className='th'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {archives && archives.length > 0 ? (
                                archives.map((archive) => (
                                    <tr key={archive._id}>
                                        {/* <td className="td">{archive._id}</td> */}
                                        <td className="td">{archive.description}</td>
                                        <td className="td">{archive.nom_depose}</td>
                                        <td className="td">{archive.prenom_depose}</td>
                                        <td className="td">{archive.matricule}</td>
                                        <td className="td">{archive.numero_bordereaux}</td>
                                        <td className="td">{new Date(archive.date_depart).toLocaleDateString()}</td>
                                        <td className="td">{archive.expiditeur}</td>
                                        <td className="td">{archive.destination}</td>
                                        <td className="td">
                                            <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(archive._id, 'edit')} />
                                            <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(archive._id)} />
                                            <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(archive._id)} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10">Aucune archive trouvée pour cette année.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
                <AnimatePresence>
                    {modalOpen && (
                        <ArchiveModal
                            open={modalOpen}
                            handleClose={handleCloseModal}
                            folderId={selectedFolderId} 
                            mode={mode}
                        />
                    )}
                </AnimatePresence>
                <AlertDialogArchiveSlide open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} />
                <ArchiveDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
            </main>
        </div>
    );
};

export default TableArchive;
