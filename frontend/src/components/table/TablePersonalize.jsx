// import React, { useEffect, useRef, useState } from 'react';
// import "./tablepersonalize.scss"
// import search from "../../assets/image/search.png"
// import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
// import { FaArrowUp } from 'react-icons/fa';
// import { AnimatePresence } from 'framer-motion';
// import ModalAdd from '../modal/ModalAdd';

// const TablePersonalize = props => {

//     const tableRef = useRef(null);
//     const searchRef = useRef(null);
//     const [searchType, setSearchType] = useState('name');

//     const [isOpen, setIsOpen] = useState(false);

//     const toggleModal = () => setIsOpen(!isOpen);


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


//     // ENATHOR CODE FOR USE A TABLES ONLY FOR MORE COMPONENTS

//     const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

//     const [dataShow, setDataShow] = useState(initDataShow)

//     let pages = 1

//     let range = []

//     if (props.limit !== undefined) {
//         let page = Math.floor(props.bodyData.length / Number(props.limit))
//         pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
//         range = [...Array(pages).keys()]
//     }

//     const [currPage, setCurrPage] = useState(0)

//     const selectPage = page => {
//         const start = Number(props.limit) * page
//         const end = start + Number(props.limit)

//         setDataShow(props.bodyData.slice(start, end))

//         setCurrPage(page)
//     }


//     const handleRead = (id) => {
//         console.log('Read item with id:', id);
//         // Logique pour lire les détails de l'élément
//     };

//     const handleEdit = (id) => {
//         console.log('Edit item with id:', id);
//         // Logique pour éditer l'élément
//     };

//     const handleDelete = (id) => {
//         console.log('Delete item with id:', id);
//         // Logique pour supprimer l'élément
//     };



//     return (
//         <div className='container__table'>
//             <main className="table" ref={tableRef} id="customers_table">
//                 <section className="table__header">
//                     {/* <h1>Customer's Orders</h1> */}
//                     <select className='searchByeverythings' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
//                         <option value="name">Search by Name</option>
//                         <option value="id">Search by ID</option>
//                     </select>
//                     <div className="input-group">
//                         <input type="search" placeholder="Search Data..." ref={searchRef} />
//                         <img src={search} alt="" />
//                     </div>
//                     <div className='option_right'>
//                         <div className="export__file">
//                             <label htmlFor="export-file" className="export__file-btn" title="Export File"></label>
//                             <input type="checkbox" id="export-file" />
//                             <div className="export__file-options">
//                                 <label>Export As &nbsp; &#10140;</label>
//                                 <label htmlFor="export-file" id="toPDF">PDF <img src="../../assets/images/pdf.png" alt="" /></label>
//                                 <label htmlFor="export-file" id="toJSON">JSON <img src="../../assets/images/json.png" alt="" /></label>
//                                 <label htmlFor="export-file" id="toCSV">CSV <img src="../../assets/images/csv.png" alt="" /></label>
//                                 <label htmlFor="export-file" id="toEXCEL">EXCEL <img src="../../assets/images/excel.png" alt="" /></label>
//                             </div>
//                         </div>
//                             <MdAdd onClick={toggleModal} className="icon_add" style={{ marginLeft: '10px', fontSize: '24px' }} />
//                     </div>
//                 </section>
//                 <section className="table__body">
//                     <table className='table'>
//                         {
//                             props.headData && props.renderHead ? (
//                                 <thead className='thead'>
//                                     <tr>
//                                         {
//                                             props.headData.map((item, index) => props.renderHead(item, index))
//                                         }
//                                     </tr>
//                                 </thead>
//                             ) : null
//                         }
//                         {
//                             props.bodyData && props.renderBody ? (
//                                 <tbody className='tbody'>
//                                     {
//                                         dataShow.map((item, index) => props.renderBody(item, index))
//                                     }
//                                 </tbody>
//                             ) : null
//                         }
//                     </table>
//                 </section>
//                 {
//                     pages > 1 ? (
//                         <div className="table__pagination">
//                             {
//                                 range.map((item, index) => (
//                                     <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
//                                         {item + 1}
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                     ) : null
//                 }
//                 <AnimatePresence>
//                     <ModalAdd isOpen={isOpen} toggleModal={toggleModal} />
//                 </AnimatePresence>
//             </main>

//         </div>
//     )
// }

// export default TablePersonalize















































import React, { useEffect, useRef, useState } from 'react';
import "./tablepersonalize.scss";
import search from "../../assets/image/search.png";
import { MdEdit, MdDelete, MdVisibility, MdAdd } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';
import ModalAdd from '../modal/ModalAdd';

const TablePersonalize = props => {
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
                visible_row.style.backgroundColor = (i % 2 === 0) ? '--second-bg' : '--second-bg';
                visible_row.style.animationDelay = `${i * 0.1}s`;
            });
        };

        searchInput.addEventListener('input', searchTable);

        return () => {
            searchInput.removeEventListener('input', searchTable);
        };
    }, []);

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData;
    const [dataShow, setDataShow] = useState(initDataShow);
    let pages = 1;
    let range = [];

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit));
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
        range = [...Array(pages).keys()];
    }

    const [currPage, setCurrPage] = useState(0);

    const selectPage = page => {
        const start = Number(props.limit) * page;
        const end = start + Number(props.limit);

        setDataShow(props.bodyData.slice(start, end));
        setCurrPage(page);
    };

    const handleRead = (id) => {
        console.log('Read item with id:', id);
        // Logique pour lire les détails de l'élément
    };

    const handleEdit = (id) => {
        console.log('Edit item with id:', id);
        // Logique pour éditer l'élément
    };

    const handleDelete = (id) => {
        console.log('Delete item with id:', id);
        // Logique pour supprimer l'élément
    };

    return (
        <div className='container__table'>
            <main className="table" ref={tableRef} id="customers_table">
                <section className="table__header">
                    <select className='searchByeverythings' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
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
                        {props.headData && props.renderHead ? (
                            <thead className='thead'>
                                <tr>
                                    {props.headData.map((item, index) => props.renderHead(item, index))}
                                </tr>
                            </thead>
                        ) : null}
                        {props.bodyData && props.renderBody ? (
                            <tbody className='tbody'>
                                {dataShow.map((item, index) => props.renderBody(item, index))}
                            </tbody>
                        ) : null}
                    </table>
                </section>
                {pages > 1 ? (
                    <div className="table__pagination">
                        {range.map((item, index) => (
                            <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                {item + 1}
                            </div>
                        ))}
                    </div>
                ) : null}
                <AnimatePresence>
                    <ModalAdd isOpen={isOpen} toggleModal={toggleModal} />
                </AnimatePresence>
            </main>
        </div>
    );
};

export default TablePersonalize;
