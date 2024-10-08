import React from 'react';
import { docxtemplater } from 'docxtemplater';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

const ContentToPrint = ({ folders }) => {
    if (!folders || folders.length === 0) {
        return <div>No data available to print</div>;
    }

    const createDocx = () => {
        const zip = new JSZip();
        const doc = new docxtemplater();

        // Création du document Word
        const docx = {
            content: [],
            styles: [],
            fonts: []
        };
        zip.file("document.docx", docx);

        // Ajout du contenu
        const content = {
            tables: folders.map((folder, index) => ({
                rows: [
                    { cells: [
                        { text: folder.id_nature.nom_depose },
                        { text: folder.id_nature.prenom_depose },
                        { text: folder.id_nature.matricule },
                        { text: folder.expiditeur },
                        { text: folder.destination },
                        { text: folder.id_nature.description },
                        { text: folder.numero_bordereaux },
                        { text: new Date(folder.date_depart).toLocaleDateString() }
                    ]},
                    { text: '' }
                ],
                headerRow: true
            }))
        };

        // Ajout des styles
        docx.styles = [
            { name: 'Normal', font: { size: 11 } },
            { name: 'Header', bold: true, font: { size: 14 } }
        ];

        // Ajout des polices
        docx.fonts = ['Helvetica'];

        // Chargement du template
        const reader = new FileReader();
        reader.onload = function () {
            var base64 = reader.result;
            var zip = new JSZip();
            zip.loadAsync(base64)
                .then(function () {
                    var doc = new docxtemplater();
                    var content = zip.files['word/document.xml'];
                    doc.read(content, 'string');

                    var ctx = {};
                    ctx.tables = contentplatemplates.content;
                    doc.fill(ctx);

                    var buf = doc.render({
                        template: docx,
                        renderStyle: 'binary'
                    });

                    var blob = new Blob([buf], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
                    saveAs(blob, 'MesDossiers.docx');
                })
                .catch(function (err) {
                    console.error(err);
                });
        };
        reader.readAsArrayBuffer(zip.generate({type:'nodebuffer'}));

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

    return createDocx();
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
