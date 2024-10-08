// // src/PdfContent.jsx
// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//     page: {
//         padding: 30,
//         backgroundColor: '#E4E4E4',
//     },
//     section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1,
//     },
//     title: {
//         fontSize: 24,
//         textAlign: 'center',
//         marginBottom: 20,
//     },
//     text: {
//         fontSize: 14,
//         marginBottom: 10,
//     },
// });

// const PdfContent = () => (
//     <Document>
//         <Page size="A4" style={styles.page}>
//             <View style={styles.section}>
//                 <Text style={styles.title}>Coucou</Text>
//                 <Text style={styles.text}>Bonjour, ceci est un exemple de PDF généré dynamiquement.</Text>
//             </View>
//         </Page>
//     </Document>
// );

// export default PdfContent;

































// src/PdfContent.jsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 14,
        marginBottom: 10,
    },
});

const PdfContent = ({ data }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>FOLDER DATA REPORT</Text>
                    {data.map((folder, index) => (
                        <React.Fragment key={index}>
                            <Text style={styles.text}>{`Nom : ${folder.id_nature.nom_depose}`}</Text>
                            <Text style={styles.text}>{`Prénom : ${folder.id_nature.prenom_depose}`}</Text>
                            <Text style={styles.text}>{`Matricule : ${folder.id_nature.matricule}`}</Text>
                            <Text style={styles.text}>{`Expediteur : ${folder.expiditeur}`}</Text>
                            <Text style={styles.text}>{`Destination : ${folder.destination}`}</Text>
                            <Text style={styles.text}>{`Description : ${folder.id_nature.description}`}</Text>
                            <Text style={styles.text}>{`Numero Bordereaux : ${folder.numero_bordereaux}`}</Text>
                            <Text style={styles.text}>{`Date Départ : ${new Date(folder.date_depart).toLocaleDateString()}`}</Text>
                        </React.Fragment>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

export default PdfContent;




















// // src/PdfContent.jsx
// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// // Create styles for the PDF
// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     backgroundColor: '#E4E4E4',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 14,
//     marginBottom: 10,
//   },
// });

// // PDF content component
// const PdfContent = ({ folders }) => {
//   return (
//     <Document>
//       <Page style={styles.page}>
//         <Text style={styles.title}>Folders Report</Text>
//         {folders.map((folder, index) => (
//           <View key={index} style={styles.section}>
//             <Text style={styles.text}>Nom: {folder.id_nature.nom_depose}</Text>
//             <Text style={styles.text}>Prénom: {folder.id_nature.prenom_depose}</Text>
//             <Text style={styles.text}>Matricule: {folder.id_nature.matricule}</Text>
//             <Text style={styles.text}>Expediteur: {folder.expiditeur}</Text>
//             <Text style={styles.text}>Destination: {folder.destination}</Text>
//             <Text style={styles.text}>Description: {folder.id_nature.description}</Text>
//             <Text style={styles.text}>Numero Bordereaux: {folder.numero_bordereaux}</Text>
//             <Text style={styles.text}>Date Départ: {new Date(folder.date_depart).toLocaleDateString()}</Text>
//           </View>
//         ))}
//       </Page>
//     </Document>
//   );
// };

// export default PdfContent;




































// // src/PdfContent.jsx
// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// // Create styles
// const styles = StyleSheet.create({
//     page: {
//         flexDirection: 'row',
//         padding: 30,
//     },
//     section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1,
//     },
// });

// const PdfContent = ({ folders }) => {
//     return (
//         <Document>
//             <Page size="A4" style={styles.page}>
//                 {folders.map((folder, index) => (
//                     <View key={index} style={styles.section}>
//                         <Text>Nom: {folder.id_nature.nom_depose}</Text>
//                         <Text>Prénom: {folder.id_nature.prenom_depose}</Text>
//                         <Text>Matricule: {folder.id_nature.matricule}</Text>
//                         <Text>Expéditeur: {folder.expiditeur}</Text>
//                         <Text>Destination: {folder.destination}</Text>
//                         <Text>Description: {folder.id_nature.description}</Text>
//                         <Text>Numéro Bordereaux: {folder.numero_bordereaux}</Text>
//                         <Text>Date Départ: {new Date(folder.date_depart).toLocaleDateString()}</Text>
//                     </View>
//                 ))}
//             </Page>
//         </Document>
//     );
// };

// export default PdfContent;
