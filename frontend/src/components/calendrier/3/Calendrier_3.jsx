// import React from 'react';
// import './calendrier_3.css';
// const Calendrier_3 = ({ date = new Date() }) => {
//     const joursDuMois = [];
//     const premierJour = new Date(date.getFullYear(), date.getMonth(), 1);
//     const dernierJour = new Date(premierJour.getFullYear(), premierJour.getMonth() + 11, 0);
  
//     while (premierJour <= dernierJour) {
//       joursDuMois.push(new Date(premierJour));
//       premierJour.setDate(premierJour.getDate() + 1);
//     }
  
//     return (
//       <div className="calendrier">
//         <h2>{mois[date.getMonth()]}</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Lundi</th>
//               <th>Mardi</th>
//               <th>Mercredi</th>
//               <th>Jeudi</th>
//               <th>Vendredi</th>
//               <th>Samedi</th>
//               <th>Dimanche</th>
//             </tr>
//           </thead>
//           <tbody>
//             {joursDuMois.map(jour => (
//               <tr key={jour.getTime()}>
//                 {[...Array(7)].map((_, weekDayIndex) => {
//                   const dayOfWeek = jour.getDay() + weekDayIndex - jour.getDay();
//                   if (dayOfWeek === 0 || dayOfWeek > 6) return null;
//                   return (
//                     <td key={dayOfWeek} className={`cell ${jour.toDateString()}`}>
//                       {jour.getDate()}
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };
  
  

// export default Calendrier_3;































import React from 'react';
import './calendrier_3.css';

const mois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
];

const Calendrier_3 = ({ date = new Date() }) => {
  const joursDuMois = [];
  const premierJour = new Date(date.getFullYear(), date.getMonth(), 1);
  const dernierJour = new Date(premierJour.getFullYear(), premierJour.getMonth() + 11, 0);

  while (premierJour <= dernierJour) {
    joursDuMois.push(new Date(premierJour));
    premierJour.setDate(premierJour.getDate() + 1);
  }

  return (
    <div className="calendrier">
      <h2>{mois[date.getMonth()]}</h2>
      <table>
        <thead>
          <tr>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
            <th>Samedi</th>
            <th>Dimanche</th>
          </tr>
        </thead>
        <tbody>
          {joursDuMois.map(jour => (
            <tr key={jour.getTime()}>
              {[...Array(7)].map((_, weekDayIndex) => {
                const dayOfWeek = jour.getDay() + weekDayIndex - jour.getDay();
                if (dayOfWeek === 0 || dayOfWeek > 6) return null;
                return (
                  <td key={dayOfWeek} className={`cell ${jour.toDateString()}`}>
                    {jour.getDate()}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendrier_3;
