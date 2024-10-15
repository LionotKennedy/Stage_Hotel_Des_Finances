
import React, { useEffect, useRef, useState } from 'react'; 
import search from "../../assets/image/search.png";
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
import { FaArrowDown, FaSearch } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { useGetFolders } from '../../services/serviceFolder';
import AlertDialogSlide from '../MUI_alert/deleteFolder';
import CustomizedDialogs from '../MUI_read/readFolder';
import "./tableResponsive.scss";
import CustomModal from '../MUI/CustomModal';
import ContentToPrint from '../printer/ContentToPrint';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import * as XLSX from 'xlsx';
import imageData from "../../assets/images/logo.png";
import imageLogo from "../../assets/images/ministere.png";
import imageLogo2 from "../../assets/images/image3.png";
import pdf from "../../assets/image/pdf.png";
import excel from "../../assets/image/excel.png";
import word from "../../assets/image/docx2.png";
import ReactPaginate from 'react-paginate';
import { useSnackbar } from 'notistack';
// import { AiOutlineClose } from 'react-icons/ai';

const TableResponsive = () => {
    const tableRef = useRef(null);
    const searchRef = useRef(null);
    const [searchType, setSearchType] = useState('numero');
    const [searchValue, setSearchValue] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFolderId, setSelectedFolderId] = useState(null);
    const [alertOpen, setAlertOpen] = useState(false);
    const [deleteFolderId, setDeleteFolderId] = useState(null);
    const [alertOpenRead, setAlertOpenRead] = useState(false);
    const [readFolderId, setReadFolderId] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const { data: folders, refetch, isLoading, isError } = useGetFolders();
    const [mode, setMode] = useState('add');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const contentRef = useRef();
        // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [foldersPerPage] = useState(15); // Nombre d'éléments par page
        // Changer de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const [startDateValue, setStartDateValue] = useState('');
    const [endDateValue, setEndDateValue] = useState('');
    const { enqueueSnackbar } = useSnackbar();


    const totalPages = folders && Array.isArray(folders.data) ? Math.ceil(folders.data.length / foldersPerPage) : 1;

    // Dossiers pour la page actuelle
    const currentFolders = folders && Array.isArray(folders.data)
        ? folders.data.slice((currentPage - 1) * foldersPerPage, currentPage * foldersPerPage)
        : [];

    
    const exportPdf = async () => {
        const doc = new jsPDF({ orientation: "landscape" });
    
        // Variables pour centrer et ajuster la position des images
        const pageWidth = doc.internal.pageSize.getWidth();
        const imageWidth = 30; // Largeur de l'image principale (imageLogo)
        const imageWidth2 = 45; // Largeur de la deuxième image (imageLogo2)
        const imageDataWidth = 18; // Largeur de l'imageData
        const topMargin = 5; // Marges supérieures pour le décalage (réduite pour remonter l'imageLogo)
  
    
        // Centrer uniquement imageLogo
        const centeredX1 = (pageWidth - imageWidth) / 2; // Centrer imageLogo
        const centeredY1 = topMargin; // Réduire topMargin pour placer imageLogo plus haut
    
        // Ajout de l'image centrée (imageLogo)
        doc.addImage(imageLogo, 'JPEG', centeredX1, centeredY1, imageWidth, imageWidth);
    
        // Positionner imageLogo2 à gauche (X = 10)
        const leftX = 10; // Positionnement à gauche pour imageLogo2
        const imageLogo2Y = centeredY1 + imageWidth + 25; // Position Y pour imageLogo2, sous imageLogo
        doc.addImage(imageLogo2, 'JPEG', leftX, imageLogo2Y, imageWidth2, imageWidth2); // Image à gauche (imageLogo2)
    
        // Centrer imageData par rapport à imageLogo2
        const centeredXImageData = leftX + (imageWidth2 - imageDataWidth) / 2; // Centrer imageData par rapport à imageLogo2
        const imageDataY = imageLogo2Y - imageDataWidth - 2; // Positionner imageData juste au-dessus de imageLogo2
    
        doc.addImage(imageData, 'JPEG', centeredXImageData, imageDataY, imageDataWidth, imageDataWidth); // Image centrée par rapport à imageLogo2
    
        // Démarrer la table après les images, avec un espace suffisant
        doc.autoTable({
            html: "#teste",
            startY: imageLogo2Y + imageWidth2 + 20, // Démarrer la table après imageLogo2 avec un décalage
            headStyles: {
                fillColor: [109, 109, 109],
                textColor: [255, 255, 255],
            },
            styles: {
                cellPadding: 4,
                fontSize: 10,
            }
        });
    
        // Sauvegarder le fichier PDF
        doc.save("corrier.pdf");
    };


    const exportExcel = () => {
        // const table = document.getElementById('my-table');
        const table = document.getElementById('teste');

        const wb = XLSX.utils.table_to_book(table);

        XLSX.writeFile(wb, 'courrier.xlsx');
    };


    const exportWord = () => {
        const doc = new jsPDF();

        doc.autoTable({
            html: "#teste",
            styles: { cellPadding: 6 }
        });

        doc.save('courrier.docx');
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
        // console.log(folderId);
    };

    const handleReadClick = (folderId) => {
        setReadFolderId(folderId);
        setAlertOpenRead(true);
        // console.log(folderId);
    };

    useEffect(() => {
        refetch();
    }, [refetch]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        // console.log('Dropdown toggled!');
    };

    const handleOptionClick = async (option) => {
        setSelectedOption(option);
        // console.log(`Option selected: ${option}`);

        switch (option) {
            case 'option1':
                await exportPdf();
                // console.log("PDF généré avec succès");
                enqueueSnackbar('PDF généré avec succès.', { variant: 'success' });
                break;
                case 'option2':
                    await exportWord();
                    // console.log("Fichier Word généré avec succès");
                    enqueueSnackbar('Fichier Word généré avec succès.', { variant: 'success' });
                    break;
                    case 'option3':
                        await exportExcel();
                        // console.log("Fichier Word généré avec succès");
                        enqueueSnackbar('Fichier excel généré avec succès.', { variant: 'success' });
                break;
        }

        setDropdownOpen(false);
    };

    useEffect(() => {
        const searchInput = searchRef.current;
        const table = tableRef.current;
        const tableRows = table.querySelectorAll('tbody tr');

        const searchTable = () => {
            tableRows.forEach((row, i) => {
                let search_data = searchValue.toLowerCase();
                let table_data = '';
                
                if (searchType === 'numero') {
                    table_data = row.querySelectorAll('td')[0].textContent.toLowerCase();
                } else if (searchType === 'nom') {
                    table_data = row.querySelectorAll('td')[4].textContent.toLowerCase();
                } else if (searchType === 'matricule') {
                    table_data = row.querySelectorAll('td')[6].textContent.toLowerCase();
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
        if (isLoading) {
            return (
                <tr>
                    <td colSpan="9">Chargement...</td>
                </tr>
            );
        }

        if (isError) {
            return (
                <tr>
                    <td colSpan="9">Une erreur s'est produite.</td>
                </tr>
            );
        }

        // Si les dossiers ne sont pas un tableau ou s'ils sont vides
        if (!folders || !Array.isArray(folders.data) || folders.data.length === 0) {
            return (
                <tr>
                    <td colSpan="9">Aucune donnée disponible</td>
                </tr>
            );
        }

        return currentFolders.map((folder, index) => (
            <tr key={index}>
                <td className="td">{folder.numero_bordereaux}</td>
                <td className="td">{new Date(folder.date_depart).toLocaleDateString()}</td>
                <td className="td">{folder.expiditeur}</td>
                <td className="td">{folder.destination}</td>
                <td className="td">{folder.id_nature.nom_depose}</td>
                <td className="td">{folder.id_nature.prenom_depose}</td>
                <td className="td">{folder.id_nature.matricule}</td>
                <td className="td">{folder.id_nature.description}</td>
                <td className="td">
                    <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
                    <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
                    <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
                </td>
            </tr>
        ));
    };

    const SearchByTowDate = () => {
        const table = tableRef.current;
        const tableRows = table.querySelectorAll('tbody tr');
        const startDateInput = new Date(startDateRef.current.value);
        const endDateInput = new Date(endDateRef.current.value);

        // Vérification des dates
        if (isNaN(startDateInput.getTime()) || isNaN(endDateInput.getTime())) {
            enqueueSnackbar('Les dates entrées sont invalides.', { variant: 'error' });
            return;
        }

        // Vérification que la date de début n'est pas après la date de fin
        if (startDateInput > endDateInput) {
            enqueueSnackbar('La date de début ne peut pas être postérieure à la date de fin.', { variant: 'error' });
            return;
        }

        tableRows.forEach((row, i) => {
            // On récupère la date à comparer dans la colonne spécifique (par exemple la 8ème colonne).
            let tableDateText = row.querySelectorAll('td')[1].textContent; // Suppose que la date est dans la 8ème colonne (index 7)
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

    const totalItems = folders && Array.isArray(folders.data) ? folders.data.length : 0;

    const displayTotalItems = () => {
        if (totalItems > 0) {
          return (
            <div className='total__courrier'>
                <span>Total des courriers : {totalItems}</span>
            </div>
          );
        }
        return null;
      };
      


    return (
        <div className='container__table'>
            <main className="table" ref={tableRef} id="customers_table">

                <div ref={contentRef} className="content-to-print">
                    <div className="hidden-contents">
                        <ContentToPrint folders={folders?.data} />
                    </div>
                </div>

                <section className="table__header">
                    <select className='searchByeverything' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                        <option value="numero">Recherche par Numero</option>
                        <option value="nom">Recherche par Nom</option>
                        <option value="matricule">Recherche par Matricule</option>
                        <option value="date">Recherche par Date</option>
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
                                {/* <button onClick={handleSearch}></button> */}
                                <FaSearch className='search__icon' onClick={handleSearch} />
                          </div>
                    </div>
                    ) : (
                        <div className="input-group">
                            <input
                                type="search"
                                placeholder="Recherche donnée..."
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
                    <table className='table' id="my-table">
                        <thead className='thead'>
                            <tr>
                                <th className='th'>Numero Bordereaux </th>
                                <th className='th'>Date Départ </th>
                                <th className='th'>Expediteur </th>
                                <th className='th'>Destination </th>
                                <th className='th'>Nom </th>
                                <th className='th'>Prénom </th>
                                <th className='th'>Matricule </th>
                                <th className='th'>Description </th>
                                <th className='th'>Actions </th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
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
                    {displayTotalItems()}
                <AnimatePresence>
                    {modalOpen && (
                        <CustomModal
                            open={modalOpen}
                            handleClose={handleCloseModal}
                            folderId={selectedFolderId} 
                            mode={mode} 
                            onSuccess={refetch} 
                        />
                    )}
                </AnimatePresence>
                {/* Inclusion du modal d'alerte */}
                <AlertDialogSlide open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} onSuccess={refetch} />
                <CustomizedDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
            </main>
        </div>
    );
}

export default TableResponsive;
































































// const exportPdff = async () => {
//     const doc = new jsPDF({ orientation: "landscape" });

//     // Ajoutez une image centrée en haut avec un décalage de 2 lignes
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const imageWidth = 40; // Largeur de l'image
//     const centeredX = (pageWidth - imageWidth) / 2; // Calculer le positionnement centré
//     const topMargin = 20; // Marges supérieures et inférieures pour le décalage
//     const centeredY = topMargin; // Position Y de l'image centrée
    
//     doc.addImage(imageLogo, 'JPEG', centeredX, centeredY, imageWidth, imageWidth); // Image centrée en haut
    
//     // Ajoutez l'image à gauche
//     doc.addImage(imageData, 'JPEG', 10, 65, 23, 23); // Image à gauche

//     // Démarrer la table après les images, avec un espace suffisant
//     doc.autoTable({
//         html: "#teste",
//         startY: centeredY + imageWidth + topMargin * 2, // Démarrer la table après l'image centrée avec un décalage total de 4 lignes
//         headStyles: {
//             // fillColor: [255, 0, 0], // Couleur de fond de l'en-tête (rouge dans cet exemple)
//             fillColor: [109, 109, 109], // Couleur de fond de l'en-tête (rouge dans cet exemple)
//             textColor: [255, 255, 255],

//         },
//         styles: {
//             cellPadding: 4,
//             fontSize: 10,
//             // Ajoutez d'autres styles globaux si nécessaire
//         }
//     });

//     doc.save("corrier.pdf");
// };





// const exportPdfs = async () => {
//     const doc = new jsPDF({ orientation: "landscape" });

//     // Variables pour les dimensions des images
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const imageWidthLogo = 40; // Largeur de imageLogo
//     const imageWidthLogo2 = 60; // Largeur de imageLogo2
//     const topMargin = 20; // Marge en haut pour les images
//     const spaceBetweenImages = 10; // Espace entre les deux images

//     // Calcul de la position centrée pour imageLogo2
//     const centeredXLogo2 = (pageWidth - imageWidthLogo2) / 2;
//     const centeredYLogo2 = topMargin;

//     // Ajout de l'image imageLogo2 centrée
//     doc.addImage(imageLogo2, 'JPEG', centeredXLogo2, centeredYLogo2, imageWidthLogo2, imageWidthLogo2);

//     // Calcul de la position centrée pour imageLogo par rapport à imageLogo2
//     const centeredXLogo = (centeredXLogo2 + (imageWidthLogo2 - imageWidthLogo) / 2);
//     const centeredYLogo = centeredYLogo2 + imageWidthLogo2 + spaceBetweenImages;

//     // Ajout de l'image imageLogo (centrée par rapport à imageLogo2)
//     doc.addImage(imageLogo, 'JPEG', centeredXLogo, centeredYLogo, imageWidthLogo, imageWidthLogo);

//     // Ajoutez l'image sur la gauche (imageData) si nécessaire
//     doc.addImage(imageData, 'JPEG', 10, centeredYLogo + imageWidthLogo + 10, 23, 23); // Image à gauche

//     // Ajoutez la table après les images, avec un espace suffisant
//     doc.autoTable({
//         html: "#teste",
//         startY: centeredYLogo + imageWidthLogo + topMargin, // Démarrer la table après imageLogo
//         headStyles: {
//             fillColor: [109, 109, 109],
//             textColor: [255, 255, 255],
//         },
//         styles: {
//             cellPadding: 4,
//             fontSize: 10,
//         }
//     });

//     doc.save("corrier.pdf");
// };



// const exportPdfx = async () => {
//     const doc = new jsPDF({ orientation: "landscape" });

//     // Ajoutez une image centrée en haut avec un décalage de 2 lignes
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const imageWidth = 40; // Largeur de l'image principale
//     const imageWidth2 = 50; // Largeur de la deuxième image
//     const topMargin = 20; // Marges supérieures et inférieures pour le décalage

//     // Positionnement centré pour la première image (imageLogo)
//     const centeredX1 = (pageWidth - imageWidth) / 2; // Calculer le positionnement centré pour imageLogo
//     const centeredY1 = topMargin; // Position Y de imageLogo

//     // Ajout de la première image (imageLogo)
//     doc.addImage(imageLogo, 'JPEG', centeredX1, centeredY1, imageWidth, imageWidth); // Image centrée en haut

//     // Positionnement centré pour la deuxième image (imageLogo2) juste en dessous de imageLogo
//     const centeredX2 = (pageWidth - imageWidth2) / 2; // Calculer le positionnement centré pour imageLogo2
//     const centeredY2 = centeredY1 + imageWidth + 10; // Position Y de imageLogo2, avec un décalage de 10px sous imageLogo

//     // Ajoutez l'image à gauche (imageData) centrée par rapport à imageLogo2
//     const centeredXImageData = (pageWidth - 23) / 2; // Calculer le positionnement centré pour imageData
//     const centeredYImageData = centeredY2 + imageWidth2 + 10; // Position Y de imageData, sous imageLogo2
    
//     doc.addImage(imageData, 'JPEG', centeredXImageData, centeredYImageData, 23, 23); // Image centrée sous imageLogo2
    
//     // Ajout de la deuxième image (imageLogo2)
//     doc.addImage(imageLogo2, 'JPEG', centeredX2, centeredY2, imageWidth2, imageWidth2); // Image sous la première image

//     // Démarrer la table après les images, avec un espace suffisant
//     doc.autoTable({
//         html: "#teste",
//         startY: centeredYImageData + 23 + 20, // Démarrer la table après imageData avec un décalage
//         headStyles: {
//             fillColor: [109, 109, 109], // Couleur de fond de l'en-tête
//             textColor: [255, 255, 255],
//         },
//         styles: {
//             cellPadding: 4,
//             fontSize: 10,
//         }
//     });

//     doc.save("corrier.pdf");
// };



// const exportPdfa = async () => {
//     const doc = new jsPDF({ orientation: "landscape" });

//     // Ajoutez l'image à gauche
//     doc.addImage(imageData, 'JPEG', 10, 65, 23, 23);

//     // Ajoutez l'image Logo2 au-dessus de l'image Data
//     const logo2Height = 50;
//     const dataHeight = 23;
//     const totalHeight = logo2Height + dataHeight;
//     const yPosition = 65 + totalHeight;

//     doc.addImage(imageLogo2, 'JPEG', 10, yPosition, 23, logo2Height);
//     doc.addImage(imageData, 'JPEG', 10, yPosition + logo2Height, 23, dataHeight);

//     // Démarrer la table après les images, avec un espace suffisant
//     doc.autoTable({
//         html: "#teste",
//         startY: yPosition + logo2Height + dataHeight + 10, // Démarrer la table après les images avec un décalage total de 8 lignes
//         headStyles: {
//             fillColor: [109, 109, 109],
//             textColor: [255, 255, 255],
//         },
//         styles: {
//             cellPadding: 4,
//             fontSize: 10,
//         }
//     });

//     doc.save("corrier.pdf");
// };



// const exportPdfq = async () => {
//     const doc = new jsPDF({ orientation: "landscape" });

//     // Variables pour centrer et ajuster la position des images
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const imageWidth = 40; // Largeur de l'image principale
//     const imageWidth2 = 50; // Largeur de la deuxième image
//     const topMargin = 20; // Marges supérieures pour le décalage

//     // Centrer uniquement imageLogo
//     const centeredX1 = (pageWidth - imageWidth) / 2; // Centrer imageLogo
//     const centeredY1 = topMargin; // Position Y pour imageLogo

//     // Ajout de l'image centrée (imageLogo)
//     doc.addImage(imageLogo, 'JPEG', centeredX1, centeredY1, imageWidth, imageWidth);

//     // Positionner imageData à gauche (par exemple, X = 10) et au-dessus de imageLogo2
//     const leftX = 10; // Positionnement à gauche pour imageData et imageLogo2
//     const imageDataY = centeredY1 + imageWidth + 10; // ImageData au-dessus de imageLogo2
//     doc.addImage(imageData, 'JPEG', leftX, imageDataY, 23, 23); // Image à gauche au-dessus

//     // Positionner imageLogo2 en dessous de imageData
//     const imageLogo2Y = imageDataY + 23 + 10; // Position Y pour imageLogo2 en dessous de imageData
//     doc.addImage(imageLogo2, 'JPEG', leftX, imageLogo2Y, imageWidth2, imageWidth2); // Image en dessous de imageData

//     // Démarrer la table après les images, avec un espace suffisant
//     doc.autoTable({
//         html: "#teste",
//         startY: imageLogo2Y + imageWidth2 + 20, // Démarrer la table après imageLogo2 avec un décalage
//         headStyles: {
//             fillColor: [109, 109, 109],
//             textColor: [255, 255, 255],
//         },
//         styles: {
//             cellPadding: 4,
//             fontSize: 10,
//         }
//     });

//     // Sauvegarder le fichier PDF
//     doc.save("corrier.pdf");
// };



// const exportPdfe = async () => {
//     const doc = new jsPDF({ orientation: "landscape" });

//     // Variables pour centrer et ajuster la position des images
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const imageWidth = 40; // Largeur de l'image principale (imageLogo)
//     const imageWidth2 = 50; // Largeur de la deuxième image (imageLogo2)
//     const imageDataWidth = 23; // Largeur de l'imageData
//     const topMargin = 20; // Marges supérieures pour le décalage

//     // Centrer uniquement imageLogo
//     const centeredX1 = (pageWidth - imageWidth) / 2; // Centrer imageLogo
//     const centeredY1 = topMargin; // Position Y pour imageLogo

//     // Ajout de l'image centrée (imageLogo)
//     doc.addImage(imageLogo, 'JPEG', centeredX1, centeredY1, imageWidth, imageWidth);

//     // Positionner imageLogo2 à gauche (X = 10)
//     const leftX = 10; // Positionnement à gauche pour imageLogo2
//     const imageLogo2Y = centeredY1 + imageWidth + 10; // Position Y pour imageLogo2, sous imageLogo
//     doc.addImage(imageLogo2, 'JPEG', leftX, imageLogo2Y, imageWidth2, imageWidth2); // Image à gauche (imageLogo2)

//     // Centrer imageData par rapport à imageLogo2
//     const centeredXImageData = leftX + (imageWidth2 - imageDataWidth) / 2; // Centrer imageData par rapport à imageLogo2
//     const imageDataY = imageLogo2Y - imageDataWidth - 10; // Positionner imageData juste au-dessus de imageLogo2

//     doc.addImage(imageData, 'JPEG', centeredXImageData, imageDataY, imageDataWidth, imageDataWidth); // Image centrée par rapport à imageLogo2

//     // Démarrer la table après les images, avec un espace suffisant
//     doc.autoTable({
//         html: "#teste",
//         startY: imageLogo2Y + imageWidth2 + 20, // Démarrer la table après imageLogo2 avec un décalage
//         headStyles: {
//             fillColor: [109, 109, 109],
//             textColor: [255, 255, 255],
//         },
//         styles: {
//             cellPadding: 4,
//             fontSize: 10,
//         }
//     });

//     // Sauvegarder le fichier PDF
//     doc.save("corrier.pdf");
// };





























































// const exportPdfsd = async () => {
//     const doc = new jsPDF({ orientation: "landscape" });

//     // Variables pour centrer et ajuster la position des images
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const imageWidth = 40; // Largeur de l'image principale (imageLogo)
//     const imageWidth2 = 50; // Largeur de la deuxième image (imageLogo2)
//     const imageDataWidth = 23; // Largeur de l'imageData
//     const topMargin = 5; // Marges supérieures pour le décalage (réduite pour remonter l'imageLogo)
//     const bottomMargin = 15; // Marges inférieures pour espacer les images à gauche

//     // Centrer uniquement imageLogo
//     const centeredX1 = (pageWidth - imageWidth) / 2; // Centrer imageLogo
//     const centeredY1 = topMargin; // Réduire topMargin pour placer imageLogo plus haut

//     // Ajout de l'image centrée (imageLogo)
//     doc.addImage(imageLogo, 'JPEG', centeredX1, centeredY1, imageWidth, imageWidth);

//     // Positionner imageLogo2 à gauche (X = 10)
//     const leftX = 10; // Positionnement à gauche pour imageLogo2
//     const imageLogo2Y = centeredY1 + imageWidth + bottomMargin; // Position Y pour imageLogo2, sous imageLogo avec un margin-bottom
//     doc.addImage(imageLogo2, 'JPEG', leftX, imageLogo2Y, imageWidth2, imageWidth2); // Image à gauche (imageLogo2)

//     // Centrer imageData par rapport à imageLogo2
//     const centeredXImageData = leftX + (imageWidth2 - imageDataWidth) / 2; // Centrer imageData par rapport à imageLogo2
//     const imageDataY = imageLogo2Y + imageWidth2 + bottomMargin; // Positionner imageData sous imageLogo2 avec un margin-bottom

//     doc.addImage(imageData, 'JPEG', centeredXImageData, imageDataY, imageDataWidth, imageDataWidth); // Image centrée par rapport à imageLogo2

//     // Démarrer la table après les images, avec un espace suffisant
//     doc.autoTable({
//         html: "#teste",
//         startY: imageDataY + imageDataWidth + 20, // Démarrer la table après imageData avec un décalage
//         headStyles: {
//             fillColor: [109, 109, 109],
//             textColor: [255, 255, 255],
//         },
//         styles: {
//             cellPadding: 4,
//             fontSize: 10,
//         }
//     });

//     // Sauvegarder le fichier PDF
//     doc.save("corrier.pdf");
// };



// const exportPdsf = async () => {
//     const doc = new jsPDF({ orientation: "landscape" });

//     // Variables pour centrer et ajuster la position des images
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const imageWidth = 40; // Largeur de l'image principale (imageLogo)
//     const imageWidth2 = 30; // Largeur réduite de la deuxième image (imageLogo2)
//     const imageHeight2 = 30; // Hauteur réduite de imageLogo2
//     const imageDataWidth = 23; // Largeur de l'imageData
//     const topMargin = 10; // Marges supérieures pour le décalage

//     // Centrer uniquement imageLogo
//     const centeredX1 = (pageWidth - imageWidth) / 2; // Centrer imageLogo
//     const centeredY1 = topMargin; // Réduire topMargin pour placer imageLogo plus haut

//     // Ajout de l'image centrée (imageLogo)
//     doc.addImage(imageLogo, 'JPEG', centeredX1, centeredY1, imageWidth, imageWidth);

//     // Positionner imageLogo2 à gauche (X = 10) avec une taille réduite
//     const leftX = 10; // Positionnement à gauche pour imageLogo2
//     const imageLogo2Y = centeredY1 + imageWidth + 10; // Position Y pour imageLogo2, sous imageLogo
//     doc.addImage(imageLogo2, 'JPEG', leftX, imageLogo2Y, imageWidth2, imageHeight2); // Image à gauche (imageLogo2)

//     // Centrer imageData par rapport à imageLogo2
//     const centeredXImageData = leftX + (imageWidth2 - imageDataWidth) / 2; // Centrer imageData par rapport à imageLogo2
//     const imageDataY = imageLogo2Y + imageHeight2 + 10; // Positionner imageData juste en dessous de imageLogo2

//     doc.addImage(imageData, 'JPEG', centeredXImageData, imageDataY, imageDataWidth, imageDataWidth); // Image centrée par rapport à imageLogo2

//     // Démarrer la table après les images, avec un espace suffisant
//     doc.autoTable({
//         html: "#teste",
//         startY: imageDataY + imageDataWidth + 20, // Démarrer la table après imageData avec un décalage
//         headStyles: {
//             fillColor: [109, 109, 109],
//             textColor: [255, 255, 255],
//         },
//         styles: {
//             cellPadding: 4,
//             fontSize: 10,
//         }
//     });

//     // Sauvegarder le fichier PDF
//     doc.save("corrier.pdf");
// };



































                //  else if (searchType === 'date') {
                //     table_data = row.querySelectorAll('td')[7].textContent;
                //     search_data = new Date(search_data).toLocaleDateString(); // Convertir pour une comparaison de date
                // }





    
// const searchTable = () => {
//     const searchInput = searchRef.current;
//     const table = tableRef.current;
//     const tableRows = table.querySelectorAll('tbody tr');

//     let search_data = '';
//     let startDateInput = '';
//     let endDateInput = '';

//     if (searchType === 'date') {
//         startDateInput = new Date(searchValue).getTime();
//         endDateInput = new Date(endDate).getTime();

//         tableRows.forEach((row, i) => {
//             const folder = folders.data[i];
//             const date = new Date(folder.date_depart);

//             row.classList.toggle('hide',
//                 (date.getTime() < startDateInput || date.getTime() > endDateInput)
//             );
//             row.style.setProperty('--delay', i / 25 + 's');
//         });
//     } else {
//         let table_data = '';

//         switch (searchType) {
//             case 'nom':
//                 table_data = row.querySelectorAll('td')[0].textContent.toLowerCase();
//                 break;
//             case 'numero':
//                 table_data = row.querySelectorAll('td')[6].textContent.toLowerCase();
//                 break;
//             case 'matricule':
//                 table_data = row.querySelectorAll('td')[2].textContent.toLowerCase();
//                 break;
//         }

//         row.classList.toggle('hide', table_data.indexOf(searchValue.toLowerCase()) < 0);
//         row.style.setProperty('--delay', i / 25 + 's');
//     }
// };



















    // const displayData = () => {
    //     // if (!folders || !folders.data) return null;
    //     if (!folders || !Array.isArray(folders.data)) {
    //         return (
    //             <tr>
    //                 <td colSpan="9">Aucune donnée disponible</td>
    //             </tr>
    //         );
    //     }

    //     if (folders.data.length === 0) {
    //         return (
    //             <tr>
    //                 <td colSpan="9">Aucune donnée disponible</td>
    //             </tr>
    //         );
    //     }
    //     return folders.data.map((folder, index) => (
    //         <tr key={index}>
    //             <td className="td">{folder.id_nature.nom_depose}</td>
    //             <td className="td">{folder.id_nature.prenom_depose}</td>
    //             <td className="td">{folder.id_nature.matricule}</td>
    //             <td className="td">{folder.expiditeur}</td>
    //             <td className="td">{folder.destination}</td>
    //             <td className="td">{folder.id_nature.description}</td>
    //             <td className="td">{folder.numero_bordereaux}</td>
    //             <td className="td">{new Date(folder.date_depart).toLocaleDateString()}</td>
    //             <td className="td">
    //                 <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
    //                 <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
    //                 <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
    //             </td>
    //         </tr>
    //     ));
    // };






















    // const handleSearch = () => {
    //     const startDateInput = new Date(startDateRef.current.value);
    //     const endDateInput = new Date(endDateRef.current.value);
    
    //     console.log('Date de début:', startDateInput.toISOString());
    //     console.log('Date de fin:', endDateInput.toISOString());
    
    //     searchTables();
    // };

























    // const exportPdf = async () => {
    //     const doc = new jsPDF({ orientation: "landscape" });

    //     // doc.addImage(imageData, 'JPEG', 10, 10, 50, 50); // x, y, largeur, hauteur
    //     doc.addImage(imageData, 'JPEG', 10, 10, 30, 30); // x, y, largeur, hauteur (30, 30 pour une image plus petite)

    //     doc.autoTable({
    //         html: "#teste",
    //         startY: 50, // Démarrer la table après l'image
    //     });

    //     doc.save("mypdf.pdf");
    // };


    // const exportPdf = async () => {
    //     const doc = new jsPDF({ orientation: "landscape" });
    
    //     // Ajoutez l'image à gauche
    //     doc.addImage(imageData, 'JPEG', 10, 10, 30, 30); // Image à gauche
    
    //     // Ajoutez une image centrée
    //     const pageWidth = doc.internal.pageSize.getWidth();
    //     const imageWidth = 30; // Largeur de l'image
    //     const centeredX = (pageWidth - imageWidth) / 2; // Calculer le positionnement centré
    //     const centeredY = 50; // Position Y après l'image de gauche
    //     doc.addImage(imageData, 'JPEG', centeredX, centeredY, imageWidth, imageWidth); // Image centrée
    
    //     // Démarrer la table après les images, avec une séparation
    //     doc.autoTable({
    //         html: "#teste",
    //         startY: centeredY + 40, // Démarrer la table après l'image centrée avec un décalage de 40
    //     });
    
    //     doc.save("mypdf.pdf");
    // };
    

    // const exportPdf = async () => {
    //     const doc = new jsPDF({ orientation: "landscape" });
    
    //     // Ajoutez l'image à gauche
    //     doc.addImage(imageData, 'JPEG', 10, 10, 30, 30); // Image à gauche
    
    //     // Ajoutez une image centrée
    //     const pageWidth = doc.internal.pageSize.getWidth();
    //     const imageWidth = 30; // Largeur de l'image
    //     const centeredX = (pageWidth - imageWidth) / 2; // Calculer le positionnement centré
    
    //     // Position Y de l'image centrée, alignée avec l'image de gauche
    //     const leftImageY = 10; // Position Y de l'image à gauche
    //     const centeredY = leftImageY; // Aligné avec l'image à gauche
    
    //     doc.addImage(imageData, 'JPEG', centeredX, centeredY, imageWidth, imageWidth); // Image centrée
    
    //     // Démarrer la table après les images, avec une séparation
    //     doc.autoTable({
    //         html: "#teste",
    //         startY: centeredY + 40, // Démarrer la table après l'image centrée avec un décalage de 40
    //     });
    
    //     doc.save("mypdf.pdf");
    // };


    
    // const exportPdf = async () => {
    //     const doc = new jsPDF({ orientation: "landscape" });
    
    //     // Ajoutez l'image à gauche
    //     doc.addImage(imageData, 'JPEG', 10, 10, 30, 30); // Image à gauche
    
    //     // Ajoutez une image centrée
    //     const pageWidth = doc.internal.pageSize.getWidth();
    //     const imageWidth = 30; // Largeur de l'image
    //     const centeredX = (pageWidth - imageWidth) / 2; // Calculer le positionnement centré
    
    //     // Position Y de l'image centrée, décalée de 2 lignes par rapport à l'image à gauche
    //     const leftImageY = 10; // Position Y de l'image à gauche
    //     const centeredY = leftImageY + 40; // Ajoutez 40 pour un décalage de 2 lignes (ajustez si nécessaire)
    
    //     doc.addImage(imageData, 'JPEG', centeredX, centeredY, imageWidth, imageWidth); // Image centrée
    
    //     // Démarrer la table après les images, avec une séparation
    //     doc.autoTable({
    //         html: "#teste",
    //         startY: centeredY + 40, // Démarrer la table après l'image centrée avec un décalage de 40
    //     });
    
    //     doc.save("mypdf.pdf");
    // };

    



