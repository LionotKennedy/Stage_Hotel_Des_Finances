import React, { useEffect, useRef, useState } from 'react';
import "./tableResponsive.scss"
import search from "../../assets/image/search.png"
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';
import { useGetVisa } from '../../services/serviceVisa';
import AlertDialogSlideVisa from '../MUI_alert/deleteVisa';
import CustomizedVisaDialogs from '../MUI_read/readVisa';
import VisaModal from '../MUI/VisaModal';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import * as XLSX from 'xlsx';
import { FaArrowDown } from 'react-icons/fa';
import imageData from "../../assets/images/logo.png";
import imageLogo from "../../assets/images/ministere.png";
import pdf from "../../assets/image/pdf.png";
import excel from "../../assets/image/excel.png";
import word from "../../assets/image/json.png";
import ContentToPrintVisa from '../printer/ContentToPrintVisa';
import ReactPaginate from 'react-paginate';  // Import ReactPaginate

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
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const contentRef = useRef();

    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 10;

    // Calculate the number of total pages
    const totalPages = folders ? Math.ceil(folders.data.length / rowsPerPage) : 1;

    // Handle page click for pagination
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber - 1);
    };


    
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
            html: "#table_visa",
            startY: centeredY + imageWidth + topMargin * 2, // Démarrer la table après l'image centrée avec un décalage total de 4 lignes
        });
    
        doc.save("visa.pdf");
    };


    const exportExcel = () => {
        // const table = document.getElementById('my-table');
        const table = document.getElementById('table_visa');
        const wb = XLSX.utils.table_to_book(table);
        XLSX.writeFile(wb, 'visa.xlsx');
    };


    const exportWord = () => {
        const doc = new jsPDF();
        doc.autoTable({
            html: "#table_visa",
            styles: { cellPadding: 6 }
        });
        doc.save('visa.docx');
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

    // Pagination logic
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };


        // Count total items
        const totalItems = folders && Array.isArray(folders.data) ? folders.data.length : 0;

        const displayTotalItems = () => {
            if (totalItems > 0) {
                return (
                    <p>Total des items : {totalItems}</p>
                );
            }
            return null;
        };

        

    // Display data according to the current page
    const displayData = () => {
        if (!folders || !folders.data) return null;

        const startIndex = currentPage * rowsPerPage;
        const selectedFolders = folders.data.slice(startIndex, startIndex + rowsPerPage);

        return selectedFolders.map((folder, index) => (
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
                <div ref={contentRef} className="content-to-print">
                    <div className="hidden-contents">
                        <ContentToPrintVisa folders={folders?.data} />
                    </div>
                </div>
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

                {/* Pagination controls */}
                <ReactPaginate
                    previousLabel={'Précédent'}
                    nextLabel={'Suivant'}
                    pageCount={totalPages}
                    onPageChange={({ selected }) => paginate(selected + 1)}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
                {/* Affichage du nombre total d'items */}
                {displayTotalItems()}
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





































// const exportPdf = async () => {
//     const doc = new jsPDF({ orientation: "landscape" });
//     // doc.addImage(imageData, 'JPEG', 10, 10, 50, 50); // x, y, largeur, hauteur
//     doc.addImage(imageData, 'JPEG', 10, 10, 30, 30); // x, y, largeur, hauteur (30, 30 pour une image plus petite)
//     doc.autoTable({
//         html: "#table_visa",
//         startY: 50, // Démarrer la table après l'image
//     });
//     doc.save("mypdf.pdf");
// };




















// const displayData = () => {
//     if (!folders || !folders.data) return null;

//     return folders.data.map((folder, index) => (
//         <tr key={index}>
//             <td className="td">{folder.numero_visa}</td>
//             <td className="td">{folder.nom_depose_visa}</td>
//             <td className="td">{folder.prenom_depose_visa}</td>
//             <td className="td">{folder.reference}</td>
//             <td className="td">
//                 <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
//                 <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
//                 <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
//             </td>
//         </tr>
//     ));
// };








// const displayData = () => {
//     if (!folders || !folders.data) return null;

//     const startIndex = (currentPage - 1) * rowsPerPage;
//     const selectedFolders = folders.data.slice(startIndex, startIndex + rowsPerPage);

//     return selectedFolders.map((folder, index) => (
//         <tr key={index}>
//             <td className="td">{folder.numero_visa}</td>
//             <td className="td">{folder.nom_depose_visa}</td>
//             <td className="td">{folder.prenom_depose_visa}</td>
//             <td className="td">{folder.reference}</td>
//             <td className="td">
//                 <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
//                 <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
//                 <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
//             </td>
//         </tr>
//     ));
// };













{/* Pagination controls */ }
{/* <div className="pagination">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                </div> */}
