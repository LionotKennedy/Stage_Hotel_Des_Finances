// import React, { useEffect, useRef } from 'react';
// import React, { useEffect, useRef, useState } from 'react';
// import search from "../../assets/image/search.png"
// import un from "../../assets/image/ZinzuChanLee.jpg"
// import deux from "../../assets/image/JeetSaru.jpg"
// import quatre from "../../assets/image/SonalGharti.jpg"
// import trois from "../../assets/image/AlsonGC.jpg"
// import cinq from "../../assets/image/SaritaLimbu.jpg"
// import six from "../../assets/image/AlexGonley.jpg"
// import sept from "../../assets/image/AlsonGC.jpg"
// import huit from "../../assets/image/SaritaLimbu.jpg"
// import neuf from "../../assets/image/AlexGonley.jpg"
// import dix from "../../assets/image/AlexGonley.jpg"
// import onze from "../../assets/image/AlexGonley.jpg"
// import { MdEdit, MdDelete, MdVisibility } from 'react-icons/md'; // Import des icônes
// import { MdAdd } from 'react-icons/md'; // Importer l'icône d'ajout
// import { FaArrowUp } from 'react-icons/fa';


// import "./tableResponsive.scss"

// const TableResponsive = () => {

//     const tableRef = useRef(null);
//     const searchRef = useRef(null);
//     const [searchType, setSearchType] = useState('name'); // État pour le type de recherche

//     useEffect(() => {
//         const searchInput = searchRef.current;
//         const table = tableRef.current;
//         const tableRows = table.querySelectorAll('tbody tr');

//         // Script de recherche avec animation
//         const searchTable = () => {
//             tableRows.forEach((row, i) => {
//                 let table_data = row.textContent.toLowerCase(),
//                     search_data = searchInput.value.toLowerCase();

//                 // Cache ou montre les lignes en fonction de la recherche
//                 row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
//                 row.style.setProperty('--delay', i / 25 + 's'); // Retard d'animation pour chaque ligne
//             });

//             // Application de l'animation pour les lignes visibles
//             document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
//                 visible_row.style.backgroundColor = (i % 2 === 0) ? '#f1f1f1' : '#fff';
//                 visible_row.style.animationDelay = `${i * 0.1}s`; // Animation en cascade
//             });
//         };

//         searchInput.addEventListener('input', searchTable);

//         return () => {
//             searchInput.removeEventListener('input', searchTable);
//         };
//     }, []);

//     return (
//         <main className="table" ref={tableRef} id="customers_table">
//             <section className="table__header">
//                 <h1>Customer's Orders</h1>
//                 <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
//                     <option value="name">Search by Name</option>
//                     <option value="id">Search by ID</option>
//                 </select>
//                 <div className="input-group">
//                     {/* <input type="search" placeholder="Search Data..." /> */}
//                     <input type="search" placeholder="Search Data..." ref={searchRef} />
//                     <img src={search} alt="" />
//                 </div>
//                 <div className="export__file">
//                     <label htmlFor="export-file" className="export__file-btn" title="Export File"></label>
//                     <input type="checkbox" id="export-file" />
//                     <div className="export__file-options">
//                         <label>Export As &nbsp; &#10140;</label>
//                         <label htmlFor="export-file" id="toPDF">PDF <img src="../../assets/images/pdf.png" alt="" /></label>
//                         <label htmlFor="export-file" id="toJSON">JSON <img src="../../assets/images/json.png" alt="" /></label>
//                         <label htmlFor="export-file" id="toCSV">CSV <img src="../../assets/images/csv.png" alt="" /></label>
//                         <label htmlFor="export-file" id="toEXCEL">EXCEL <img src="../../assets/images/excel.png" alt="" /></label>
//                     </div>
//                     <MdAdd className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} /> {/* Icône d'ajout */}
//                 </div>
//             </section>

//             <section className="table__body">
//                 <table className='table'>
//                     <thead className='thead'>
//                         <tr>
//                             <th className='th'>Id <span className="icon-arrow"><FaArrowUp /></span></th>
//                             <th className='th'>Customer <span className="icon-arrow"><FaArrowUp /></span></th>
//                             <th className='th'>Location <span className="icon-arrow"><FaArrowUp /></span></th>
//                             <th className='th'>Order Date <span className="icon-arrow"><FaArrowUp /></span></th>
//                             <th className='th'>Status <span className="icon-arrow"><FaArrowUp /></span></th>
//                             <th className='th'>Amount <span className="icon-arrow"><FaArrowUp /></span></th>
//                             <th className='th'>Actions <span className="icon-arrow"><FaArrowUp /></span></th> {/* Nouvelle colonne */}
//                         </tr>
//                     </thead>
//                     <tbody className='tbody'>
//                         <tr>
//                             <td className="td">1 </td>
//                             <td className="td"><img src={un} alt="" />Zinzu Chan Lee</td>
//                             <td className="td">Seoul </td>
//                             <td className="td">17 Dec, 2022 </td>
//                             <td className="td">
//                                 <p className="status delivered">Delivered</p>
//                             </td>
//                             <td className="td"><strong> $128.90 </strong></td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">2 </td>
//                             <td className="td"><img src={deux} alt="" /> Jeet Saru </td>
//                             <td className="td">Kathmandu </td>
//                             <td className="td">27 Aug, 2023 </td>
//                             <td className="td">
//                                 <p className="status cancelled">Cancelled</p>
//                             </td>
//                             <td className="td"><strong>$5350.50</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">3</td>
//                             <td className="td"><img src={quatre} alt="" /> Sonal Gharti </td>
//                             <td className="td">Tokyo </td>
//                             <td className="td">14 Mar, 2023 </td>
//                             <td className="td">
//                                 <p className="status shipped">Shipped</p>
//                             </td>
//                             <td className="td"><strong>$210.40</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">4</td>
//                             <td className="td"><img src={trois} alt="" /> Alson GC </td>
//                             <td className="td">New Delhi </td>
//                             <td className="td">25 May, 2023 </td>
//                             <td className="td">
//                                 <p className="status delivered">Delivered</p>
//                             </td>
//                             <td className="td"><strong>$149.70</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">5</td>
//                             <td className="td"><img src={cinq} alt="" /> Sarita Limbu </td>
//                             <td className="td">Paris </td>
//                             <td className="td">23 Apr, 2023 </td>
//                             <td className="td">
//                                 <p className="status pending">Pending</p>
//                             </td>
//                             <td className="td"><strong>$399.99</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">6</td>
//                             <td className="td"><img src={six} alt="" /> Alex Gonley </td>
//                             <td className="td">London </td>
//                             <td className="td">23 Apr, 2023 </td>
//                             <td className="td">
//                                 <p className="status cancelled">Cancelled</p>
//                             </td>
//                             <td className="td"><strong>$399.99</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">7</td>
//                             <td className="td"><img src={sept} alt="" /> Jeet Saru </td>
//                             <td className="td">New York </td>
//                             <td className="td">20 May, 2023 </td>
//                             <td className="td">
//                                 <p className="status delivered">Delivered</p>
//                             </td>
//                             <td className="td"><strong>$399.99</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">8</td>
//                             <td className='td'><img src={huit} alt="" /> Aayat Ali Khan </td>
//                             <td className="td">Islamabad </td>
//                             <td className="td">30 Feb, 2023 </td>
//                             <td className="td">
//                                 <p className="status pending">Pending</p>
//                             </td>
//                             <td className="td"><strong>$149.70</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">9</td>
//                             <td className="td"><img src={neuf} alt="" /> Alson GC </td>
//                             <td className="td">Dhaka </td>
//                             <td className="td">22 Dec, 2023 </td>
//                             <td className="td">
//                                 <p className="status cancelled">Cancelled</p>
//                             </td>
//                             <td className="td"><strong>$249.99</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">9</td>
//                             <td className="td"><img src={dix} alt="" /> Alson GC </td>
//                             <td className="td">Dhaka </td>
//                             <td className="td">22 Dec, 2023 </td>
//                             <td className="td">
//                                 <p className="status cancelled">Cancelled</p>
//                             </td>
//                             <td className="td"><strong>$249.99</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">9</td>
//                             <td className="td"><img src={onze} alt="" /> Alson GC </td>
//                             <td className="td">Dhaka </td>
//                             <td className="td">22 Dec, 2023 </td>
//                             <td className="td">
//                                 <p className="status cancelled">Cancelled</p>
//                             </td>
//                             <td className="td"><strong>$249.99</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">9</td>
//                             <td className="td"><img src={onze} alt="" /> Alson GC </td>
//                             <td className="td">Dhaka </td>
//                             <td className="td">22 Dec, 2023 </td>
//                             <td className="td">
//                                 <p className="status cancelled">Cancelled</p>
//                             </td>
//                             <td className="td"><strong>$249.99</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                         <tr>
//                             <td className="td">9</td>
//                             <td className="td"><img src={onze} alt="" /> Alson GC </td>
//                             <td className="td">Dhaka </td>
//                             <td className="td">22 Dec, 2023 </td>
//                             <td className="td">
//                                 <p className="status cancelled">Cancelled</p>
//                             </td>
//                             <td className="td"><strong>$249.99</strong> </td>
//                             <td className="td">
//                                 <MdEdit className="action-icon icon" title="Update" />
//                                 <MdDelete className="action-icon icon" title="Delete" />
//                                 <MdVisibility className="action-icon icon" title="Read" />
//                             </td> {/* Actions pour la ligne */}
//                         </tr>
//                     </tbody>
//                 </table>
//             </section>

//         </main>
//     )
// }

// export default TableResponsive






















































































































import React, { useEffect, useRef, useState } from 'react';
import search from "../../assets/image/search.png"
import un from "../../assets/image/ZinzuChanLee.jpg"
import deux from "../../assets/image/JeetSaru.jpg"
import quatre from "../../assets/image/SonalGharti.jpg"
import trois from "../../assets/image/AlsonGC.jpg"
import cinq from "../../assets/image/SaritaLimbu.jpg"
import six from "../../assets/image/AlexGonley.jpg"
import sept from "../../assets/image/AlsonGC.jpg"
import huit from "../../assets/image/SaritaLimbu.jpg"
import neuf from "../../assets/image/AlexGonley.jpg"
import dix from "../../assets/image/AlexGonley.jpg"
import onze from "../../assets/image/AlexGonley.jpg"
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
import { FaArrowUp } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

import "./tableResponsive.scss"
import ModalAdd from '../modal/ModalAdd';

const TableResponsive = () => {
    const tableRef = useRef(null);
    const searchRef = useRef(null);
    const [searchType, setSearchType] = useState('name');

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);


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
                visible_row.style.backgroundColor = (i % 2 === 0) ? '#f1f1f1' : '#fff';
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
                    {/* <h1>Courrier</h1> */}
                    <select className='searchByeverything' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                        <option value="name">Search by Name</option>
                        <option value="id">Search by ID</option>
                    </select>
                    <div className="input-group">
                        <input type="search" placeholder="Search Data..." ref={searchRef} />
                        <img src={search} alt="" />
                    </div>
                    <div className='option_right'>
                        <div className="export__file">
                            <label htmlFor="export-file" className="export__file-btn" title="Export File"></label>
                            <input type="checkbox" id="export-file" />
                            <div className="export__file-options">
                                <label>Export As &nbsp; &#10140;</label>
                                <label htmlFor="export-file" id="toPDF">PDF <img src="../../assets/images/pdf.png" alt="" /></label>
                                <label htmlFor="export-file" id="toJSON">JSON <img src="../../assets/images/json.png" alt="" /></label>
                                <label htmlFor="export-file" id="toCSV">CSV <img src="../../assets/images/csv.png" alt="" /></label>
                                <label htmlFor="export-file" id="toEXCEL">EXCEL <img src="../../assets/images/excel.png" alt="" /></label>
                            </div>
                        </div>
                            <MdAdd onClick={toggleModal} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
                    </div>
                </section>
                <section className="table__body">
                    <table className='table'>
                        <thead className='thead'>
                            <tr>
                                <th className='th'>Id <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Customer <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Location <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Order Date <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Status <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Amount <span className="icon-arrow"><FaArrowUp /></span></th>
                                <th className='th'>Actions <span className="icon-arrow"><FaArrowUp /></span></th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {[
                                { id: 1, img: un, name: "Zinzu Chan Lee", location: "Seoul", date: "17 Dec, 2022", status: "delivered", amount: "$128.90" },
                                { id: 2, img: deux, name: "Jeet Saru", location: "Kathmandu", date: "27 Aug, 2023", status: "cancelled", amount: "$5350.50" },
                                { id: 3, img: quatre, name: "Sonal Gharti", location: "Tokyo", date: "14 Mar, 2023", status: "shipped", amount: "$210.40" },
                                { id: 4, img: trois, name: "Alson GC", location: "New Delhi", date: "25 May, 2023", status: "delivered", amount: "$149.70" },
                                { id: 5, img: cinq, name: "Sarita Limbu", location: "Paris", date: "23 Apr, 2023", status: "pending", amount: "$399.99" },
                                { id: 6, img: six, name: "Alex Gonley", location: "London", date: "23 Apr, 2023", status: "cancelled", amount: "$399.99" },
                                { id: 7, img: sept, name: "Jeet Saru", location: "New York", date: "20 May, 2023", status: "delivered", amount: "$399.99" },
                                { id: 8, img: huit, name: "Aayat Ali Khan", location: "Islamabad", date: "30 Feb, 2023", status: "pending", amount: "$149.70" },
                                { id: 9, img: neuf, name: "Alson GC", location: "Dhaka", date: "22 Dec, 2023", status: "cancelled", amount: "$249.99" },
                                { id: 10, img: dix, name: "Alson GC", location: "Dhaka", date: "22 Dec, 2023", status: "cancelled", amount: "$249.99" },
                                { id: 11, img: onze, name: "Alson GC", location: "Dhaka", date: "22 Dec, 2023", status: "cancelled", amount: "$249.99" },
                                { id: 12, img: onze, name: "Alson GC", location: "Dhaka", date: "22 Dec, 2023", status: "cancelled", amount: "$249.99" },
                                { id: 13, img: onze, name: "Alson GC", location: "Dhaka", date: "22 Dec, 2023", status: "cancelled", amount: "$249.99" },
                            ].map((item) => (
                                <tr key={item.id}>
                                    <td className="td">{item.id}</td>
                                    <td className="td"><img src={item.img} alt="" />{item.name}</td>
                                    <td className="td">{item.location}</td>
                                    <td className="td">{item.date}</td>
                                    <td className="td">
                                        <p className={`status ${item.status}`}>{item.status}</p>
                                    </td>
                                    <td className="td"><strong>{item.amount}</strong></td>
                                    <td className="td">
                                        <MdEdit className="action-icon icon" title="Update" />
                                        <MdDelete className="action-icon icon" title="Delete" />
                                        <MdVisibility className="action-icon icon" title="Read" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
            <AnimatePresence>
                <ModalAdd isOpen={isOpen} toggleModal={toggleModal} />
            </AnimatePresence>

        </div>
    )
}

export default TableResponsive
















































































// import React, { useEffect, useRef, useState } from 'react';
// import search from "../../assets/image/search.png";
// // import data from './data.json'; // Assurez-vous que le chemin est correct
// import data from '../../Data/dataTableau.json'; // Assurez-vous que le chemin est correct
// import "./tableResponsive.scss";

// const TableResponsive = () => {
//     const [orders, setOrders] = useState(data);
//     const tableRef = useRef(null);
//     const searchRef = useRef(null);

//     useEffect(() => {
//         const searchInput = searchRef.current;
//         const table = tableRef.current;
//         const tableRows = table.querySelectorAll('tbody tr');

//         const searchTable = () => {
//             tableRows.forEach((row, i) => {
//                 let table_data = row.textContent.toLowerCase(),
//                     search_data = searchInput.value.toLowerCase();

//                 row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
//                 row.style.setProperty('--delay', i / 25 + 's');
//             });

//             document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
//                 visible_row.style.backgroundColor = (i % 2 === 0) ? '#f1f1f1' : '#fff';
//                 visible_row.style.animationDelay = `${i * 0.1}s`;
//             });
//         };

//         searchInput.addEventListener('input', searchTable);

//         return () => {
//             searchInput.removeEventListener('input', searchTable);
//         };
//     }, []);

//     return (
//         <main className="table" ref={tableRef} id="customers_table">
//             <section className="table__header">
//                 <h1>Customer's Orders</h1>
//                 <div className="input-group">
//                     <input type="search" placeholder="Search Data..." ref={searchRef} />
//                     <img src={search} alt="" />
//                 </div>
//                 <div className="export__file">
//                     <label htmlFor="export-file" className="export__file-btn" title="Export File"></label>
//                     <input type="checkbox" id="export-file" />
//                     <div className="export__file-options">
//                         <label>Export As &nbsp; &#10140;</label>
//                         <label htmlFor="export-file" id="toPDF">PDF <img src="../../assets/images/pdf.png" alt="" /></label>
//                         <label htmlFor="export-file" id="toJSON">JSON <img src="../../assets/images/json.png" alt="" /></label>
//                         <label htmlFor="export-file" id="toCSV">CSV <img src="../../assets/images/csv.png" alt="" /></label>
//                         <label htmlFor="export-file" id="toEXCEL">EXCEL <img src="../../assets/images/excel.png" alt="" /></label>
//                     </div>
//                 </div>
//             </section>

//             <section className="table__body">
//                 <table className='table'>
//                     <thead className='thead'>
//                         <tr>
//                             <th className='th'> Id </th>
//                             <th className='th'> Customer </th>
//                             <th className='th'> Location </th>
//                             <th className='th'> Order Date </th>
//                             <th className='th'> Status </th>
//                             <th className='th'> Amount </th>
//                         </tr>
//                     </thead>
//                     <tbody className='tbody'>
//                         {orders.map(order => (
//                             <tr key={order.id}>
//                                 <td className="td">{order.id}</td>
//                                 <td className="td"><img src={order.image} alt="" /> {order.customer}</td>
//                                 {/* <td className="td"><img src={require(`${order.image}`)} alt="" /> {order.customer}</td> */}
//                                 <td className="td">{order.location}</td>
//                                 <td className="td">{order.orderDate}</td>
//                                 <td className="td">
//                                     <p className={`status ${order.status}`}>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</p>
//                                 </td>
//                                 <td className="td"><strong>{order.amount}</strong></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </section>
//         </main>
//     );
// };

// export default TableResponsive;
