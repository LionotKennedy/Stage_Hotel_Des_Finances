import React, { useEffect, useRef, useState } from 'react';
import "./tableResponsive.scss"
import search from "../../assets/image/search.png"
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';
import { useGetVisa } from '../../services/serviceVisa';
import AlertDialogSlideVisa from '../MUI_alert/deleteVisa';
import CustomizedVisaDialogs from '../MUI_read/readVisa';
import VisaModal from '../MUI/VisaModal';

const TableVisa = () => {
    const tableRef = useRef(null);
    const searchRef = useRef(null);
    const [searchType, setSearchType] = useState('nom');
    const [searchValue, setSearchValue] = useState('');

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFolderId, setSelectedFolderId] = useState(null);
    const [alertOpen, setAlertOpen] = useState(false);
    const [deleteFolderId, setDeleteFolderId] = useState(null);
    const [alertOpenRead, setAlertOpenRead] = useState(false);
    const [readFolderId, setReadFolderId] = useState(null);
    const { data: folders, refetch, isLoading, isError } = useGetVisa();
    const [mode, setMode] = useState('add');

    const handleOpenModal = (folderId, mode) => {
        setSelectedFolderId(folderId);
        setMode(mode);
        setModalOpen(true);
    };

    const handleCloseModal = () => setModalOpen(false);

    const handleDeleteClick = (folderId) => {
        setDeleteFolderId(folderId);
        setAlertOpen(true);
        console.log(folderId)
    };

    const handleReadClick = (folderId) => {
        setReadFolderId(folderId);
        setAlertOpenRead(true);
        console.log(folderId)
    };

    useEffect(() => {
        if (folders && folders.data) {
            folders.data.forEach((folder) => console.log('Folder data:', folder));
        }
    }, [folders])

    useEffect(() => {
        refetch();
    }, [refetch]);

    useEffect(() => {
        const searchInput = searchRef.current;
        const table = tableRef.current;
        const tableRows = table.querySelectorAll('tbody tr');

        const searchTable = () => {
            tableRows.forEach((row, i) => {
                let search_data = searchValue.toLowerCase();
                let table_data = '';

                if (searchType === 'nom') {
                    table_data = row.querySelectorAll('td')[1].textContent.toLowerCase();
                } else if (searchType === 'prenom') {
                    table_data = row.querySelectorAll('td')[2].textContent.toLowerCase();
                } else if (searchType === 'numero') {
                    table_data = row.querySelectorAll('td')[0].textContent.toLowerCase();
                } else if (searchType === 'reference') {
                    table_data = row.querySelectorAll('td')[3].textContent.toLowerCase();
                }

                row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
                row.style.setProperty('--delay', i / 25 + 's');
            });

            document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
                visible_row.style.backgroundColor = (i % 2 === 0) ? '--second-bg' : '--second-bg';
                visible_row.style.animationDelay = `${i * 0.1}s`;
            });
        };

        searchTable();
    }, [searchType, searchValue]);

    const displayData = () => {
        if (!folders || !folders.data) return null;

        return folders.data.map((folder, index) => (
            <tr key={index}>
                <td className="td">{folder.numero_visa}</td>
                <td className="td">{folder.nom_depose_visa}</td>
                <td className="td">{folder.prenom_depose_visa}</td>
                <td className="td">{folder.reference}</td>
                <td className="td">
                    <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
                    <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
                    <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
                </td>
            </tr>
        ));
    };



    return (
        <div className='container__table'>
            <main className="table" ref={tableRef} id="customers_table">
                <section className="table__header">
                    <select className='searchByeverything' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="nom">Search by Nom</option>
                        <option value="prenom">Search by prenom</option>
                        <option value="numero">Search by Numero</option>
                        <option value="reference">Search by reference</option>
                    </select>
                    <div className="input-group">
                        <input type="search"
                                placeholder="Search Data..."
                                ref={searchRef}
                                onChange={(e) => setSearchValue(e.target.value)} />
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
                                {/* <th className='th'>ID Visa </th> */}
                                <th className='th'>Numero </th>
                                <th className='th'>Nom </th>
                                <th className='th'>Prénom </th>
                                <th className='th'>Reference </th>
                                <th className='th'>Actions </th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {/* {folders && folders.data && folders.data.map((folder, index) => (
                                <tr key={index}>
                                    <td className="td">{folder.numero_visa}</td>
                                    <td className="td">{folder.nom_depose_visa}</td>
                                    <td className="td">{folder.prenom_depose_visa}</td>
                                    <td className="td">{folder.reference}</td>
                                    <td className="td">
                                        <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
                                        <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
                                        <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
                                    </td>
                                </tr>
                            ))} */}
                            {displayData()}
                        </tbody>
                    </table>
                </section>
                <AnimatePresence>
                    {modalOpen && (
                        <VisaModal
                            open={modalOpen}
                            handleClose={handleCloseModal}
                            folderId={selectedFolderId} // Passer l'ID du courrier à la modale
                            mode={mode} // Passer le mode à la modale
                            onSuccess={refetch}
                        />
                    )}
                </AnimatePresence>
                <AlertDialogSlideVisa open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} onSuccess={refetch} />
                <CustomizedVisaDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
            </main>
        </div>
    )
}

export default TableVisa
