
import React, { useEffect, useRef, useState } from 'react';
import "./tableResponsive.scss";
import search from "../../assets/image/search.png"
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';
import { useGetFolders } from '../../services/serviceFolder';
import AlertDialogArchiveSlide from '../MUI_alert/deleteArchive';
import ArchiveDialogs from '../MUI_read/readArchive';
import ArchiveModal from '../MUI/ArchiveModal';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import * as XLSX from 'xlsx';
import { FaArrowDown, FaSearch } from 'react-icons/fa';
import imageData from "../../assets/images/logo.png";
import imageLogo from "../../assets/images/ministere.png";
import pdf from "../../assets/image/pdf.png";
import excel from "../../assets/image/excel.png";
import word from "../../assets/image/json.png";
import ContentToPrintArchive from '../printer/ContentToPrintArchive';


const TableArchive = ({ archives, refetch, year }) => {
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
    const { data: folders, isLoading, isError } = useGetFolders();
    const [mode, setMode] = useState('add');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const contentRef = useRef();
    const [startDateValue, setStartDateValue] = useState('');
    const [endDateValue, setEndDateValue] = useState('');


    const exportPdf = async () => {
        const doc = new jsPDF({ orientation: "landscape" });
    
        // Ajoutez une image centrée en haut avec un décalage de 2 lignes
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const imageWidth = 40; // Largeur de l'image
        const centeredX = (pageWidth - imageWidth) / 2; // Calculer le positionnement centré
        const topMargin = 20; // Marges supérieures et inférieures pour le décalage
        const centeredY = topMargin; // Position Y de l'image centrée
        
        doc.addImage(imageLogo, 'JPEG', centeredX, centeredY, imageWidth, imageWidth); // Image centrée en haut
        
        // Ajoutez l'image à gauche
        doc.addImage(imageData, 'JPEG', 10, 65, 23, 23); // Image à gauche
    
        // Démarrer la table après les images, avec un espace suffisant
        doc.autoTable({
            html: "#table__archive",
            startY: centeredY + imageWidth + topMargin * 2, // Démarrer la table après l'image centrée avec un décalage total de 4 lignes
        });
    
        doc.save("archive.pdf");
    };


    const exportExcel = () => {
        // const table = document.getElementById('my-table');
        const table = document.getElementById('table__archive');
        const wb = XLSX.utils.table_to_book(table);
        XLSX.writeFile(wb, 'archive.xlsx');
    };


    const exportWord = () => {
        const doc = new jsPDF();
        doc.autoTable({
            html: "#table__archive",
            styles: { cellPadding: 6 }
        });
        doc.save('archive.docx');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        console.log('Dropdown toggled!');
    };

    const handleOptionClick = async (option) => {
        setSelectedOption(option);
        console.log(`Option selected: ${option}`);
        switch (option) {
            case 'option1':
                await exportPdf();
                console.log("PDF généré avec succès");
                break;
            case 'option2':
                await exportWord();
                console.log("Fichier Word généré avec succès");
                break;
            case 'option3':
                await exportExcel();
                console.log("Fichier Word généré avec succès");
                break;
        }
        setDropdownOpen(false);
    };


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


    const SearchByTowDate = () => {
        const table = tableRef.current;
        const tableRows = table.querySelectorAll('tbody tr');
        const startDateInput = new Date(startDateRef.current.value);
        const endDateInput = new Date(endDateRef.current.value);

        tableRows.forEach((row, i) => {
            // On récupère la date à comparer dans la colonne spécifique (par exemple la 8ème colonne).
            let tableDateText = row.querySelectorAll('td')[5].textContent; // Suppose que la date est dans la 8ème colonne (index 7)
            let tableDate = new Date(tableDateText);

            // Vérifie si la date est entre les deux dates sélectionnées
            let isInDateRange = tableDate >= startDateInput && tableDate <= endDateInput;

            // Masque ou affiche la ligne en fonction de la condition
            row.classList.toggle('hide', !isInDateRange);
            row.style.setProperty('--delay', i / 25 + 's');
        });

        // Applique les animations aux lignes visibles
        document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
            visible_row.style.backgroundColor = (i % 2 === 0) ? '--second-bg' : '--second-bg';
            visible_row.style.animationDelay = `${i * 0.1}s`;
        });
    };

    const handleSearch = () => {
        const startDateInput = startDateRef.current.value;
        const endDateInput = endDateRef.current.value;

        console.log('Date de début:', startDateInput);
        console.log('Date de fin:', endDateInput);

        // Appel de la fonction de recherche entre deux dates
        SearchByTowDate();
    };

    const startDateRef = useRef(null);
    const endDateRef = useRef(null);


    useEffect(() => {
        // if (folders && folders.data) {
        //     folders.data.forEach((folder) => console.log('Folder data:', folder));
        // }
        // folders?.data?.forEach((folder) => console.log('Folder data:', folder));
    }, [folders])


    useEffect(() => {
        console.log("Valeur de recherche :", searchValue);
    }, [searchValue]);



    useEffect(() => {
        const searchInput = searchRef.current;
        const table = tableRef.current;

        if (!table) {
            console.error('Table reference is null.');
            return;
        }

        const tableRows = table.querySelectorAll('tbody tr');

        const searchTable = () => {
            const search_data = searchValue.trim().toLowerCase();

            // Si le champ de recherche est vide, afficher toutes les lignes
            if (search_data === "") {
                tableRows.forEach((row, i) => {
                    row.classList.remove('hide');
                    row.style.setProperty('--delay', i / 25 + 's');
                });
                return; // Sortir de la fonction car aucun filtrage n'est nécessaire
            }

            tableRows.forEach((row, i) => {
                let table_data = '';

                if (searchType === 'nom') {
                    table_data = row.querySelectorAll('td')[1]?.textContent.toLowerCase();
                } else if (searchType === 'numero') {
                    table_data = row.querySelectorAll('td')[4]?.textContent.toLowerCase();
                } else if (searchType === 'matricule') {
                    table_data = row.querySelectorAll('td')[3]?.textContent.toLowerCase();
                } 
                // else if (searchType === 'date') {
                //     table_data = row.querySelectorAll('td')[5]?.textContent;
                //     if (search_data) {
                //         table_data = new Date(table_data).toLocaleDateString();
                //     }
                // } 

                // Masquer la ligne si elle ne correspond pas à la recherche
                if (table_data && search_data) {
                    row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
                    row.style.setProperty('--delay', i / 25 + 's');
                }
            });

            // Appliquer des styles aux lignes visibles
            document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
                visible_row.style.backgroundColor = (i % 2 === 0) ? '--second-bg' : '--second-bg';
                visible_row.style.animationDelay = `${i * 0.1}s`;
            });
        };

        searchTable();
    }, [searchType, searchValue]);



    return (
        <div className='container__table'>
            <main className="table" id="archive_table">
                <div ref={contentRef} className="content-to-print">
                    <div className="hidden-contents">
                        <ContentToPrintArchive archives={archives} />
                    </div>
                </div>
                <section className="table__header">
                    <select className='searchByeverything' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                        <option value="nom">Search by Nom</option>
                        <option value="numero">Search by Numero</option>
                        <option value="matricule">Search by Matricule</option>
                        <option value="date">Search by Date</option>
                    </select>
                    {searchType === 'date' ? (
                        <div className='container__search'>
                            <div className='contents__search'>
                                <input
                                    type="date"
                                    ref={startDateRef}
                                    onChange={(e) => setStartDateValue(e.target.value)}
                                    placeholder="Start Date..."
                                />
                            </div>
                            <div className='contents__search'>
                                <input
                                    type="date"
                                    ref={endDateRef}
                                    onChange={(e) => setEndDateValue(e.target.value)}
                                    placeholder="End Date..."
                                />
                            </div>
                            <div className='search__btn'>
                                <FaSearch className='search__icon' onClick={handleSearch} />
                            </div>
                        </div>
                    ) : (
                        <div className="input-group">
                            <input
                                type="search"
                                placeholder="Search Data..."
                                ref={searchRef}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />


                            <img src={search} alt="Search Icon" />
                        </div>
                    )}
                    <div className='option_right'>
                        <MdAdd onClick={() => handleOpenModal(null, 'add')} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
                        <div className="dropdown-container">
                            <div onClick={toggleDropdown} className='background_download'>
                                <FaArrowDown className="icon_download" style={{ marginLeft: '0px', fontSize: '20px' }} />
                            </div>
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    <button onClick={() => handleOptionClick('option1')} className="dropdown-item"><img src={pdf} alt="Search Icon" />PDF</button>
                                    <button onClick={() => handleOptionClick('option2')} className="dropdown-item"><img src={word} alt="Search Icon" />DOCX</button>
                                    <button onClick={() => handleOptionClick('option3')} className="dropdown-item"><img src={excel} alt="Search Icon" />EXCEL</button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="table__body">
                    <table className='table' ref={tableRef}>
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
                            {/* {displayData()} */}
                            {archives && archives.length > 0 ? (
                                archives.map((archive) => (
                                    <tr key={archive._id}>
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
                            onSuccess={refetch} // On passe refetch ici
                        />
                    )}
                </AnimatePresence>
                <AlertDialogArchiveSlide open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} onSuccess={refetch} />
                <ArchiveDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
            </main>
        </div>
    );
};

export default TableArchive;

