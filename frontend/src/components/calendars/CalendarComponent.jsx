// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './calendarcomponent.scss';

// const localizer = momentLocalizer(moment);

// function CalendarComponent() {
//     const [events, setEvents] = useState([
//       {
//         title: 'Event 1',
//         start: new Date(),
//         end: new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
//       },
//       {
//         title: 'Event 2',
//         start: new Date(),
//         end: new Date(new Date().getTime() + 3 * 60 * 60 * 1000)
//       }
//     ]);
  
//     const handleSelectSlot = ({ start, end }) => {
//       alert(`selected slot: ${start}, ${end}`);
//     };
  
//     const handleSelectEvent = (event) => {
//       alert(`selected event: ${event.title}`);
//     };
  
//     const handleEventCreate = (event) => {
//       setEvents([...events, event]);
//     };
  
//     const handleEventResize = ({ event, delta }) => {
//       setEvents(events.map(e => (e.id === event.id ? {...e, start: event.start, end: event.end} : e)));
//     };
  
//     return (
//       <div className="calendar-container">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 500 }}
//           onSelectSlot={handleSelectSlot}
//           onSelectEvent={handleSelectEvent}
//           onEventCreate={handleEventCreate}
//           onEventResize={handleEventResize}
//         />
//       </div>
//     );
//   }
  

// export default CalendarComponent;




























// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'moment/locale/fr'; // Importez la locale française pour moment
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './calendarcomponent.scss';

// // Configurez moment avec la locale française
// moment.locale('fr');

// const localizer = momentLocalizer(moment);

// function CalendarComponent() {
//   const [events, setEvents] = useState([
//     {
//       title: 'Événement 1',
//       start: new Date(),
//       end: new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
//     },
//     {
//       title: 'Événement 2',
//       start: new Date(),
//       end: new Date(new Date().getTime() + 3 * 60 * 60 * 1000)
//     }
//   ]);

//   const handleSelectSlot = ({ start, end }) => {
//     alert(`slot sélectionné : ${start}, ${end}`);
//   };

//   const handleSelectEvent = (event) => {
//     alert(`événement sélectionné : ${event.title}`);
//   };

//   const handleEventCreate = (event) => {
//     setEvents([...events, event]);
//   };

//   const handleEventResize = ({ event, delta }) => {
//     setEvents(events.map(e => (e.id === event.id ? {...e, start: event.start, end: event.end} : e)));
//   };

//   return (
//     <div className="calendar-container">
//       <Calendar
//         key="calendar-key" // Ajoutez cette ligne
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         onSelectSlot={handleSelectSlot}
//         onSelectEvent={handleSelectEvent}
//         onEventCreate={handleEventCreate}
//         onEventResize={handleEventResize}
//       />
//     </div>
//   );
// }

// export default CalendarComponent;



























// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'moment/locale/fr'; // Importez la locale française pour moment
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './calendarcomponent.scss';

// // Configurez moment avec la locale française
// moment.locale('fr');

// const localizer = momentLocalizer(moment);

// function CalendarComponent() {
//   const [events, setEvents] = useState([
//     {
//       id: 1, // Ajoutez un identifiant unique
//       title: 'Événement 1',
//       start: new Date(),
//       end: new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
//     },
//     {
//       id: 2, // Ajoutez un identifiant unique
//       title: 'Événement 2',
//       start: new Date(),
//       end: new Date(new Date().getTime() + 3 * 60 * 60 * 1000)
//     }
//   ]);

//   const handleSelectSlot = ({ start, end }) => {
//     alert(`slot sélectionné : ${start}, ${end}`);
//   };

//   const handleSelectEvent = (event) => {
//     alert(`événement sélectionné : ${event.title}`);
//   };

//   const handleEventCreate = (event) => {
//     // Génération d'un nouvel ID unique pour chaque événement
//     const newEvent = { ...event, id: events.length + 1 };
//     setEvents([...events, newEvent]);
//   };

//   const handleEventResize = ({ event, delta }) => {
//     setEvents(events.map(e => (e.id === event.id ? { ...e, start: event.start, end: event.end } : e)));
//   };

//   return (
//     <div className="calendar-container">
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//         onSelectSlot={handleSelectSlot}
//         onSelectEvent={handleSelectEvent}
//         onEventCreate={handleEventCreate}
//         onEventResize={handleEventResize}
//         selectable // Ajout pour permettre la sélection des slots
//       />
//     </div>
//   );
// }

// export default CalendarComponent;




























import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendarcomponent.scss';

function CalendarComponent() {
  const [events, setEvents] = useState([
    {
      title: 'Événement 1',
      start: new Date(),
      end: new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
    },
    {
      title: 'Événement 2',
      start: new Date(),
      end: new Date(new Date().getTime() + 3 * 60 * 60 * 1000)
    }
  ]);

  useEffect(() => {
    // Récupérer la langue de l'utilisateur
    const userLanguage = navigator.language || 'fr'; // Langue par défaut 'fr' si non détectée
    moment.locale(userLanguage); // Configurer moment avec la langue de l'utilisateur
  }, []);

  const localizer = momentLocalizer(moment);

  const handleSelectSlot = ({ start, end }) => {
    alert(`Slot sélectionné : ${start}, ${end}`);
  };

  const handleSelectEvent = (event) => {
    alert(`Événement sélectionné : ${event.title}`);
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 450 }}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
}

export default CalendarComponent;
