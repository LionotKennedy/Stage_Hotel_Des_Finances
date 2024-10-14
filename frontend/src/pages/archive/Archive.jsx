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












// import React, { useEffect, useState } from 'react'
// import "./archive.scss"
// import ArchiveCard from '../../components/archive-card/ArchiveCard'
// import { useGetGroupArchive } from '../../services/serviceArchive';
// import ReactPaginate from 'react-paginate';


// const Archive = () => {
//   const { data: groups, refetch: refresh, isLoading, isError } = useGetGroupArchive();

//   useEffect(() => {
//     if (groups && groups.data) {
//       console.log('Données des archives par groupes:', groups.data);
//     }
//   }, [groups]);


//   if (isLoading) {
//     return <p>Chargement des archives...</p>;
//   }

//   if (isError) {
//     return <p>Erreur lors du chargement des archives.</p>;
//   }

//     // // ************* PAGINATE ***************//
//     // const [currentPage, setCurrentPage] = useState(0);

//     // const itemsPerPage = 2; // Nombre d'éléments par page
//     // const indexOfLastItem = (currentPage + 1) * itemsPerPage;
//     // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     // const currentItems = groups.slice(indexOfFirstItem, indexOfLastItem);
//     // // ************* ENDING ***************//
  
//     // // ************* PAGINATION ***************//
//     // useEffect(() => {
//     //   refresh();
//     // }, [currentPage]); // Rafraîchir lorsque la page change
//     // // ************* ENDING ***************//

//   return (
//     <div className='container__archive'> 
//       <div className='title_archive'>
//         <span>Archives</span>
//       </div>
//       {groups?.data && groups.data.length > 0 ? (
//         <div className="card-container">
//           {/* Pass groups as a prop to ArchiveCard */}
//           <ArchiveCard groups={groups.data}  />
//         </div>
//       ) : (
//         <p>Aucune archive trouvée.</p>
//       )}
//     </div>
//   )
// }

// export default Archive;















import React, { useEffect, useState } from 'react';
import "./archive.scss";
import ArchiveCard from '../../components/archive-card/ArchiveCard';
import { useGetGroupArchive } from '../../services/serviceArchive';
import ReactPaginate from 'react-paginate';

const Archive = () => {
  const { data: groups, refetch: refresh, isLoading, isError } = useGetGroupArchive();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Nombre d'éléments par page

  // Calcule les éléments à afficher sur la page actuelle
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = groups?.data?.slice(indexOfFirstItem, indexOfLastItem) || [];

  // Fonction pour changer de page
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    refresh();
  }, [currentPage]); // Rafraîchir lorsque la page change

  if (isLoading) {
    return <p>Chargement des archives...</p>;
  }

  if (isError) {
    return <p>Erreur lors du chargement des archives.</p>;
  }

  return (
    <div className='container__archive'>
      <div className='title_archive'>
        <span>Archives</span>
      </div>
      {groups?.data && groups.data.length > 0 ? (
        <>
          <div className="card-container">
            {/* Pass only the current page items to ArchiveCard */}
            <ArchiveCard groups={currentItems} />
          </div>
          <ReactPaginate
            previousLabel={'Précédent'}
            nextLabel={'Suivant'}
            breakLabel={'...'}
            pageCount={Math.ceil(groups.data.length / itemsPerPage)} // Nombre total de pages
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </>
      ) : (
        <p>Aucune archive trouvée.</p>
      )}
    </div>
  );
};

export default Archive;
