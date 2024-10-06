// // ContentToPrint.js
// import React from 'react';

// const ContentToPrint = () => {
//     return (
//         <div>
//             <h1>Titre du Document</h1>
//             <p>Ceci est le contenu que vous souhaitez imprimer dans le PDF.</p>
//             <p>Ceci est le contenu que vous souhaitez imprimer dans le PDF Fory eeeee.</p>
//             {/* Ajoutez plus de contenu ici */}
//         </div>
//     );
// };

// export default ContentToPrint;















// // ContentToPrint.js
// import React from 'react';

// const ContentToPrint = ({ folders }) => {
//     if (!folders || folders.length === 0) {
//       return <div>No data available to print</div>;
//     }
  
//     return (
//       <div>
//         <h1>Folder Data Report</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Nom</th>
//               <th>Prénom</th>
//               <th>Matricule</th>
//               <th>Expediteur</th>
//               <th>Destination</th>
//               <th>Description</th>
//               <th>Numero Bordereaux</th>
//               <th>Date Départ</th>
//             </tr>
//           </thead>
//           <tbody>
//             {folders.map((folder, index) => (
//               <tr key={index}>
//                 <td>{folder.id_nature.nom_depose}</td>
//                 <td>{folder.id_nature.prenom_depose}</td>
//                 <td>{folder.id_nature.matricule}</td>
//                 <td>{folder.expiditeur}</td>
//                 <td>{folder.destination}</td>
//                 <td>{folder.id_nature.description}</td>
//                 <td>{folder.numero_bordereaux}</td>
//                 <td>{new Date(folder.date_depart).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };
  

// export default ContentToPrint;




















// // ContentToPrint.js
// import React from 'react';

// const ContentToPrint = ({ folders }) => {
//     if (!folders || folders.length === 0) {
//         return <div>No data available to print</div>;
//     }

//     return (
//         <div>
//             <h1>Folder Data Report</h1>
//             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                 <thead>
//                     <tr>
//                         <th style={styles.th}>Nom</th>
//                         <th style={styles.th}>Prénom</th>
//                         <th style={styles.th}>Matricule</th>
//                         <th style={styles.th}>Expéditeur</th>
//                         <th style={styles.th}>Destination</th>
//                         <th style={styles.th}>Description</th>
//                         <th style={styles.th}>Numero Bordereaux</th>
//                         <th style={styles.th}>Date Départ</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {folders.map((folder, index) => (
//                         <tr key={index}>
//                             <td style={styles.td}>{folder.id_nature.nom_depose}</td>
//                             <td style={styles.td}>{folder.id_nature.prenom_depose}</td>
//                             <td style={styles.td}>{folder.id_nature.matricule}</td>
//                             <td style={styles.td}>{folder.expiditeur}</td>
//                             <td style={styles.td}>{folder.destination}</td>
//                             <td style={styles.td}>{folder.id_nature.description}</td>
//                             <td style={styles.td}>{folder.numero_bordereaux}</td>
//                             <td style={styles.td}>{new Date(folder.date_depart).toLocaleDateString()}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <div style={styles.pageBreak}></div> {/* This will insert a page break */}
//         </div>
//     );
// };

// // Styles for the table
// const styles = {
//     th: {
//         border: '1px solid black',
//         padding: '8px',
//         textAlign: 'left',
//         backgroundColor: '#f2f2f2',
//     },
//     td: {
//         border: '1px solid black',
//         padding: '8px',
//     },
//     pageBreak: {
//         pageBreakAfter: 'always',
//     },
// };

// export default ContentToPrint;



























// import React from 'react';

// const ContentToPrint = ({ selectedData }) => {
//   return (
//     <div>
//       {selectedData && selectedData.map((item, index) => (
//         <div key={index}>
//           <h2>{item.nom_depose}</h2>
//           <p>Matricule: {item.matricule}</p>
//           {/* Ajoutez ici toutes les autres propriétés nécessaires */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ContentToPrint;





























import React from 'react';

const ContentToPrint = ({ folders }) => {
    if (!folders || folders.length === 0) {
        return <div>No data available to print</div>;
    }

    return (
        <div>
            <h1>Folder Data Report</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                <thead>
                    <tr>
                        <th style={styles.th}>Nom</th>
                        <th style={styles.th}>Prénom</th>
                        <th style={styles.th}>Matricule</th>
                        <th style={styles.th}>Expéditeur</th>
                        <th style={styles.th}>Destination</th>
                        <th style={styles.th}>Description</th>
                        <th style={styles.th}>Numero Bordereaux</th>
                        <th style={styles.th}>Date Départ</th>
                    </tr>
                </thead>
                <tbody>
                    {folders.map((folder, index) => (
                        <tr key={index}>
                            <td style={styles.td}>{folder.id_nature.nom_depose}</td>
                            <td style={styles.td}>{folder.id_nature.prenom_depose}</td>
                            <td style={styles.td}>{folder.id_nature.matricule}</td>
                            <td style={styles.td}>{folder.expiditeur}</td>
                            <td style={styles.td}>{folder.destination}</td>
                            <td style={styles.td}>{folder.id_nature.description}</td>
                            <td style={styles.td}>{folder.numero_bordereaux}</td>
                            <td style={styles.td}>{new Date(folder.date_depart).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={styles.pageBreak}></div>
        </div>
    );
};

const styles = {
    th: {
        border: '1px solid black',
        padding: '5px',
        textAlign: 'center',
        backgroundColor: '#f2f2f2',
        fontSize: '12px',
    },
    td: {
        border: '1px solid black',
        padding: '5px',
        textAlign: 'center',
        wordWrap: 'break-word',
    },
    pageBreak: {
        pageBreakAfter: 'always',
    },
};

export default ContentToPrint;





























































// import React from 'react';
// import { docxtemplater } from 'docxtemplater';
// import { saveAs } from 'file-saver';
// import JSZip from 'jszip';

// const ContentToPrint = ({ folders }) => {
//     if (!folders || folders.length === 0) {
//         return <div>No data available to print</div>;
//     }

//     const createDocx = () => {
//         const zip = new JSZip();
//         const doc = new docxtemplater();

//         // Création du document Word
//         const docx = {
//             content: [],
//             styles: [],
//             fonts: []
//         };
//         zip.file("document.docx", docx);

//         // Ajout du contenu
//         const content = {
//             tables: folders.map((folder, index) => ({
//                 rows: [
//                     { cells: [
//                         { text: folder.id_nature.nom_depose },
//                         { text: folder.id_nature.prenom_depose },
//                         { text: folder.id_nature.matricule },
//                         { text: folder.expiditeur },
//                         { text: folder.destination },
//                         { text: folder.id_nature.description },
//                         { text: folder.numero_bordereaux },
//                         { text: new Date(folder.date_depart).toLocaleDateString() }
//                     ]},
//                     { text: '' }
//                 ],
//                 headerRow: true
//             }))
//         };

//         // Ajout des styles
//         docx.styles = [
//             { name: 'Normal', font: { size: 11 } },
//             { name: 'Header', bold: true, font: { size: 14 } }
//         ];

//         // Ajout des polices
//         docx.fonts = ['Helvetica'];

//         // Chargement du template
//         const reader = new FileReader();
//         reader.onload = function () {
//             var base64 = reader.result;
//             var zip = new JSZip();
//             zip.loadAsync(base64)
//                 .then(function () {
//                     var doc = new docxtemplater();
//                     var content = zip.files['word/document.xml'];
//                     doc.read(content, 'string');

//                     var ctx = {};
//                     ctx.tables = contentplatemplates.content;
//                     doc.fill(ctx);

//                     var buf = doc.render({
//                         template: docx,
//                         renderStyle: 'binary'
//                     });

//                     var blob = new Blob([buf], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
//                     saveAs(blob, 'MesDossiers.docx');
//                 })
//                 .catch(function (err) {
//                     console.error(err);
//                 });
//         };
//         reader.readAsArrayBuffer(zip.generate({type:'nodebuffer'}));

//         return (
//             <div>
//                 <h1>Folder Data Report</h1>
//                 <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
//                     <thead>
//                         <tr>
//                             <th style={styles.th}>Nom</th>
//                             <th style={styles.th}>Prénom</th>
//                             <th style={styles.th}>Matricule</th>
//                             <th style={styles.th}>Expéditeur</th>
//                             <th style={styles.th}>Destination</th>
//                             <th style={styles.th}>Description</th>
//                             <th style={styles.th}>Numero Bordereaux</th>
//                             <th style={styles.th}>Date Départ</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {folders.map((folder, index) => (
//                             <tr key={index}>
//                                 <td style={styles.td}>{folder.id_nature.nom_depose}</td>
//                                 <td style={styles.td}>{folder.id_nature.prenom_depose}</td>
//                                 <td style={styles.td}>{folder.id_nature.matricule}</td>
//                                 <td style={styles.td}>{folder.expiditeur}</td>
//                                 <td style={styles.td}>{folder.destination}</td>
//                                 <td style={styles.td}>{folder.id_nature.description}</td>
//                                 <td style={styles.td}>{folder.numero_bordereaux}</td>
//                                 <td style={styles.td}>{new Date(folder.date_depart).toLocaleDateString()}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div style={styles.pageBreak}></div>
//             </div>
//         );
//     };

//     return createDocx();
// };

// const styles = {
//     th: {
//         border: '1px solid black',
//         padding: '5px',
//         textAlign: 'center',
//         backgroundColor: '#f2f2f2',
//         fontSize: '12px',
//     },
//     td: {
//         border: '1px solid black',
//         padding: '5px',
//         textAlign: 'center',
//         wordWrap: 'break-word',
//     },
//     pageBreak: {
//         pageBreakAfter: 'always',
//     },
// };

// export default ContentToPrint;































































// import React from "react";
// import { docxtemplater } from 'docxtemplater';
// import { saveAs } from 'file-saver';

// class ContentToPrint extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             error: null,
//             result: null
//         };
//     }

//     createDocx = async () => {
//         try {
//             this.setState({ loading: true });
            
//             // Création du template XML
//             const xmlTemplate = `
//             <document>
//                 <table>
//                     <tr>
//                         <td><w:p><w:r><t>id_nature</t></w:r></w:p></td>
//                         <td><w:p><w:r><t>prenom_depose</t></w:r></w:p></td>
//                         <td><w:p><w:r><t>matricule</t></w:r></w:p></td>
//                         <td><w:p><w:r><t>date_depose</t></w:r></w:p></td>
//                         <td><w:p><w:r><t>adresse</t></w:r></w:p></td>
//                         <td><w:p><w:r><t>code_postal</t></w:r></w:p></td>
//                         <td><w:p><w:r><t>ville</t></w:r></w:p></td>
//                         <td><w:p><w:r><t>telephone</t></w:r></w:p></td>
//                         <td><w:p><w:r><t>email</t></w:r></w:p></td>
//                     </tr>
//                 </table>
//             </document>
//             `;

//             // Création du document
//             const zip = new JSZip();
//             const doc = new docxtemplater();
//             const docx = {
//                 content: [],
//                 styles: [],
//                 fonts: []
//             };
//             zip.file("document.docx", docx);

//             // Lecture du template XML
//             var content = new Blob([xmlTemplate], {type: 'text/xml'});
//             doc.read(content, 'string');

//             // Remplissage du template
//             var ctx = {};
//             ctx.folders = this.props.folders;
//             doc.fill(ctx);

//             // Rendu du document
//             var buf = doc.render({
//                 template: docx,
//                 renderStyle: 'binary'
//             });

//             // Sauvegarde du document
//             var blob = new Blob([buf], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
//             saveAs(blob, 'MesDossiers.docx');

//             this.setState({ 
//                 loading: false, 
//                 result: 'Document généré avec succès',
//                 error: null 
//             });
//         } catch (error) {
//             console.error('Erreur lors de la génération du document:', error);
//             this.setState({ 
//                 loading: false, 
//                 error: 'Une erreur s\'est produite lors de la génération du document.',
//                 result: null 
//             });
//         }
//     }

//     render() {
//         if (this.state.loading) {
//             return <p>Chargement...</p>;
//         }

//         if (this.state.error) {
//             return <p>{this.state.error}</p>;
//         }

//         if (this.state.result) {
//             return <p>{this.state.result}</p>;
//         }

//         return (
//             <button onClick={this.createDocx}>
//                 Générer le document
//             </button>
//         );
//     }
// }

// export default ContentToPrint;
