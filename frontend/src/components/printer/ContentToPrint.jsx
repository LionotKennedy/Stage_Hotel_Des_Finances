
import React from 'react';

const ContentToPrint = ({ folders }) => {
    // if (!folders || folders.length === 0) {
    //     return <div>No data available to print</div>;
    // }

    if (!Array.isArray(folders)) {
        return <div>Folders is not an array</div>;
    }

    if (folders.length === 0) {
        return <div>No data available to print</div>;
    }

    return (
        <div>
            <h1>Folder Data Report</h1>
            <table id='teste' style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
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

