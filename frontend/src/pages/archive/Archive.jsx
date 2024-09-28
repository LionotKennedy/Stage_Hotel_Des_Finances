// import React from 'react'
// import "./archive.scss"
// import ArchiveCard from '../../components/archive-card/ArchiveCard'

// const Archive = () => {
//   return (
//     <div className='container__archive'>
//       <ArchiveCard />
//     </div>
//   )
// }

// export default Archive




















// import React from 'react'
// import "./archive.scss"
// import ArchiveCard from '../../components/archive-card/ArchiveCard'

// const Archive = () => {
//   return (
//     <div className='container__archive'>
//       <h1>Archives</h1>
//       {groups?.data && groups.data.length > 0 ? (
//         <div className="card-container">
//           {groups.data.map((group, index) => (
//             <ArchiveCard key={index} />
//           ))}
//         </div>
//       ) : (
//         <p>Aucune archive trouvée.</p>
//       )}
//     </div>
//   )
// }

// export default Archive


// import React from 'react'
// import "./archive.scss"
// import ArchiveCard from '../../components/archive-card/ArchiveCard'
// import { useGetGroupArchive } from '../../services/serviceArchive';

// const Archive = () => {
//   const { data: groups, isLoading, isError } = useGetGroupArchive();

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error loading data</div>;

//   return (
//     <div className='container__archive'>
//       <h1>Archives</h1>
//       {groups && groups.data && groups.data.length > 0 ? (
//         <div className="card-container">
//           {groups.data.map((group, index) => (
//             <ArchiveCard key={index} group={group} />
//           ))}
//         </div>
//       ) : (
//         <p>Aucune archive trouvée.</p>
//       )}
//     </div>
//   )
// }

// export default Archive












import React, { useEffect } from 'react'
import "./archive.scss"
import ArchiveCard from '../../components/archive-card/ArchiveCard'
import { useGetGroupArchive } from '../../services/serviceArchive';

const Archive = () => {
  const { data: groups, isLoading, isError } = useGetGroupArchive();

  useEffect(() => {
    if (groups && groups.data) {
      console.log('Données des archives par groupes:', groups.data);
    }
  }, [groups]);

  if (isLoading) {
    return <p>Chargement des archives...</p>;
  }

  if (isError) {
    return <p>Erreur lors du chargement des archives.</p>;
  }

  return (
    <div className='container__archive'>
      <h1>Archives</h1>
      {groups?.data && groups.data.length > 0 ? (
        <div className="card-container">
          {/* Pass groups as a prop to ArchiveCard */}
          <ArchiveCard groups={groups.data} />
        </div>
      ) : (
        <p>Aucune archive trouvée.</p>
      )}
    </div>
  )
}

export default Archive;
