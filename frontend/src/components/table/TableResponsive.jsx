
// import React, { useEffect, useRef, useState } from 'react';
// import search from "../../assets/image/search.png"
// import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
// import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
// import { AnimatePresence } from 'framer-motion';
// import { useGetFolders } from '../../services/serviceFolder';
// import AlertDialogSlide from '../MUI_alert/deleteFolder';
// import CustomizedDialogs from '../MUI_read/readFolder';
// import "./tableResponsive.scss"
// import CustomModal from '../MUI/CustomModal';

// const TableResponsive = () => {
//     const tableRef = useRef(null);
//     const searchRef = useRef(null);
//     const [searchType, setSearchType] = useState('nom');
//     const [modalOpen, setModalOpen] = useState(false);
//     const [selectedFolderId, setSelectedFolderId] = useState(null);

//     const [alertOpen, setAlertOpen] = useState(false);
//     const [deleteFolderId, setDeleteFolderId] = useState(null);

//     const [alertOpenRead, setAlertOpenRead] = useState(false);
//     const [readFolderId, setReadFolderId] = useState(null);

//     const [folders, isLoading, isError] = useGetFolders();
//     const [mode, setMode] = useState('add');


//     const handleOpenModal = (folderId, mode) => {
//         setSelectedFolderId(folderId);
//         setMode(mode);
//         setModalOpen(true);
//     };

//     const handleCloseModal = () => setModalOpen(false);

//     const handleDeleteClick = (folderId) => {
//         setDeleteFolderId(folderId);
//         setAlertOpen(true);
//         console.log(folderId)
//     };

//     const handleReadClick = (folderId) => {
//         setReadFolderId(folderId);
//         setAlertOpenRead(true);
//         console.log(folderId)
//     };

//     useEffect(() => {
//         if (folders && folders.data) {
//             folders.data.forEach((folder) => console.log('Folder data:', folder));
//         }
//     }, [folders]);

//     const logSearchValue = () => {
//         const searchValue = searchRef.current.value;
//         console.log('Valeur saisie :', searchValue);
//     };

//     useEffect(() => {
//         const searchInput = searchRef.current;
//         const table = tableRef.current;
//         const tableRows = table.querySelectorAll('tbody tr');

//         const searchTable = () => {
//             tableRows.forEach((row, i) => {
//                 let search_data = searchInput.value.toLowerCase();
//                 let table_data = '';

//                 if (searchType === 'nom') {
//                     table_data = row.querySelectorAll('td')[0].textContent.toLowerCase();
//                 } else if (searchType === 'numero') {
//                     table_data = row.querySelectorAll('td')[6].textContent.toLowerCase();
//                 } else if (searchType === 'matricule') {
//                     table_data = row.querySelectorAll('td')[2].textContent.toLowerCase();
//                 } else if (searchType === 'date') {
//                     table_data = row.querySelectorAll('td')[7].textContent.toLowerCase();
//                     console.log(searchType)
//                 }

//                 row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
//                 row.style.setProperty('--delay', i / 25 + 's');
//             });

//             document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
//                 visible_row.style.backgroundColor = (i % 2 === 0) ? '--second-bg' : '--second-bg';
//                 visible_row.style.animationDelay = `${i * 0.1}s`;
//             });
//         };

//         searchInput.addEventListener('input', searchTable);

//         return () => {
//             searchInput.removeEventListener('input', searchTable);
//         };
//     }, [searchType]);

//     useEffect(() => {
//         if (searchType === 'date') {
//             setIsDatePickerVisible(true);
//         } else {
//             setIsDatePickerVisible(false);
//         }
//     }, [searchType]);

//     const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');

//     // const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//         logClick('Menu déroulant ouvert/clos');
//     };

//     return (
//         <div className='container__table'>
//             <main className="table" ref={tableRef} id="customers_table">
//                 <section className="table__header">
//                     <select className='searchByeverything' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
//                         <option value="nom">Search by Nom</option>
//                         <option value="numero">Search by Numero</option>
//                         <option value="matricule">Search by matricule</option>
//                         <option value="date">Search by Date</option>
//                     </select>
//                     {isDatePickerVisible ? (
//                         <div className="input-group">
//                             <input type="date" placeholder="Search Data..." ref={searchRef} />
//                             <img src={search} alt="Search Icon" />
//                         </div>
//                     ) : (
//                         <div className="input-group">
//                             <input type="search" placeholder="Search Data..." ref={searchRef} />
//                             <img src={search} alt="Search Icon" />
//                         </div>
//                     )}
//                     <div className='option_right'>
//                         <MdAdd onClick={() => handleOpenModal(null, 'add')} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
//                         <div className="dropdown-container">
//                             <button className="dropdown-toggle"  onClick={toggleDropdown} >
//                                 <FaArrowDown className="icon_add" style={{ marginLeft: '20px', fontSize: '24px' }} />
//                             </button>
//                             {dropdownOpen && (
//                                 <div className="dropdown-menu">
//                                     <button onClick={() => setSelectedOption('option1')}>Option 1</button>
//                                     <button onClick={() => setSelectedOption('option2')}>Option 2</button>
//                                     <button onClick={() => setSelectedOption('option3')}>Option 3</button>
//                                 </div>
//                             )} 
//                         </div>
//                     </div>
//                 </section>

//                 <section className="table__body">
//                     <table className='table'>
//                         <thead className='thead'>
//                             <tr>
//                                 {/* <th className='th'>ID Courrier </th> */}
//                                 <th className='th'>Nom </th>
//                                 <th className='th'>Prénom </th>
//                                 <th className='th'>Matricule </th>
//                                 <th className='th'>Expediteur </th>
//                                 <th className='th'>Destination </th>
//                                 <th className='th'>Description </th>
//                                 <th className='th'>Numero Bordereaux </th>
//                                 <th className='th'>Date Départ </th>
//                                 <th className='th'>Actions </th>
//                             </tr>
//                         </thead>
//                         <tbody className='tbody'>
//                             {folders && folders.data && folders.data.map((folder, index) => (
//                                 <tr key={index}>
//                                     <td className="td">{folder.id_nature.nom_depose}</td>
//                                     <td className="td">{folder.id_nature.prenom_depose}</td>
//                                     <td className="td">{folder.id_nature.matricule}</td>
//                                     <td className="td">{folder.expiditeur}</td>
//                                     <td className="td">{folder.destination}</td>
//                                     <td className="td">{folder.id_nature.description}</td>
//                                     <td className="td">{folder.numero_bordereaux}</td>
//                                     <td className="td">{new Date(folder.date_depart).toLocaleDateString()}</td>
//                                     <td className="td">
//                                         <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
//                                         <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
//                                         <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </section>
//                 <AnimatePresence>
//                     {modalOpen && (
//                         <CustomModal
//                             open={modalOpen}
//                             handleClose={handleCloseModal}
//                             folderId={selectedFolderId}
//                             mode={mode}
//                             displayData={displayData}
//                         />
//                     )}

//                 </AnimatePresence>
//                 <AlertDialogSlide open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} />
//                 <CustomizedDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
//             </main>
//         </div>
//     );
// }

// export default TableResponsive;







































// import React, { useEffect, useRef, useState } from 'react';
// import search from "../../assets/image/search.png"
// import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
// import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
// import { AnimatePresence } from 'framer-motion';
// import { useGetFolders } from '../../services/serviceFolder'; // Assurez-vous que le chemin est correct
// import AlertDialogSlide from '../MUI_alert/deleteFolder'; // Importer l'alert modal
// import CustomizedDialogs from '../MUI_read/readFolder'; // Importer l'alert modal

// import "./tableResponsive.scss"
// import CustomModal from '../MUI/CustomModal';

// const TableResponsive = () => {
//     const tableRef = useRef(null);
//     const searchRef = useRef(null);
//     const [searchType, setSearchType] = useState('nom');
//     const [modalOpen, setModalOpen] = useState(false);
//     const [selectedFolderId, setSelectedFolderId] = useState(null);
//     const [alertOpen, setAlertOpen] = useState(false);
//     const [deleteFolderId, setDeleteFolderId] = useState(null);
//     const [alertOpenRead, setAlertOpenRead] = useState(false);
//     const [readFolderId, setReadFolderId] = useState(null);
//     const { data: folders, isLoading, isError } = useGetFolders();
//     const [mode, setMode] = useState('add');
//     const [dropdownOpen, setDropdownOpen] = useState(false); // État pour le menu déroulant

//     const handleOpenModal = (folderId, mode) => {
//         setSelectedFolderId(folderId);
//         setMode(mode);
//         setModalOpen(true);
//     };

//     const handleCloseModal = () => setModalOpen(false);

//     const handleDeleteClick = (folderId) => {
//         setDeleteFolderId(folderId);
//         setAlertOpen(true);
//         console.log(folderId);
//     };

//     const handleReadClick = (folderId) => {
//         setReadFolderId(folderId);
//         setAlertOpenRead(true);
//         console.log(folderId);
//     };

//     useEffect(() => {
//         if (folders && folders.data) {
//             folders.data.forEach((folder) => console.log('Folder data:', folder));
//         }
//     }, [folders]);

//     const logSearchValue = () => {
//         const searchValue = searchRef.current.value;
//         console.log('Valeur saisie :', searchValue);
//     };

//     useEffect(() => {
//         const searchInput = searchRef.current;
//         const table = tableRef.current;
//         const tableRows = table.querySelectorAll('tbody tr');

//         const searchTable = () => {
//             tableRows.forEach((row, i) => {
//                 let search_data = searchInput.value.toLowerCase();
//                 let table_data = '';

//                 if (searchType === 'nom') {
//                     table_data = row.querySelectorAll('td')[0].textContent.toLowerCase();
//                 } else if (searchType === 'numero') {
//                     table_data = row.querySelectorAll('td')[6].textContent.toLowerCase();
//                 } else if (searchType === 'matricule') {
//                     table_data = row.querySelectorAll('td')[2].textContent.toLowerCase();
//                 } else if (searchType === 'date') {
//                     table_data = row.querySelectorAll('td')[7].textContent.toLowerCase();
//                 }

//                 row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
//                 row.style.setProperty('--delay', i / 25 + 's');
//             });

//             document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
//                 visible_row.style.backgroundColor = (i % 2 === 0) ? '--second-bg' : '--second-bg';
//                 visible_row.style.animationDelay = `${i * 0.1}s`;
//             });
//         };

//         searchInput.addEventListener('input', searchTable);

//         return () => {
//             searchInput.removeEventListener('input', searchTable);
//         };
//     }, [searchType]);

//     // Gestionnaire d'événement pour ouvrir/fermer le menu déroulant
//     const toggleDropdown = () => {
//         // setDropdownOpen((prev) => !prev);
//         console.log('toggleDropdown');
//     };

//     return (
//         <div className='container__table'>
//             <main className="table" ref={tableRef} id="customers_table">
//                 <section className="table__header">
//                     <select className='searchByeverything' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
//                         <option value="nom">Search by Nom</option>
//                         <option value="numero">Search by Numero</option>
//                         <option value="matricule">Search by matricule</option>
//                         <option value="date">Search by Date</option>
//                     </select>
//                     <div className="input-group">
//                         {searchType === 'date' ? (
//                             <input type="date" placeholder="Search Data..." ref={searchRef} />
//                         ) : (
//                             <>
//                                 <input type="search" placeholder="Search Data..." ref={searchRef} />
//                                 <img src={search} alt="Search Icon" />
//                             </>
//                         )}
//                     </div>
//                     <div className='option_right'>
//                         <MdAdd onClick={() => handleOpenModal(null, 'add')} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
//                         <FaArrowDown onClick={toggleDropdown} className="icon_add" style={{ marginLeft: '20px', fontSize: '24px' }} />
//                         {dropdownOpen && (
//                             <div className="dropdown-menu">
//                                 <ul>
//                                     <li>Option 1</li>
//                                     <li>Option 2</li>
//                                     <li>Option 3</li>
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 </section>

//                 <section className="table__body">
//                     <table className='table'>
//                         <thead className='thead'>
//                             <tr>
//                                 <th className='th'>Nom </th>
//                                 <th className='th'>Prénom </th>
//                                 <th className='th'>Matricule </th>
//                                 <th className='th'>Expediteur </th>
//                                 <th className='th'>Destination </th>
//                                 <th className='th'>Description </th>
//                                 <th className='th'>Numero Bordereaux </th>
//                                 <th className='th'>Date Départ </th>
//                                 <th className='th'>Actions </th>
//                             </tr>
//                         </thead>
//                         <tbody className='tbody'>
//                             {folders && folders.data && folders.data.map((folder, index) => (
//                                 <tr key={index}>
//                                     <td className="td">{folder.id_nature.nom_depose}</td>
//                                     <td className="td">{folder.id_nature.prenom_depose}</td>
//                                     <td className="td">{folder.id_nature.matricule}</td>
//                                     <td className="td">{folder.expiditeur}</td>
//                                     <td className="td">{folder.destination}</td>
//                                     <td className="td">{folder.id_nature.description}</td>
//                                     <td className="td">{folder.numero_bordereaux}</td>
//                                     <td className="td">{new Date(folder.date_depart).toLocaleDateString()}</td>
//                                     <td className="td">
//                                         <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
//                                         <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
//                                         <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </section>
//                 <AnimatePresence>
//                     {modalOpen && (
//                         <CustomModal
//                             open={modalOpen}
//                             handleClose={handleCloseModal}
//                             folderId={selectedFolderId}
//                             mode={mode}
//                         />
//                     )}
//                 </AnimatePresence>
//                 <AlertDialogSlide open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} />
//                 <CustomizedDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
//             </main>
//         </div>
//     );
// }

// export default TableResponsive;














































// import React, { useEffect, useRef, useState } from 'react';
// import search from "../../assets/image/search.png"
// import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
// import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
// import { AnimatePresence } from 'framer-motion';
// import { useGetFolders } from '../../services/serviceFolder';
// import AlertDialogSlide from '../MUI_alert/deleteFolder';
// import CustomizedDialogs from '../MUI_read/readFolder';

// import "./tableResponsive.scss"
// import CustomModal from '../MUI/CustomModal';

// const TableResponsive = () => {
//     const tableRef = useRef(null);
//     const searchRef = useRef(null);
//     const [searchType, setSearchType] = useState('nom');
//     const [modalOpen, setModalOpen] = useState(false);
//     const [selectedFolderId, setSelectedFolderId] = useState(null);
//     const [alertOpen, setAlertOpen] = useState(false);
//     const [deleteFolderId, setDeleteFolderId] = useState(null);
//     const [alertOpenRead, setAlertOpenRead] = useState(false);
//     const [readFolderId, setReadFolderId] = useState(null);
//     const { data: folders, isLoading, isError } = useGetFolders();
//     const [mode, setMode] = useState('add');

//     const handleOpenModal = (folderId, mode) => {
//         setSelectedFolderId(folderId);
//         setMode(mode);
//         setModalOpen(true);
//     };

//     const handleCloseModal = () => setModalOpen(false);

//     const handleDeleteClick = (folderId) => {
//         setDeleteFolderId(folderId);
//         setAlertOpen(true);
//     };

//     const handleReadClick = (folderId) => {
//         setReadFolderId(folderId);
//         setAlertOpenRead(true);
//     };

//     useEffect(() => {
//         if (folders && folders.data) {
//             folders.data.forEach((folder) => console.log('Folder data:', folder));
//         }
//     }, [folders]);

//     useEffect(() => {
//         const searchInput = searchRef.current;
//         const table = tableRef.current;
//         const tableRows = table.querySelectorAll('tbody tr');

//         const searchTable = () => {
//             tableRows.forEach((row, i) => {
//                 let search_data = searchInput.value.toLowerCase();
//                 let table_data = '';

//                 if (searchType === 'nom') {
//                     table_data = row.querySelectorAll('td')[0].textContent.toLowerCase();
//                 } else if (searchType === 'numero') {
//                     table_data = row.querySelectorAll('td')[6].textContent.toLowerCase();
//                 } else if (searchType === 'matricule') {
//                     table_data = row.querySelectorAll('td')[2].textContent.toLowerCase();
//                 } else if (searchType === 'date') {
//                     table_data = row.querySelectorAll('td')[7].textContent.toLowerCase();
//                 }

//                 row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
//                 row.style.setProperty('--delay', i / 25 + 's');
//             });

//             document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
//                 visible_row.style.backgroundColor = (i % 2 === 0) ? '--second-bg' : '--second-bg';
//                 visible_row.style.animationDelay = `${i * 0.1}s`;
//             });
//         };

//         searchInput.addEventListener('input', searchTable);

//         return () => {
//             searchInput.removeEventListener('input', searchTable);
//         };
//     }, [searchType]);

//     return (
//         <div className='container__table'>
//             <main className="table" ref={tableRef} id="customers_table">
//                 <section className="table__header">
//                     <select className='searchByeverything' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
//                         <option value="nom">Search by Nom</option>
//                         <option value="numero">Search by Numero</option>
//                         <option value="matricule">Search by Matricule</option>
//                         <option value="date">Search by Date</option>
//                     </select>

//                     {/* Remplacement dynamique du champ de recherche */}
//                     <div className="input-group">
//                         {searchType === 'date' ? (
//                             <input
//                                 type="date"
//                                 ref={searchRef}
//                                 placeholder="Search by Date"
//                             />
//                         ) : (
//                             <input
//                                 type="search"
//                                 placeholder="Search Data..."
//                                 ref={searchRef}
//                             />
//                         )}
//                         <img src={search} alt="Search Icon" />
//                     </div>

//                     <div className='option_right'>
//                         <MdAdd onClick={() => handleOpenModal(null, 'add')} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
//                         <FaArrowDown className="icon_add" style={{ marginLeft: '20px', fontSize: '24px' }} />
//                     </div>
//                 </section>

//                 <section className="table__body">
//                     <table className='table'>
//                         <thead className='thead'>
//                             <tr>
//                                 <th className='th'>Nom</th>
//                                 <th className='th'>Prénom</th>
//                                 <th className='th'>Matricule</th>
//                                 <th className='th'>Expediteur</th>
//                                 <th className='th'>Destination</th>
//                                 <th className='th'>Description</th>
//                                 <th className='th'>Numero Bordereaux</th>
//                                 <th className='th'>Date Départ</th>
//                                 <th className='th'>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className='tbody'>
//                             {folders && folders.data && folders.data.map((folder, index) => (
//                                 <tr key={index}>
//                                     <td className="td">{folder.id_nature.nom_depose}</td>
//                                     <td className="td">{folder.id_nature.prenom_depose}</td>
//                                     <td className="td">{folder.id_nature.matricule}</td>
//                                     <td className="td">{folder.expiditeur}</td>
//                                     <td className="td">{folder.destination}</td>
//                                     <td className="td">{folder.id_nature.description}</td>
//                                     <td className="td">{folder.numero_bordereaux}</td>
//                                     <td className="td">{new Date(folder.date_depart).toLocaleDateString()}</td>
//                                     <td className="td">
//                                         <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
//                                         <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
//                                         <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </section>
//                 <AnimatePresence>
//                     {modalOpen && (
//                         <CustomModal
//                             open={modalOpen}
//                             handleClose={handleCloseModal}
//                             folderId={selectedFolderId}
//                             mode={mode}
//                         />
//                     )}
//                 </AnimatePresence>
//                 <AlertDialogSlide open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} />
//                 <CustomizedDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
//             </main>
//         </div>
//     );
// }

// export default TableResponsive;

































































































































































































































// import React, { useEffect, useRef, useState } from 'react';
// import search from "../../assets/image/search.png"
// import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
// import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
// import { AnimatePresence } from 'framer-motion';
// import { useGetFolders } from '../../services/serviceFolder';
// import AlertDialogSlide from '../MUI_alert/deleteFolder';
// import CustomizedDialogs from '../MUI_read/readFolder';
// import "./tableResponsive.scss"
// import CustomModal from '../MUI/CustomModal';
// import { TextField } from '@mui/material';

// const TableResponsive = () => {
//     const tableRef = useRef(null);
//     const searchRef = useRef(null);
//     const [searchType, setSearchType] = useState('nom');
//     const [modalOpen, setModalOpen] = useState(false);
//     const [selectedFolderId, setSelectedFolderId] = useState(null);

//     const [alertOpen, setAlertOpen] = useState(false);
//     const [deleteFolderId, setDeleteFolderId] = useState(null);

//     const [alertOpenRead, setAlertOpenRead] = useState(false);
//     const [readFolderId, setReadFolderId] = useState(null);

//     const [folders, isLoading, isError] = useGetFolders();
//     const [mode, setMode] = useState('add');

//     const handleOpenModal = (folderId, mode) => {
//         setSelectedFolderId(folderId);
//         setMode(mode);
//     };

//     const handleCloseModal = () => setModalOpen(false);

//     const handleDeleteClick = (folderId) => {
//         setDeleteFolderId(folderId);
//         setAlertOpen(true);
//         console.log(folderId)
//     };

//     const handleReadClick = (folderId) => {
//         setReadFolderId(folderId);
//         setAlertOpenRead(true);
//         console.log(folderId)
//     };

//     useEffect(() => {
//         if (folders && folders.data) {
//             folders.data.forEach((folder) => console.log('Folder data:', folder));
//         }
//     }, [folders]);

//     // const logSearchValue = () => {
//     //     const searchValue = searchRef.current.value;
//     //     console.log('Valeur saisie :', searchValue);
//     // };

//     useEffect(() => {
//         const searchInput = searchRef.current;
//         const table = tableRef.current;
//         const tableRows = table.querySelectorAll('tbody tr');

//         const searchTable = () => {
//             tableRows.forEach((row, i) => {
//                 let search_data = searchInput.value.toLowerCase();
//                 let table_data = '';

//                 if (searchType === 'nom') {
//                     table_data = row.querySelectorAll('td')[0].textContent.toLowerCase();
//                 } else if (searchType === 'numero') {
//                     table_data = row.querySelectorAll('td')[6].textContent.toLowerCase();
//                 } else if (searchType === 'matricule') {
//                     table_data = row.querySelectorAll('td')[2].textContent.toLowerCase();
//                 } else if (searchType === 'date') {
//                     table_data = row.querySelectorAll('td')[7].textContent.toLowerCase();
//                     console.log(searchType)
//                 }

//                 row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
//                 row.style.setProperty('--delay', i / 25 + 's');
//             });

//             document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
//                 visible_row.style.backgroundColor = (i % 2 === 0) ? '--second-bg' : '--second-bg';
//                 visible_row.style.animationDelay = `${i * 0.1}s`;
//             });
//         };

//         searchInput.addEventListener('input', searchTable);

//         return () => {
//             searchInput.removeEventListener('input', searchTable);
//         };
//     }, [searchType]);

//     useEffect(() => {
//         if (searchType == 'date') {
//             setIsDatePickerVisible(true);
//         } else {
//             setIsDatePickerVisible(false);
//         }
//     }, [searchType]);

//     const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

//     return (
//         <div className='container__table'>
//             <main className="table" ref={tableRef} id="customers_table">
//                 <section className="table__header">
//                     <select className='searchByeverything' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
//                         <option value="nom">Search by Nom</option>
//                         <option value="numero">Search by Numero</option>
//                         <option value="matricule">Search by matricule</option>
//                         <option value="date">Search by Date</option>
//                     </select>
//                     <TextField
//                         type="date"
//                         name="date_depart"
//                         label="Date Départ"
//                         variant="standard"
//                         fullWidth
//                     //   value={fields.date_depart}
//                     //   onChange={handleChange}
//                     />
//                     {/* {isDatePickerVisible ? (
//                         <div className="input-group">
//                             <input type="date" placeholder="Search Data..." ref={searchRef} />
//                             <img src={search} alt="Search Icon" />
//                         </div>
//                     ) : (
//                         <div className="input-group">
//                             <input type="search" placeholder="Search Data..." ref={searchRef} />
//                             <img src={search} alt="Search Icon" />
//                         </div>
//                     )} */}
//                     <div className='option_right'>
//                         {/* <MdAdd onClick={handleOpenModal} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} /> */}
//                         <MdAdd onClick={() => handleOpenModal(null, 'add')} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
//                         <FaArrowDown className="icon_add" style={{ marginLeft: '20px', fontSize: '24px' }} />
//                     </div>
//                 </section>

//                 <section className="table__body">
//                     <table className='table'>
//                         <thead className='thead'>
//                             <tr>
//                                 {/* <th className='th'>ID Courrier </th> */}
//                                 <th className='th'>Nom </th>
//                                 <th className='th'>Prénom </th>
//                                 <th className='th'>Matricule </th>
//                                 <th className='th'>Expediteur </th>
//                                 <th className='th'>Destination </th>
//                                 <th className='th'>Description </th>
//                                 <th className='th'>Numero Bordereaux </th>
//                                 <th className='th'>Date Départ </th>
//                                 <th className='th'>Actions </th>
//                             </tr>
//                         </thead>
//                         <tbody className='tbody'>
//                             {folders && folders.data && folders.data.map((folder, index) => (
//                                 <tr key={index}>
//                                     <td className="td">{folder.id_nature.nom_depose}</td>
//                                     <td className="td">{folder.id_nature.prenom_depose}</td>
//                                     <td className="td">{folder.id_nature.matricule}</td>
//                                     <td className="td">{folder.expiditeur}</td>
//                                     <td className="td">{folder.destination}</td>
//                                     <td className="td">{folder.id_nature.description}</td>
//                                     <td className="td">{folder.numero_bordereaux}</td>
//                                     <td className="td">{new Date(folder.date_depart).toLocaleDateString()}</td>
//                                     <td className="td">
//                                         <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
//                                         <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
//                                         <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </section>
//                 <AnimatePresence>
//                     {modalOpen && (
//                         <CustomModal
//                             open={modalOpen}
//                             handleClose={handleCloseModal}
//                             folderId={selectedFolderId}
//                             mode={mode}
//                             // displayData={displayData}
//                         />
//                     )}
//                 </AnimatePresence>
//                 {/* Inclusion du modal d'alerte */}
//                 <AlertDialogSlide open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} />
//                 <CustomizedDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
//             </main>
//         </div>
//     );
// }

// export default TableResponsive;




















































































































































// import React, { useEffect, useRef, useState } from 'react';
// import search from "../../assets/image/search.png"
// import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
// import { FaArrowDown } from 'react-icons/fa';
// import { AnimatePresence } from 'framer-motion';
// import { useGetFolders } from '../../services/serviceFolder'; // Assurez-vous que le chemin est correct
// import AlertDialogSlide from '../MUI_alert/deleteFolder'; // Importer l'alert modal
// import CustomizedDialogs from '../MUI_read/readFolder'; // Importer l'alert modal

// import "./tableResponsive.scss"
// import CustomModal from '../MUI/CustomModal';

// const TableResponsive = () => {
//     const tableRef = useRef(null);
//     const searchRef = useRef(null);
//     const [searchType, setSearchType] = useState('nom');
//     const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la modale
//     const [selectedFolderId, setSelectedFolderId] = useState(null); // État pour gérer l'ID du courrier sélectionné

//     const [alertOpen, setAlertOpen] = useState(false); // État pour l'alert modal
//     const [deleteFolderId, setDeleteFolderId] = useState(null); // ID pour suppression

//     const [alertOpenRead, setAlertOpenRead] = useState(false); // État pour l'alert modal
//     const [readFolderId, setReadFolderId] = useState(null); // ID pour suppression

//     const [searchValue, setSearchValue] = useState('');

//     // Utilisez le hook pour récupérer les dossiers
//     const { data: folders, isLoading, isError } = useGetFolders();
//     const [mode, setMode] = useState('add'); // Nouveau état pour le mode de la modale

//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const handleOpenModal = (folderId, mode) => {
//         setSelectedFolderId(folderId);
//         setMode(mode);
//         setModalOpen(true);
//     };

//     const handleCloseModal = () => setModalOpen(false);

//     const handleDeleteClick = (folderId) => {
//         setDeleteFolderId(folderId);
//         setAlertOpen(true);
//         console.log(folderId)
//     };

//     const handleReadClick = (folderId) => {
//         setReadFolderId(folderId);
//         setAlertOpenRead(true); // Ouvre l'alert modal
//         console.log(folderId)
//     };


//     useEffect(() => {
//         // if (folders && folders.data) {
//         //     folders.data.forEach((folder) => console.log('Folder data:', folder));
//         // }
//         dataFetch()
//         displayData()

//     }, [folders])

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//         console.log('Dropdown toggled!');
//     };

//     const dataFetch = () => {
//         // if (folders && folders.data) {
//         //     folders.data.forEach((folder) => console.log('Folder data:', folder));
//         // }
//         console.log("Actualisation")
//         console.log(folders)
//         // displayData()
//     }
//     useEffect(() => {
//         const searchInput = searchRef.current;
//         const table = tableRef.current;
//         const tableRows = table.querySelectorAll('tbody tr');

//         const searchTable = () => {
//             tableRows.forEach((row, i) => {
//                 let search_data = searchValue.toLowerCase();
//                 let table_data = '';

//                 if (searchType === 'nom') {
//                     table_data = row.querySelectorAll('td')[0].textContent.toLowerCase();
//                 } else if (searchType === 'numero') {
//                     table_data = row.querySelectorAll('td')[6].textContent.toLowerCase();
//                 } else if (searchType === 'matricule') {
//                     table_data = row.querySelectorAll('td')[2].textContent.toLowerCase();
//                 } else if (searchType === 'date') {
//                     table_data = row.querySelectorAll('td')[7].textContent;
//                     search_data = new Date(search_data).toLocaleDateString(); // Convertir pour une comparaison de date
//                 }

//                 row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
//                 row.style.setProperty('--delay', i / 25 + 's');
//             });

//             document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
//                 visible_row.style.backgroundColor = (i % 2 === 0) ? '--second-bg' : '--second-bg';
//                 visible_row.style.animationDelay = `${i * 0.1}s`;
//             });
//         };

//         searchTable();
//     }, [searchType, searchValue]);


//     const displayData = () => {
//         if (!folders || !folders.data) return null;

//         return folders.data.map((folder, index) => (
//             <tr key={index}>
//                 <td className="td">{folder.id_nature.nom_depose}</td>
//                 <td className="td">{folder.id_nature.prenom_depose}</td>
//                 <td className="td">{folder.id_nature.matricule}</td>
//                 <td className="td">{folder.expiditeur}</td>
//                 <td className="td">{folder.destination}</td>
//                 <td className="td">{folder.id_nature.description}</td>
//                 <td className="td">{folder.numero_bordereaux}</td>
//                 <td className="td">{new Date(folder.date_depart).toLocaleDateString()}</td>
//                 <td className="td">
//                     <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
//                     <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
//                     <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
//                 </td>
//             </tr>
//         ));
//     };

//     return (
//         <div className='container__table'>
//             <main className="table" ref={tableRef} id="customers_table">
//                 <section className="table__header">
//                     <select className='searchByeverything' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
//                         <option value="nom">Search by Nom</option>
//                         <option value="numero">Search by Numero</option>
//                         <option value="matricule">Search by matricule</option>
//                         <option value="date">Search by Date</option>
//                     </select>
//                     {/* <div className="input-group">
//                         <input type="search" placeholder="Search Data..." ref={searchRef} />
//                         <img src={search} alt="Search Icon" />
//                     </div> */}
//                     {searchType === 'date' ? (
//                         <input
//                             type="date"
//                             ref={searchRef}
//                             onChange={(e) => setSearchValue(e.target.value)}
//                             placeholder="Select Date..."
//                         />
//                     ) : (
//                         <div className="input-group">
//                             <input
//                                 type="search"
//                                 placeholder="Search Data..."
//                                 ref={searchRef}
//                                 onChange={(e) => setSearchValue(e.target.value)}
//                             />
//                             <img src={search} alt="Search Icon" />
//                         </div>
//                     )}
//                     <div className='option_right'>
//                         {/* <MdAdd onClick={handleOpenModal} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} /> */}
//                         <MdAdd onClick={() => handleOpenModal(null, 'add')} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
//                         {/* <FaArrowDown onClick={toggleDropdown} className="icon_add" style={{ marginLeft: '20px', fontSize: '24px' }} /> */}
//                         <div className="dropdown-container">
//                             <FaArrowDown onClick={toggleDropdown} className="icon_add" style={{ marginLeft: '20px', fontSize: '24px' }} />
//                             {dropdownOpen && (
//                                 <div className="dropdown-menu">
//                                     <button onClick={() => setSelectedOption('option1')}>Option 1</button>
//                                     <button onClick={() => setSelectedOption('option2')}>Option 2</button>
//                                     <button onClick={() => setSelectedOption('option3')}>Option 3</button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </section>

//                 <section className="table__body">
//                     <table className='table'>
//                         <thead className='thead'>
//                             <tr>
//                                 {/* <th className='th'>ID Courrier </th> */}
//                                 <th className='th'>Nom </th>
//                                 <th className='th'>Prénom </th>
//                                 <th className='th'>Matricule </th>
//                                 <th className='th'>Expediteur </th>
//                                 <th className='th'>Destination </th>
//                                 <th className='th'>Description </th>
//                                 <th className='th'>Numero Bordereaux </th>
//                                 <th className='th'>Date Départ </th>
//                                 <th className='th'>Actions </th>
//                             </tr>
//                         </thead>
//                         <tbody className='tbody'>
//                             {/* {displayData()} */}
//                             {/* {folders && folders.data && displayData()} */}
//                             {folders && folders.data && folders.data.map((folder, index) => (
//                                 <tr key={index}>
//                                     <td className="td">{folder.id_nature.nom_depose}</td>
//                                     <td className="td">{folder.id_nature.prenom_depose}</td>
//                                     <td className="td">{folder.id_nature.matricule}</td>
//                                     <td className="td">{folder.expiditeur}</td>
//                                     <td className="td">{folder.destination}</td>
//                                     <td className="td">{folder.id_nature.description}</td>
//                                     <td className="td">{folder.numero_bordereaux}</td>
//                                     <td className="td">{new Date(folder.date_depart).toLocaleDateString()}</td>
//                                     <td className="td">
//                                         <MdEdit className="action-icon icon" title="Modifier" onClick={() => handleOpenModal(folder._id, 'edit')} />
//                                         <MdDelete className="action-icon icon" title="Delete" onClick={() => handleDeleteClick(folder._id)} />
//                                         <MdVisibility className="action-icon icon" title="Read" onClick={() => handleReadClick(folder._id)} />
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </section>
//                 <AnimatePresence>
//                     {/* <CustomModal open={modalOpen} handleClose={handleCloseModal} /> */}
//                     {modalOpen && (
//                         <CustomModal
//                             open={modalOpen}
//                             handleClose={handleCloseModal}
//                             folderId={selectedFolderId} // Passer l'ID du courrier à la modale
//                             mode={mode} // Passer le mode à la modale
//                             dataFetch={dataFetch}
//                             displayData={displayData}
//                         />
//                     )}
//                     {/* displayData={displayData} */}
//                 </AnimatePresence>
//                 {/* Inclusion du modal d'alerte */}
//                 <AlertDialogSlide open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} />
//                 <CustomizedDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
//             </main>
//         </div>
//     );
// }

// export default TableResponsive;











// //         setModalOpen(true);





























































import React, { useEffect, useRef, useState } from 'react';
import search from "../../assets/image/search.png";
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
import { FaArrowDown } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { useGetFolders } from '../../services/serviceFolder'; // Assurez-vous que le chemin est correct
import AlertDialogSlide from '../MUI_alert/deleteFolder'; // Importer l'alert modal
import CustomizedDialogs from '../MUI_read/readFolder'; // Importer l'alert modal
import "./tableResponsive.scss";
import CustomModal from '../MUI/CustomModal';
import { PDFDownloadLink } from '@react-pdf/renderer'; // Import PDFDownloadLink
import PdfContent from '../printer/PdfContent'; // Adjust the import path as necessary

const TableResponsive = () => {
    const tableRef = useRef(null);
    const searchRef = useRef(null);
    const [searchType, setSearchType] = useState('nom');
    const [modalOpen, setModalOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la modale
    const [selectedFolderId, setSelectedFolderId] = useState(null); // État pour gérer l'ID du courrier sélectionné
    const [alertOpen, setAlertOpen] = useState(false); // État pour l'alert modal
    const [deleteFolderId, setDeleteFolderId] = useState(null); // ID pour suppression
    const [alertOpenRead, setAlertOpenRead] = useState(false); // État pour l'alert modal
    const [readFolderId, setReadFolderId] = useState(null); // ID pour suppression
    const [searchValue, setSearchValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(null); // État pour stocker l'option sélectionnée

    // Utilisez le hook pour récupérer les dossiers
    const { data: folders, refetch, isLoading, isError } = useGetFolders();
    const [mode, setMode] = useState('add'); // Nouveau état pour le mode de la modale
    const [dropdownOpen, setDropdownOpen] = useState(false);

        // Generate PDF Link
        const generatePDF = () => {
            console.log('Generating')
            return (
                <PDFDownloadLink document={<PdfContent folders={folders.data} />} fileName="folders.pdf">
                    {({ loading }) => (loading ? 'Loading document...' : <MdPictureAsPdf className="icon_add" style={{ fontSize: '24px', marginLeft: '20px' }} title="Download PDF" />)}
                </PDFDownloadLink>
            );
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
        console.log(folderId);
    };

    const handleReadClick = (folderId) => {
        setReadFolderId(folderId);
        setAlertOpenRead(true); // Ouvre l'alert modal
        console.log(folderId);
    };

    // Fetch data when folders change
    useEffect(() => {
        refetch();
    }, [refetch]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        console.log('Dropdown toggled!');
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        console.log(`Option selected: ${option}`);

        switch (option) {
            case 'option1':
                handleOption1();
                break;
            case 'option2':
                handleOption1();
                break;
            case 'option3':
                handleOption1();
                break;
        }

        setDropdownOpen(false);
    };

    const handleOption1 = () => {
        console.log("Données pour Option :", getOption1Data());
    };

    const getOption1Data = () => {
        return folders.data.map((folder) => ({
            id: folder._id,
            nom_depose: folder.id_nature.nom_depose,
            prenom_depose: folder.id_nature.prenom_depose,
            matricule: folder.id_nature.matricule,
            expideur: folder.expiditeur,
            destination: folder.destination,
            description: folder.id_nature.description,
            numero_bordereaux: folder.numero_bordereaux,
            date_depart: new Date(folder.date_depart).toLocaleDateString(),
            actions: [
                { label: 'Modifier', action: () => handleOpenModal(folder._id, 'edit') },
                { label: 'Supprimer', action: () => handleDeleteClick(folder._id) },
                { label: 'Lire', action: () => handleReadClick(folder._id) }
            ]
        }));
    };


    useEffect(() => {
        const searchInput = searchRef.current;
        const table = tableRef.current;
        const tableRows = table.querySelectorAll('tbody tr');

        const searchTable = () => {
            tableRows.forEach((row, i) => {
                let search_data = searchValue.toLowerCase();
                let table_data = '';

                if (searchType === 'nom') {
                    table_data = row.querySelectorAll('td')[0].textContent.toLowerCase();
                } else if (searchType === 'numero') {
                    table_data = row.querySelectorAll('td')[6].textContent.toLowerCase();
                } else if (searchType === 'matricule') {
                    table_data = row.querySelectorAll('td')[2].textContent.toLowerCase();
                } else if (searchType === 'date') {
                    table_data = row.querySelectorAll('td')[7].textContent;
                    search_data = new Date(search_data).toLocaleDateString(); // Convertir pour une comparaison de date
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
                <td className="td">{folder.id_nature.nom_depose}</td>
                <td className="td">{folder.id_nature.prenom_depose}</td>
                <td className="td">{folder.id_nature.matricule}</td>
                <td className="td">{folder.expiditeur}</td>
                <td className="td">{folder.destination}</td>
                <td className="td">{folder.id_nature.description}</td>
                <td className="td">{folder.numero_bordereaux}</td>
                <td className="td">{new Date(folder.date_depart).toLocaleDateString()}</td>
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
                        <option value="numero">Search by Numero</option>
                        <option value="matricule">Search by Matricule</option>
                        <option value="date">Search by Date</option>
                    </select>
                    {searchType === 'date' ? (
                        <input
                            type="date"
                            ref={searchRef}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Select Date..."
                        />
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
                    {/* <div className='option_right'>
                        <MdAdd onClick={() => handleOpenModal(null, 'add')} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
                        <div className="dropdown-container">
                            <FaArrowDown onClick={toggleDropdown} className="icon_add" style={{ marginLeft: '20px', fontSize: '24px' }} />
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    <button onClick={() => setSelectedOption('option1')}>Option 1</button>
                                    <button onClick={() => setSelectedOption('option2')}>Option 2</button>
                                    <button onClick={() => setSelectedOption('option3')}>Option 3</button>
                                </div>
                            )}
                        </div>
                    </div> */}

                    <div className='option_right'>
                        <MdAdd onClick={() => handleOpenModal(null, 'add')} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
                        <MdEdit onClick={() => generatePDF()} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
                        <div className="dropdown-container">
                            <FaArrowDown onClick={toggleDropdown} className="icon_add" style={{ marginLeft: '20px', fontSize: '24px' }} />
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    {/* <button onClick={() => setSelectedOption('option1')} className="dropdown-item">Option 1</button>
                                    <button onClick={() => setSelectedOption('option2')} className="dropdown-item">Option 2</button>
                                    <button onClick={() => setSelectedOption('option3')} className="dropdown-item">Option 3</button> */}
                                     <button onClick={() => handleOptionClick('option1')} className="dropdown-item">Option 1</button>
                                    <button onClick={() => handleOptionClick('option2')} className="dropdown-item">Option 2</button>
                                    <button onClick={() => handleOptionClick('option3')} className="dropdown-item">Option 3</button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="table__body">
                    <table className='table'>
                        <thead className='thead'>
                            <tr>
                                <th className='th'>Nom </th>
                                <th className='th'>Prénom </th>
                                <th className='th'>Matricule </th>
                                <th className='th'>Expediteur </th>
                                <th className='th'>Destination </th>
                                <th className='th'>Description </th>
                                <th className='th'>Numero Bordereaux </th>
                                <th className='th'>Date Départ </th>
                                <th className='th'>Actions </th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {displayData()}
                        </tbody>
                    </table>
                </section>
                <AnimatePresence>
                    {modalOpen && (
                        <CustomModal
                            open={modalOpen}
                            handleClose={handleCloseModal}
                            folderId={selectedFolderId} // Passer l'ID du courrier à la modale
                            mode={mode} // Passer le mode à la modale
                            onSuccess={refetch} // Re-fetch folders when the modal closes successfully
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
