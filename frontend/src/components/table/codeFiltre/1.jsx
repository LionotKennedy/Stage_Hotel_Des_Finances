import React, { useEffect, useRef, useState } from 'react';
import search from "../../assets/image/search.png"
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
import { FaArrowUp } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { useGetFolders } from '../../services/serviceFolder';
import AlertDialogSlide from '../MUI_alert/deleteFolder';
import CustomizedDialogs from '../MUI_read/readFolder';
import CustomModal from '../MUI/CustomModal';

const TableResponsive = () => {
    const tableRef = useRef(null);
    const searchRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('name');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFolderId, setSelectedFolderId] = useState(null);
    const [alertOpen, setAlertOpen] = useState(false);
    const [deleteFolderId, setDeleteFolderId] = useState(null);
    const [alertOpenRead, setAlertOpenRead] = useState(false);
    const [readFolderId, setReadFolderId] = useState(null);

    const { data: folders, isLoading, isError } = useGetFolders();

    const handleOpenModal = (folderId, mode) => {
        setSelectedFolderId(folderId);
        setMode(mode);
        setModalOpen(true);
    };

    const handleCloseModal = () => setModalOpen(false);

    const handleDeleteClick = (folderId) => {
        setDeleteFolderId(folderId);
        setAlertOpen(true);
    };
    
    const handleReadClick = (folderId) => {
        setReadFolderId(folderId);
        setAlertOpenRead(true);
    };

    useEffect(() => {
        if (folders && folders.data) {
            folders.data.forEach((folder) => console.log('Folder data:', folder));
        }
    }, [folders]);

    useEffect(() => {
        const searchInput = searchRef.current;
        const table = tableRef.current;
        const tableRows = table.querySelectorAll('tbody tr');

        const searchTable = () => {
            tableRows.forEach((row, i) => {
                let table_data = row.textContent.toLowerCase(),
                    search_data = searchTerm.toLowerCase();

                row.classList.toggle('hide', !table_data.includes(search_data));
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
    }, [searchTerm]);

    const filterRows = (rows, searchTerm, searchType) => {
        switch(searchType) {
            case 'name':
                return rows.filter(row => row.textContent.toLowerCase().includes(searchTerm.toLowerCase()));
            case 'id':
                return rows.filter(row => row.cells[1].textContent.includes(searchTerm));
            default:
                return rows;
        }
    };

    useEffect(() => {
        if (folders && folders.data) {
            const filteredRows = filterRows(Array.from(tableRef.current.querySelectorAll('tbody tr')), searchTerm, searchType);
            filteredRows.forEach((row, index) => {
                row.style.display = 'table-row';
            });
            Array.from(tableRef.current.querySelectorAll('tbody tr')).forEach(row => {
                if (!filteredRows.includes(row)) {
                    row.style.display = 'none';
                }
            });
        }
    }, [folders, searchTerm, searchType]);

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
                        <MdAdd onClick={() => handleOpenModal(null, 'add')} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
                    </div>
                </section>

                <section className="table__body">
                    <table className='table'>
                        <thead className='thead'>
                            <tr>
                                <th className='th'>ID Courrier <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Nom <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Prénom <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Matricule <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Expediteur <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Destination <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Numero Bordereaux <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Date Départ <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Actions <span className="icon-arrow"><FaArrowUp /></span></th>
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
                    {modalOpen && (
                        <CustomModal
                            open={modalOpen}
                            handleClose={handleCloseModal}
                            folderId={selectedFolderId}
                            mode={mode}
                        />
                    )}
                    </AnimatePresence>
                    <AlertDialogSlide open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} />
                <CustomizedDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
            </main>
        </div>
    );
}

export default TableResponsive;
