
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





























// import React, { useEffect, useRef, useState } from 'react';
// import search from "../../assets/image/search.png";
// import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
// import { FaArrowDown } from 'react-icons/fa';
// import { AnimatePresence } from 'framer-motion';
// import { useGetFolders } from '../../services/serviceFolder'; // Assurez-vous que le chemin est correct
// import AlertDialogSlide from '../MUI_alert/deleteFolder'; // Importer l'alert modal
// import CustomizedDialogs from '../MUI_read/readFolder'; // Importer l'alert modal
// import "./tableResponsive.scss";
// import CustomModal from '../MUI/CustomModal';
// import { PDFDownloadLink } from '@react-pdf/renderer'; // Import PDFDownloadLink
// import PdfContent from '../printer/PdfContent'; // Adjust the import path as necessary

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
//     const [selectedOption, setSelectedOption] = useState(null); // État pour stocker l'option sélectionnée

//     // Utilisez le hook pour récupérer les dossiers
//     const { data: folders, refetch, isLoading, isError } = useGetFolders();
//     const [mode, setMode] = useState('add'); // Nouveau état pour le mode de la modale
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//         // Generate PDF Link
//         const generatePDF = () => {
//             console.log('Generating')
//             return (
//                 <PDFDownloadLink document={<PdfContent folders={folders.data} />} fileName="folders.pdf">
//                     {({ loading }) => (loading ? 'Loading document...' : <MdPictureAsPdf className="icon_add" style={{ fontSize: '24px', marginLeft: '20px' }} title="Download PDF" />)}
//                 </PDFDownloadLink>
//             );
//         };

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
//         setAlertOpenRead(true); // Ouvre l'alert modal
//         console.log(folderId);
//     };

//     // Fetch data when folders change
//     useEffect(() => {
//         refetch();
//     }, [refetch]);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//         console.log('Dropdown toggled!');
//     };

//     const handleOptionClick = (option) => {
//         setSelectedOption(option);
//         console.log(`Option selected: ${option}`);

//         switch (option) {
//             case 'option1':
//                 handleOption1();
//                 break;
//             case 'option2':
//                 handleOption1();
//                 break;
//             case 'option3':
//                 handleOption1();
//                 break;
//         }

//         setDropdownOpen(false);
//     };

//     const handleOption1 = () => {
//         console.log("Données pour Option :", getOption1Data());
//     };

//     const getOption1Data = () => {
//         return folders.data.map((folder) => ({
//             id: folder._id,
//             nom_depose: folder.id_nature.nom_depose,
//             prenom_depose: folder.id_nature.prenom_depose,
//             matricule: folder.id_nature.matricule,
//             expideur: folder.expiditeur,
//             destination: folder.destination,
//             description: folder.id_nature.description,
//             numero_bordereaux: folder.numero_bordereaux,
//             date_depart: new Date(folder.date_depart).toLocaleDateString(),
//             actions: [
//                 { label: 'Modifier', action: () => handleOpenModal(folder._id, 'edit') },
//                 { label: 'Supprimer', action: () => handleDeleteClick(folder._id) },
//                 { label: 'Lire', action: () => handleReadClick(folder._id) }
//             ]
//         }));
//     };

















// const generatePDF = async () => {
//     try {
//         console.log('Generating PDF');
//         const pdf = <PdfContent />;
//         return (
//             <PDFDownloadLink document={pdf} fileName="folders.pdf">
//                 {({ loading }) => (
//                     loading ? 'Chargement...' : null
//                 )}
//             </PDFDownloadLink>
//         );
//     } catch (error) {
//         console.error('Erreur lors de la génération du PDF:', error);
//         alert('Erreur lors de la génération du PDF');
//     }
// };


// const generatePDF = async () => {
//     try {
//         console.log('Generating PDF');
//         const pdf = <PdfContent />;

//         // Utiliser FileSaver.js pour le téléchargement local
//         const blob = await pdf.toBlob();
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = 'MesDossiers.pdf';
//         link.click();

//         // Nettoyer les objets créés
//         URL.revokeObjectURL(link.href);

//     } catch (error) {
//         console.error('Erreur lors de la génération du PDF:', error);
//         alert('Erreur lors de la génération du PDF');
//     }
// }


// const generatePDF = async () => {
//     try {
//         console.log('Generating PDF');
//         const doc = new jsPDF();

//         // Ajoutez ici le contenu de votre PDF
//         doc.text('Titre du PDF', 10, 10);
//         doc.text('Contenu du PDF', 10, 20);

//         // Sauvegardez le PDF
//         const pdf = doc;
//         saveAs(pdf, 'doc.pdf');
//         console.log("PDF généré avec succès");

//     } catch (error) {
//         console.error('Erreur lors de la génération du PDF:', error);
//         alert('Erreur lors de la génération du PDF');
//     }
// };

































// const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     console.log(`Option selected: ${option}`);

//     switch (option) {
//         case 'option1':
//           generatePDF();
//           console.log("PDF generated successfully");
//           break;
//         case 'option2':
//           // ... autre logique ...
//           break;
//         case 'option3':
//           // ... autre logique ...
//           break;
//       }

//     setDropdownOpen(false);
// };
















// const generatePDF = () => {
//     try {
//         const doc = new jsPDF();

//         // Ajoutez ici le contenu de votre PDF
//         doc.text('Titre du PDF', 10, 10);
//         doc.text('Contenu du PDF', 10, 20);

//         // Sauvegardez le PDF
//         const pdf = doc;
//         saveAs(pdf, 'document.pdf');
//         console.log("PDF généré avec succès");
//     } catch (error) {
//         console.error('Erreur lors de la génération du PDF:', error);
//         alert('Erreur lors de la génération du PDF');
//     }
// };



















//     const generatePDF = async () => {
//     try {
//         console.log('Generating PDF');
//         const pdf = <PdfContent />;
//         return (
//             <PDFDownloadLink document={pdf} fileName="folders.pdf">
//                 {({ loading }) => (
//                     loading ? 'Chargement...' : null
//                 )}
//             </PDFDownloadLink>
//         );
//     } catch (error) {
//         console.error('Erreur lors de la génération du PDF:', error);
//         alert('Erreur lors de la génération du PDF');
//     }
// };


























// const generatePDF = async () => {
//     try {
//         console.log('Generating PDF');
//         const doc = new jsPDF();

//         // Ajoutez le contenu de votre PDF ici
//         doc.text('Titre du PDF', 10, 10);
//         doc.text('Contenu du PDF', 10, 20);

//         // Générer le PDF en format Blob
//         const pdfBlob = doc.output('blob');

//         // Utiliser FileSaver.js pour sauvegarder le PDF
//         saveAs(pdfBlob, 'MesDossiers.pdf');
//         console.log("PDF généré avec succès");

//     } catch (error) {
//         console.error('Erreur lors de la génération du PDF:', error);
//         alert('Erreur lors de la génération du PDF');
//     }
// };



// const generatePDF = async () => {
//     try {
//         console.log('Generating PDF');
//         const doc = new jsPDF();

//         // Capturez le contenu à partir de la référence
//         const content = contentRef.current;
//         if (content) {
//             doc.html(content, {
//                 callback: function (doc) {
//                     // Générer le PDF en format Blob
//                     const pdfBlob = doc.output('blob');
//                     saveAs(pdfBlob, 'MesDossiers.pdf');
//                     console.log("PDF généré avec succès");
//                 },
//                 x: 10,
//                 y: 10,
//             });
//         }
//     } catch (error) {
//         console.error('Erreur lors de la génération du PDF:', error);
//         alert('Erreur lors de la génération du PDF');
//     }
// };















































// const generatePDF = async () => {
//     try {
//         const doc = new jsPDF();
//         const content = contentRef.current;

//         if (content) {
//             // Assurez-vous que le contenu est visible
//             content.style.display = 'block';

//             await doc.html(content, {
//                 callback: function (doc) {
//                     const pdfBlob = doc.output('blob');
//                     saveAs(pdfBlob, 'MesDossiers.pdf');
//                 },
//                 x: 10,
//                 y: 10,
//             });

//             // Remettre le contenu à l'état caché
//             content.style.display = 'none';
//         }
//     } catch (error) {
//         console.error('Erreur lors de la génération du PDF:', error);
//         alert('Erreur lors de la génération du PDF');
//     }
// };



// const generatePDF = async () => {
//     try {
//         const doc = new jsPDF({
//             orientation: "portrait",
//             unit: "mm",
//             format: "a4",
//             putOnlyUsedFonts: true,
//             floatPrecision: 16, // or "smart"
//         });

//         const content = contentRef.current;

//         if (content) {
//             content.style.display = 'block';

//             const options = {
//                 callback: function (doc) {
//                     const pdfBlob = doc.output('blob');
//                     saveAs(pdfBlob, 'MesDossiers.pdf');
//                 },
//                 x: 10,
//                 y: 10,
//                 html2canvas: {
//                     scale: 2, // Increase the scale for better quality
//                 },
//                 margin: [10, 10], // Add margins
//             };

//             await doc.html(content, options);
//             content.style.display = 'none';
//         }
//     } catch (error) {
//         console.error('Erreur lors de la génération du PDF:', error);
//         alert('Erreur lors de la génération du PDF');
//     }
// };






















// const generatePDF = async () => {
//     try {
//         const doc = new jsPDF('p', 'pt', 'a4'); // 'p' pour portrait, 'pt' pour points, 'a4' pour format A4
//         const content = contentRef.current;

//         if (content) {
//             content.style.display = 'block'; // Rendre le contenu visible

//             // Configuration de la taille de police
//             doc.setFontSize(10); // Définir la taille de la police à 10

//             const pageHeight = doc.internal.pageSize.height; // Hauteur de la page
//             const pageWidth = doc.internal.pageSize.width; // Largeur de la page
//             const margin = 20; // Marge
//             let yOffset = margin; // Décalage vertical

//             // Titre
//             doc.text("Folder Data Report", margin, yOffset);
//             yOffset += 20; // Ajouter un espacement

//             // En-tête du tableau
//             const headers = ["Nom", "Prénom", "Matricule", "Expediteur", "Destination", "Description", "Numero Bordereaux", "Date Départ"];
//             const columnWidths = [25, 25, 25, 25, 25, 35, 25, 25]; // Largeur des colonnes

//             headers.forEach((header, i) => {
//                 doc.text(header, margin + columnWidths.slice(0, i).reduce((a, b) => a + b, 0), yOffset);
//             });

//             yOffset += 20; // Ajouter un espacement après l'en-tête

//             // Données du tableau
//             folders.data.forEach((folder, index) => {
//                 const rowData = [
//                     folder.id_nature.nom_depose,
//                     folder.id_nature.prenom_depose,
//                     folder.id_nature.matricule,
//                     folder.expiditeur,
//                     folder.destination,
//                     folder.id_nature.description,
//                     folder.numero_bordereaux,
//                     new Date(folder.date_depart).toLocaleDateString(),
//                 ];

//                 rowData.forEach((data, i) => {
//                     doc.text(data.toString(), margin + columnWidths.slice(0, i).reduce((a, b) => a + b, 0), yOffset);
//                 });

//                 yOffset += 15; // Espacement entre les lignes

//                 // Saut de page si le contenu dépasse la hauteur de la page
//                 if (yOffset > pageHeight - margin) {
//                     doc.addPage(); // Ajouter une nouvelle page
//                     yOffset = margin; // Réinitialiser le décalage vertical
//                 }
//             });

//             const pdfBlob = doc.output('blob');
//             saveAs(pdfBlob, 'MesDossiers.pdf');

//             content.style.display = 'none'; // Remettre le contenu à l'état caché
//         }
//     } catch (error) {
//         console.error('Erreur lors de la génération du PDF:', error);
//         alert('Erreur lors de la génération du PDF');
//     }
// };











































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
// import { PDFDownloadLink } from '@react-pdf/renderer'; // Import PDFDownloadLink
// import PdfContent from '../printer/PdfContent'; // Adjust the import path as necessary
import ContentToPrint from '../printer/ContentToPrint'; // Adjust the import path as necessary
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
// import { jsPDF } from "jspdf";
import "jspdf-autotable";
import * as XLSX from 'xlsx';
// import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun } from 'docx';
// import htmlDocx from 'html-docx-js';

const TableResponsive = () => {
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
    const [selectedOption, setSelectedOption] = useState(null);
    const { data: folders, refetch, isLoading, isError } = useGetFolders();
    const [mode, setMode] = useState('add');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const contentRef = useRef();

    const exportPdf = async () => {
        const doc = new jsPDF({ orientation: "landscape" });

        doc.autoTable({
            html: "#my-table",
        });

        doc.save("mypdf.pdf");
    };


    const exportExcel = () => {
        // Récupérer le tableau HTML
        const table = document.getElementById('my-table');
        
        // Créer un nouveau classeur
        const wb = XLSX.utils.table_to_book(table);
        
        // Enregistrer le fichier Excel
        XLSX.writeFile(wb, 'mydata.xlsx');
      };


    //   const exportWord = () => {
    //     // Récupérer le contenu HTML du tableau
    //     const table = document.getElementById('my-table');
    //     const htmlContent = table.outerHTML;
    
    //     // Convertir le contenu HTML en format DOCX
    //     const docx = htmlDocx.asBlob(htmlContent);
    
    //     // Créer un lien pour télécharger le fichier
    //     const url = window.URL.createObjectURL(docx);
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = 'mydata.docx';
    //     a.click();
    //     window.URL.revokeObjectURL(url); // Libérer l'URL
    //   };




const exportWord = () => {
    const doc = new jsPDF();
    
    // Ajouter le contenu du tableau
    doc.autoTable({
        html: '#my-table',
        styles: { cellPadding: 6 }
    });

    doc.save('MesDossiers.docx');
};




    


    const generatePDF = async () => {
        try {
            const doc = new jsPDF('p', 'pt', 'A4'); // Utilisez 'A4' pour le format A4
            const content = contentRef.current;

            if (content) {
                content.style.display = 'block'; // Rendre le contenu visible

                // Configuration de la taille de police
                doc.setFontSize(10); // Définir la taille de la police à 10

                const pageHeight = doc.internal.pageSize.height; // Hauteur de la page
                const pageWidth = doc.internal.pageSize.width; // Largeur de la page
                const margin = 15; // Marge
                let yOffset = margin; // Décalage vertical

                // Titre
                doc.text("Folder Data Report", margin, yOffset);
                yOffset += 50; // Ajouter un espacement

                // En-tête du tableau
                const headers = ["Nom", "Prénom", "Matricule", "Expediteur", "Destination", "Description", "N° Bordereaux", "Date Départ"];
                const columnWidths = [75, 60, 60, 65, 80, 85, 80, 100]; // Largeur des colonnes ajustées
                // const columnHeights = [50, 50, 50, 50, 50, 70, 50, 50]; // Largeur des colonnes ajustées

                headers.forEach((header, i) => {
                    doc.text(header, margin + columnWidths.slice(0, i).reduce((a, b) => a + b, 0), yOffset);
                });

                yOffset += 30; // Ajouter un espacement après l'en-tête

                // Données du tableau
                folders.data.forEach((folder, index) => {
                    const rowData = [
                        folder.id_nature.nom_depose,
                        folder.id_nature.prenom_depose,
                        folder.id_nature.matricule,
                        folder.expiditeur,
                        folder.destination,
                        folder.id_nature.description,
                        folder.numero_bordereaux,
                        new Date(folder.date_depart).toLocaleDateString(),
                    ];

                    rowData.forEach((data, i) => {
                        doc.text(data.toString(), margin + columnWidths.slice(0, i).reduce((a, b) => a + b, 0), yOffset);
                    });

                    yOffset += 30; // Espacement entre les lignes réduit

                    // Saut de page si le contenu dépasse la hauteur de la page
                    if (yOffset > pageHeight - margin) {
                        doc.addPage(); // Ajouter une nouvelle page
                        yOffset = margin; // Réinitialiser le décalage vertical
                    }
                });

                const pdfBlob = doc.output('blob');
                saveAs(pdfBlob, 'MesDossiers.pdf');

                content.style.display = 'none'; // Remettre le contenu à l'état caché
            }
        } catch (error) {
            console.error('Erreur lors de la génération du PDF:', error);
            alert('Erreur lors de la génération du PDF');
        }
    };

    const generateWord = async () => {
        try {
            const content = contentRef.current;
            if (content) {
                content.style.display = 'block'; // Rendre le contenu visible

                const wordContent = createDocx();

                const blob = new Blob([wordContent], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
                saveAs(blob, 'MesDossiers.docx');

                content.style.display = 'none'; // Remettre le contenu à l'état caché
            }
        } catch (error) {
            console.error('Erreur lors de la génération du fichier Word:', error);
            alert('Erreur lors de la génération du fichier Word');
        }
    };

    const createDocx = () => {
        const zip = new JSZip();
        const doc = new docxtemplater();

        const xmlTemplate = `
        <document>
            <table>
                <tr>
                    <td><w:p><w:r><t>${tables.name}</t></w:r></w:p></td>
                    <td><w:p><w:r><t>${tables.prenom}</t></w:r></w:p></td>
                    <td><w:p><w:r><t>${tables.matricule}</t></w:r></w:p></td>
                    <td><w:p><w:r><t>${tables.expiditeur}</t></w:r></w:p></td>
                    <td><w:p><w:r><t>${tables.destination}</t></w:r></w:p></td>
                    <td><w:p><w:r><t>${tables.description}</t></w:r></w:p></td>
                    <td><w:p><w:r><t>${tables.numero_bordereaux}</t></w:r></w:p></td>
                    <td><w:p><w:r><t>${tables.date_depart}</t></w:r></w:p></td>
                </tr>
            </table>
        </document>
        `;

        var content = new Blob([xmlTemplate], { type: 'text/xml' });
        doc.read(content, 'string');

        var ctx = {};
        ctx.tables = folders.data.map((folder) => ({
            name: folder.id_nature.nom_depose,
            prenom: folder.id_nature.prenom_depose,
            matricule: folder.id_nature.matricule,
            expiditeur: folder.expiditeur,
            destination: folder.destination,
            description: folder.id_nature.description,
            numero_bordereaux: folder.numero_bordereaux,
            date_depart: new Date(folder.date_depart).toLocaleDateString(),
        }));

        doc.fill(ctx);

        var buf = doc.render({
            template: zip.files['word/document.xml'],
            renderStyle: 'binary'
        });

        return buf;
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
        setAlertOpenRead(true);
        console.log(folderId);
    };

    useEffect(() => {
        refetch();
    }, [refetch]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        console.log('Dropdown toggled!');
    };

    const handleOptionClick = async (option) => {
        setSelectedOption(option);
        console.log(`Option selected: ${option}`);

        switch (option) {
            case 'option1':
                await generatePDF();
                console.log("PDF généré avec succès");
                break;
            case 'option2':
                await generateWord();
                console.log("Fichier Word généré avec succès");
                // ... autre logique ...
                break;
            case 'option3':
                // ... autre logique ...
                break;
        }

        setDropdownOpen(false);
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
                {/* <div ref={contentRef} className="hidden-content">
                    <ContentToPrint />
                </div> */}

                {/* <div ref={contentRef} className="content-to-print">
                    <ContentToPrint folders={folders?.data} />
                </div> */}

                <div ref={contentRef} className="content-to-print">
                    <div className="hidden-contents">
                        <ContentToPrint folders={folders?.data} />
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

                    <div className='option_right'>
                        <MdAdd onClick={() => handleOpenModal(null, 'add')} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
                        <button
                            className="btn btn-primary float-end mt-2 mb-2"
                            onClick={exportPdf}
                        >
                            Export
                        </button>
                        <button onClick={exportExcel}>Exporter vers Excel</button>
                        <button onClick={exportWord}>Exporter vers Word</button>
                        {/* <button onClick={generateDocx}>Générer DOCX</button> */}
                        {/* <button onClick={generateWords}>Générer DOCX2</button> */}
                        <div className="dropdown-container">
                            <div onClick={toggleDropdown} className='background_download'>
                                <FaArrowDown className="icon_download" style={{ marginLeft: '0px', fontSize: '20px' }} />
                            </div>
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    <button onClick={() => handleOptionClick('option1')} className="dropdown-item">Option 1</button>
                                    <button onClick={() => handleOptionClick('option2')} className="dropdown-item">Option 2</button>
                                    <button onClick={() => handleOptionClick('option3')} className="dropdown-item">Option 3</button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="table__body">
                    <table className='table' id="my-table">
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
                <AlertDialogSlide open={alertOpen} setOpen={setAlertOpen} folderId={deleteFolderId} onSuccess={refetch} />
                <CustomizedDialogs open={alertOpenRead} setOpen={setAlertOpenRead} folderId={readFolderId} />
            </main>
        </div>
    );
}

export default TableResponsive;





































































// const generateWords = async () => {
//     try {
//         // Créer un tableau de données à partir des dossiers
//         const tableData = folders.data.map((folder) => ([
//             folder.id_nature.nom_depose,
//             folder.id_nature.prenom_depose,
//             folder.id_nature.matricule,
//             folder.expiditeur,
//             folder.destination,
//             folder.id_nature.description,
//             folder.numero_bordereaux,
//             new Date(folder.date_depart).toLocaleDateString(),
//         ]));

//         // Ajouter l'en-tête du tableau
//         const headers = ["Nom", "Prénom", "Matricule", "Expediteur", "Destination", "Description", "Numero Bordereaux", "Date Départ"];

//         // Créer le document
//         const doc = new Document({
//             sections: [{
//                 properties: {},
//                 children: [
//                     new Paragraph("Liste des Dossiers"),
//                     new Table({
//                         rows: [
//                             new TableRow({
//                                 children: headers.map(header => 
//                                     new TableCell({
//                                         children: [new Paragraph(header)],
//                                         width: { size: 4000 } // Ajustez la largeur si nécessaire
//                                     })
//                                 ),
//                             }),
//                             ...tableData.map(row => 
//                                 new TableRow({
//                                     children: row.map(cell => 
//                                         new TableCell({
//                                             children: [new Paragraph(cell.toString())],
//                                             width: { size: 4000 } // Ajustez la largeur si nécessaire
//                                         })
//                                     ),
//                                 })
//                             ),
//                         ],
//                     }),
//                 ],
//             }],
//         });

//         // Sauvegarder le document
//         Packer.toBlob(doc).then((blob) => {
//             saveAs(blob, "MesDossiers.docx");
//         });
//     } catch (error) {
//         console.error('Erreur lors de la génération du fichier Word:', error);
//         alert('Erreur lors de la génération du fichier Word');
//     }
// };





































// const generateDocx = () => {
//     // Exemple de données : un tableau d'IDs
//     const ids = [1, 2, 3, 4, 5];

//     // Créer le document
//     const doc = new Document({
//         sections: [{
//             properties: {},
//             children: [
//                 new Paragraph("Liste des IDs"),
//                 new Table({
//                     rows: [
//                         new TableRow({
//                             children: [
//                                 new TableCell({
//                                     children: [new Paragraph("ID")],
//                                 }),
//                             ],
//                         }),
//                         ...ids.map(id => (
//                             new TableRow({
//                                 children: [
//                                     new TableCell({
//                                         children: [new Paragraph(id.toString())],
//                                     }),
//                                 ],
//                             })
//                         )),
//                     ],
//                 }),
//             ],
//         }],
//     });

//     // Sauvegarder le document
//     Packer.toBlob(doc).then((blob) => {
//         saveAs(blob, "ids_document.docx");
//     });
// };
