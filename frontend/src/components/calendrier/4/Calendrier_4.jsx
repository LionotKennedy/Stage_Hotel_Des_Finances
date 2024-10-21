// import React, { useState } from 'react';
// import './calendrier_4.css'; // Crée un fichier CSS pour le style

// const joursSemaine = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
// const moisNoms = [
//   'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
//   'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
// ];

// const Calendrier_4 = () => {
//   const [dateActuelle, setDateActuelle] = useState(new Date());
//   const moisActuel = dateActuelle.getMonth();
//   const anneeActuelle = dateActuelle.getFullYear();

//   const premierJourDuMois = new Date(anneeActuelle, moisActuel, 1);
//   const dernierJourDuMois = new Date(anneeActuelle, moisActuel + 1, 0);
//   const dernierJourMoisPrecedent = new Date(anneeActuelle, moisActuel, 0).getDate();

//   // Calcule combien de jours du mois précédent sont nécessaires pour compléter la première semaine
//   const joursPrecedents = premierJourDuMois.getDay() === 0 ? 6 : premierJourDuMois.getDay() - 1;
//   const joursSuivants = 42 - (joursPrecedents + dernierJourDuMois.getDate());

//   const changerMois = (direction) => {
//     const nouvelleDate = new Date(anneeActuelle, moisActuel + direction, 1);
//     setDateActuelle(nouvelleDate);
//   };

//   const genererJoursCalendrier = () => {
//     let jours = [];

//     // Jours du mois précédent
//     for (let i = joursPrecedents; i > 0; i--) {
//       jours.push(<div className="jour inactif" key={`prev-${i}`}>{dernierJourMoisPrecedent - i + 1}</div>);
//     }

//     // Jours du mois actuel
//     for (let i = 1; i <= dernierJourDuMois.getDate(); i++) {
//       jours.push(<div className="jour actif" key={i}>{i}</div>);
//     }

//     // Jours du mois suivant
//     for (let i = 1; i <= joursSuivants; i++) {
//       jours.push(<div className="jour inactif" key={`next-${i}`}>{i}</div>);
//     }

//     return jours;
//   };

//   return (
//     <div className="calendrier-container">
//       <div className="calendrier-entete">
//         <button onClick={() => changerMois(-1)}>&laquo;</button>
//         <h2>{moisNoms[moisActuel]} {anneeActuelle}</h2>
//         <button onClick={() => changerMois(1)}>&raquo;</button>
//       </div>
//       <div className="calendrier-jours-semaine">
//         {joursSemaine.map((jour, index) => (
//           <div key={index} className="jour-semaine">{jour}</div>
//         ))}
//       </div>
//       <div className="calendrier-jours">
//         {genererJoursCalendrier()}
//       </div>
//     </div>
//   );
// };

// export default Calendrier_4;



































import React, { useState } from 'react';
import './calendrier_4.css';

const joursSemaine = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const moisNoms = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

const Calendrier_4 = () => {
  const [dateActuelle, setDateActuelle] = useState(new Date());
  const moisActuel = dateActuelle.getMonth();
  const anneeActuelle = dateActuelle.getFullYear();
  const aujourdHui = new Date(); // Date d'aujourd'hui

  const premierJourDuMois = new Date(anneeActuelle, moisActuel, 1);
  const dernierJourDuMois = new Date(anneeActuelle, moisActuel + 1, 0);
  const dernierJourMoisPrecedent = new Date(anneeActuelle, moisActuel, 0).getDate();

  const joursPrecedents = premierJourDuMois.getDay() === 0 ? 6 : premierJourDuMois.getDay() - 1;
  const joursSuivants = 42 - (joursPrecedents + dernierJourDuMois.getDate());

  const changerMois = (direction) => {
    const nouvelleDate = new Date(anneeActuelle, moisActuel + direction, 1);
    setDateActuelle(nouvelleDate);
  };

  const genererJoursCalendrier = () => {
    let jours = [];

    // Jours du mois précédent
    for (let i = joursPrecedents; i > 0; i--) {
      jours.push(<div className="jour inactif" key={`prev-${i}`}>{dernierJourMoisPrecedent - i + 1}</div>);
    }

    // Jours du mois actuel
    for (let i = 1; i <= dernierJourDuMois.getDate(); i++) {
      const estAujourdHui = 
        i === aujourdHui.getDate() && 
        moisActuel === aujourdHui.getMonth() && 
        anneeActuelle === aujourdHui.getFullYear();

      jours.push(
        <div 
          className={`jour actif ${estAujourdHui ? 'aujourd-hui' : ''}`} 
          key={i}
        >
          {i}
        </div>
      );
    }

    // Jours du mois suivant
    for (let i = 1; i <= joursSuivants; i++) {
      jours.push(<div className="jour inactif" key={`next-${i}`}>{i}</div>);
    }

    return jours;
  };

  return (
    <div className="calendrier-container">
      <div className="calendrier-entete">
        <button onClick={() => changerMois(-1)}>&laquo;</button>
        <h2>{moisNoms[moisActuel]} {anneeActuelle}</h2>
        <button onClick={() => changerMois(1)}>&raquo;</button>
      </div>
      <div className="calendrier-jours-semaine">
        {joursSemaine.map((jour, index) => (
          <div key={index} className="jour-semaine">{jour}</div>
        ))}
      </div>
      <div className="calendrier-jours">
        {genererJoursCalendrier()}
      </div>
    </div>
  );
};

export default Calendrier_4;
