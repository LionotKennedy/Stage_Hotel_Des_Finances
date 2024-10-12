

// const { data: folders, isLoading, isError } = useGetFoldersByMonth();
// const [chartData, setChartData] = useState([]);
// const [chartCategories, setChartCategories] = useState([]);
// const themeReducer = useSelector(state => state.ThemeReducer.mode);

// useEffect(() => {
//   if (folders && Array.isArray(folders)) {
//     const months = [...new Set(folders.map(folder => folder.month))];
//     const sortedMonths = months.sort();

//     const chartData = sortedMonths.map(month => ({
//       month,
//       count: folders.filter(folder => folder.month === month).reduce((acc, curr) => acc + curr.count, 0)
//     }));

//     setChartData(chartData);
//     setChartCategories(sortedMonths);

//     console.log("Coucou"+chartData);
//     console.log("Coucou"+sortedMonths);
//   } else {
//     console.log("No folders or incorrect data format:", folders);
//   }
// }, [folders]);

// const chartOptions = {
//   series: [{
//     name: 'Count',
//     data: chartData.map(item => item.count),
//   }],
//   options: {
//     color: ['#6ab04c', '#2980b9'],
//     chart: {
//       background: 'transparent'
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       curve: 'smooth'
//     },
//     xaxis: {
//       categories: chartCategories
//     },
//     legend: {
//       position: 'top'
//     },
//     grid: {
//       show: false

// const chartOptions = {
//   series: [{
//     name: 'Online Customers',
//     data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
//   }, {
//     name: 'Store Customers',
//     data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
//   }],
//   options: {
//     color: ['#6ab04c', '#2980b9'],
//     chart: {
//       background: 'transparent'
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       curve: 'smooth'
//     },
//     xaxis: {
//       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
//     },
//     legend: {
//       position: 'top'
//     },
//     grid: {
//       show: false
//     }
//   }
// }
//     }
//   }
// };






// const { data: folders, isLoading, isError } = useGetFoldersByMonth();
// const themeReducer = useSelector(state => state.ThemeReducer.mode)


// // State to store dynamic chart options
// const [chartData, setChartData] = useState({
//   series: [{
//     name: 'Courriers',
//     data: [] // Dynamic data from backend will go here
//   }],
//   options: {
//     color: ['#6ab04c'],
//     chart: {
//       background: 'transparent'
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       curve: 'smooth'
//     },
//     xaxis: {
//       categories: [] // Dynamic months will go here
//     },
//     legend: {
//       position: 'top'
//     },
//     grid: {
//       show: false
//     }
//   }
// });

// // Update chart data when folders data is fetched
//   // Update chart data when folders data is fetched
//   useEffect(() => {
//     if (folders && Array.isArray(folders.courrierByMonth)) {
//       // Extract months and counts
//       const months = folders.courrierByMonth.map(item => item.month);
//       const counts = folders.courrierByMonth.map(item => item.count);

//       // Update chart data with dynamic months and counts
//       setChartData(prevData => ({
//         ...prevData,
//         series: [{
//           name: 'Courriers',
//           data: counts
//         }],
//         options: {
//           ...prevData.options,
//           xaxis: {
//             ...prevData.options.xaxis,
//             categories: months
//           }
//         }
//       }));
//     }
//   }, [folders]);


// useEffect(() => {
//   if (folders && Array.isArray(folders)) {
//     folders.forEach((folder) => console.log('Folder data:', folder));
//   } else {
//     console.log("No folders or incorrect data format:", folders);
//   }
// }, [folders])























// const { data: folders, isLoading, isError } = useGetFoldersByMonth();
// const [chartData, setChartData] = useState([]);
// const [chartCategories, setChartCategories] = useState([]);
// const themeReducer = useSelector(state => state.ThemeReducer.mode);

// useEffect(() => {
//   if (folders && Array.isArray(folders)) {
//     const months = [...new Set(folders.map(folder => folder.month))];
//     const sortedMonths = months.sort();

//     const chartData = sortedMonths.map(month => ({
//       month,
//       count: folders.filter(folder => folder.month === month).reduce((acc, curr) => acc + curr.count, 0)
//     }));

//     setChartData(chartData);
//     setChartCategories(sortedMonths);
//   } else {
//     console.log("No folders or incorrect data format:", folders);
//   }
// }, [folders]);


















// useEffect(() => {
//   // Vérifiez si les données existent et sont au format attendu
//   if (data && data.success && Array.isArray(data.data.courrierByMonth)) {
//     const folders = data.data.courrierByMonth; // Mettez à jour cette ligne
//     const months = [...new Set(folders.map(folder => folder.month))];
//     const sortedMonths = months.sort();

//     const chartData = sortedMonths.map(month => ({
//       month,
//       count: folders.filter(folder => folder.month === month).reduce((acc, curr) => acc + curr.count, 0)
//     }));

//     setChartData(chartData);
//     setChartCategories(sortedMonths);
//   } else {
//     console.log("No folders or incorrect data format:", data);
//   }
// }, [data]); // Changez le tableau de dépendances pour écouter les changements de 'data'


















{/* <Chart
              options={themeReducer === 'theme-mode-dark' ? {
                ...chartOptions.options,
                theme: { mode: 'dark' }
              } : {
                ...chartOptions.options,
                theme: { mode: 'light' }
              }}
              series={chartOptions.series}
              type='line'
              height='100%'
            /> */}
{/* <Chart
              options={themeReducer === 'theme-mode-dark' ? {
                ...chartData.options,
                theme: { mode: 'dark' }
              } : {
                ...chartData.options,
                theme: { mode: 'light' }
              }}
              series={chartData.series}
              type='line'
              height='100%'
            /> */}










// const topCustomers = {
//   head: [
//     'user',
//     'total orders',
//     'total spending'
//   ],  
//   body: [
//     {
//       "username": "john doe",
//       "order": "490",
//       "price": "$15,870"
//     },  
//     {
//       "username": "frank iva",
//       "order": "250",
//       "price": "$12,251"
//     },  
//     {
//       "username": "anthony baker",
//       "order": "120",
//       "price": "$10,840"
//     },  
//     {
//       "username": "frank iva",
//       "order": "110",
//       "price": "$9,251"
//     },  
//     {
//       "username": "anthony baker",
//       "order": "80",
//       "price": "$8,840"
//     }  
//   ]  
// }  

// const renderCusomerHead = (item, index) => (
//   <th key={index}>{item}</th>
// )

// const renderCusomerBody = (item, index) => (
//   <tr key={index}>
//     <td>{item.username}</td>
//     <td>{item.order}</td>
//     <td>{item.price}</td>
//   </tr>    
// )

// const latestOrders = {
//   header: [
//     "order id",
//     "user",
//     "total price",
//     "date",
//     "status"
//   ],  
//   body: [
//     {
//       id: "#OD1711",
//       user: "john doe",
//       date: "17 Jun 2021",
//       price: "$900",
//       status: "shipping"
//     },  
//     {
//       id: "#OD1712",
//       user: "frank iva",
//       date: "1 Jun 2021",
//       price: "$400",
//       status: "paid"
//     },  
//     {
//       id: "#OD1713",
//       user: "anthony baker",
//       date: "27 Jun 2021",
//       price: "$200",
//       status: "pending"
//     },  
//     {
//       id: "#OD1712",
//       user: "frank iva",
//       date: "1 Jun 2021",
//       price: "$400",
//       status: "paid"
//     },  
//     {
//       id: "#OD1713",
//       user: "anthony baker",
//       date: "27 Jun 2021",
//       price: "$200",
//       status: "refund"
//     }  
//   ]  
// }  

// const orderStatus = {
//   "shipping": "primary",
//   "pending": "warning",
//   "paid": "success",
//   "refund": "danger"
// }  

// const renderOrderHead = (item, index) => (
//   <th key={index}>{item}</th>
// )

// const renderOrderBody = (item, index) => (
//   <tr key={index}>
//     <td>{item.id}</td>
//     <td>{item.user}</td>
//     <td>{item.price}</td>
//     <td>{item.date}</td>
//     <td>
//       <Badge type={orderStatus[item.status]} content={item.status} />
//     </td>  
//   </tr>    
// )














  // useEffect(() => {
  //   if (isLoadingFolder) {
  //     console.log('Chargement des archives...');
  //     return;
  //   }

  //   if (isErrorFolder) {
  //     console.error('Erreur lors de la récupération des archives');
  //     return;
  //   }

  //   // Vérifiez les données des archives
  //   if (folderData && Array.isArray(folderData.data)) {
  //     console.log('Données des archives:', folderData.data);
  //     console.log('Nombre des archives:', folderData.data.length);
  //     setFolderCount(folderData.data.length);
  //   } else {
  //     console.log("courrier n'est pas un tableau :", folderData);
  //     setFolderCount(0);
  //   }
  // }, [folderData, isLoadingFolder, isErrorFolder]);





















import React, { useEffect, useState } from 'react';

import "./home.scss"

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../../components/status-card/StatusCard'

import Table from '../../components/table/Table'

import Badge from '../../components/badge/Badge'

import { useGetFoldersByMonth } from '../../services/serviceFolder';
import { useCountFolders } from '../../services/serviceFolder';

import { getAllArchive } from '../../services/serviceArchive';
import { useGetVisa } from '../../services/serviceVisa';
import { useGetUser } from '../../services/serviceUser';

import statusCards from '../../Data/status-card-data.json'
// import CalendarComponent from '../../components/calendar/Calendar'
import CalendarComponent from '../../components/calendars/CalendarComponent'
import CurrentTime from '../../components/Timer/CurrentTime';
import Calendars from '../../components/calendars/Calendars';



const Home = () => {
  const { data: monthData, isLoading, isError } = useGetFoldersByMonth();
  const [chartData, setChartData] = useState([]);
  const [chartCategories, setChartCategories] = useState([]);
  const themeReducer = useSelector(state => state.ThemeReducer.mode);

  const [archiveCount, setArchiveCount] = useState(0);
  const { data: archiveData, isLoading: isLoadingArchive, isError: isErrorArchive } = getAllArchive();

  const [visaCount, setVisaCount] = useState(0);
  const { data: visaData, isLoading: isLoadingVisa, isError: isErrorVisa } = useGetVisa();

  const [userCount, setUserCount] = useState(0);
  const { data: userData, isLoading: isLoadingUser, isError: isErrorUser } = useGetUser();

  const [folderCount, setFolderCount] = useState(0);
  const { data: folderData, isLoading: isLoadingFolder, isError: isErrorFolder } = useCountFolders();



  useEffect(() => {
    if (isLoadingFolder) {
      console.log('Chargement des dossiers...');
      return;
    }
  
    if (isErrorFolder) {
      console.error('Erreur lors de la récupération des dossiers');
      return;
    }
  
    // Vérifiez les données des dossiers
    if (folderData && typeof folderData.count === 'number') {
      console.log('Nombre de dossiers:', folderData.count);
      setFolderCount(folderData.count);
    } else {
      console.log("Données incorrectes ou manquantes dans la réponse de l'API");
      setFolderCount(0);
    }
  }, [folderData, isLoadingFolder, isErrorFolder]);



  useEffect(() => {
    if (isLoadingArchive) {
      console.log('Chargement des archives...');
      return;
    }

    if (isErrorArchive) {
      console.error('Erreur lors de la récupération des archives');
      return;
    }

    // Vérifiez les données des archives
    if (archiveData && Array.isArray(archiveData.data)) {
      console.log('Données des archives:', archiveData.data);
      console.log('Nombre des archives:', archiveData.data.length);
      setArchiveCount(archiveData.data.length);
    } else {
      console.log("archiveData n'est pas un tableau :", archiveData);
      setArchiveCount(0);
    }
  }, [archiveData, isLoadingArchive, isErrorArchive]);


  useEffect(() => {
    if (isLoadingUser) {
      console.log('Chargement des user...');
      return;
    }

    if (isErrorUser) {
      console.error('Erreur lors de la récupération des user');
      return;
    }

    // Vérifiez les données des archives
    if (userData && Array.isArray(userData.data)) {
      console.log('Données des user:', userData.data);
      console.log('Nombre des user:', userData.data.length);
      setUserCount(userData.data.length);
    } else {
      console.log("userData n'est pas un tableau :", userData);
      setUserCount(0);
    }
  }, [userData, isLoadingUser, isErrorUser]);


  useEffect(() => {
    if (isLoadingVisa) {
      console.log('Chargement des visa...');
      return;
    }

    if (isErrorVisa) {
      console.error('Erreur lors de la récupération des visa');
      return;
    }

    // Vérifiez les données des archives
    if (visaData && Array.isArray(visaData.data)) {
      console.log('Données des visa:', visaData.data);
      console.log('Nombre des visa:', visaData.data.length);
      setVisaCount(visaData.data.length);
    } else {
      console.log("visaData n'est pas un tableau :", visaData);
      setVisaCount(0);
    }
  }, [visaData, isLoadingVisa, isErrorVisa]);



  useEffect(() => {
    if (monthData && monthData.success && Array.isArray(monthData.data.courrierByMonth)) {
      const folders = monthData.data.courrierByMonth;


      const sortedMonths = [...new Set(folders.map(folder => folder.month))].sort((a, b) => {
        const monthNames = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
        return monthNames.indexOf(a.toLowerCase()) - monthNames.indexOf(b.toLowerCase());
      });

      const chartData = sortedMonths.map(month => ({
        month,
        count: folders.filter(folder => folder.month === month).reduce((acc, curr) => acc + curr.count, 0)
      }));

      setChartData(chartData);
      setChartCategories(sortedMonths);
      console.log("Folders data format:", folders.length); // Affiche le nombre de dossiers.
    } else {
      console.log("No folders or incorrect data format:", monthData);
    }
  }, [monthData]);

  const chartOptions = {
    series: [{
      name: 'Count',
      data: chartData.map(item => item.count),
    }],
    options: {
      color: ['#6ab04c', '#2980b9'],
      chart: {
        background: 'transparent'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: chartCategories
      },
      legend: {
        position: 'top'
      },
      grid: {
        show: false
      }
    }
  };


  const [statusCardsData, setStatusCardsData] = useState({
    archiveCount: 0,
    visaCount: 0,
    userCount: 0,
    folderCount: 0
  });

  const statusCards = [
    { title: "Total archive", field: "archiveCount" },
    { title: "Total visa", field: "visaCount" },
    { title: "Total utilisateur", field: "userCount" },
    { title: "Total courrier", field: "folderCount" }
  ];

  useEffect(() => {
    // Vérifiez les données des archives
    if (isLoadingArchive) {
      console.log('Chargement des archives...');
      return;
    }

    if (isErrorArchive) {
      console.error('Erreur lors de la récupération des archives');
      return;
    }

    if (archiveData && Array.isArray(archiveData.data)) {
      setStatusCardsData(prevState => ({
        ...prevState,
        archiveCount: archiveData.data.length
      }));
    } else {
      console.log("archiveData n'est pas un tableau :", archiveData);
      setStatusCardsData(prevState => ({
        ...prevState,
        archiveCount: 0
      }));
    }
  }, [archiveData, isLoadingArchive, isErrorArchive]);

  useEffect(() => {
    // Vérifiez les données des visas
    if (isLoadingVisa) {
      console.log('Chargement des visa...');
      return;
    }

    if (isErrorVisa) {
      console.error('Erreur lors de la récupération des visa');
      return;
    }

    if (visaData && Array.isArray(visaData.data)) {
      setStatusCardsData(prevState => ({
        ...prevState,
        visaCount: visaData.data.length
      }));
    } else {
      console.log("visaData n'est pas un tableau :", visaData);
      setStatusCardsData(prevState => ({
        ...prevState,
        visaCount: 0
      }));
    }
  }, [visaData, isLoadingVisa, isErrorVisa]);


  useEffect(() => {
    // Vérifiez les données des utilisateurs
    if (isLoadingUser) {
      console.log('Chargement des user...');
      return;
    }

    if (isErrorUser) {
      console.error('Erreur lors de la récupération des user');
      return;
    }

    if (userData && Array.isArray(userData.data)) {
      setStatusCardsData(prevState => ({
        ...prevState,
        userCount: userData.data.length
      }));
    } else {
      console.log("userData n'est pas un tableau :", userData);
      setStatusCardsData(prevState => ({
        ...prevState,
        userCount: 0
      }));
    }
  }, [userData, isLoadingUser, isErrorUser]);

  useEffect(() => {
    // Vérifiez les données des dossiers
    if (isLoadingFolder) {
      console.log('Chargement des dossiers...');
      return;
    }

    if (isErrorFolder) {
      console.error('Erreur lors de la récupération des dossiers');
      return;
    }

    if (folderData && typeof folderData.count === 'number') {
      setStatusCardsData(prevState => ({
        ...prevState,
        folderCount: folderData.count
      }));
    } else {
      console.log("Données incorrectes ou manquantes dans la réponse de l'API");
      setStatusCardsData(prevState => ({
        ...prevState,
        folderCount: 0
      }));
    }
  }, [folderData, isLoadingFolder, isErrorFolder]);

  
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row card_row">
        <div className="col-6 card_col">
          <div className="row">
            {/* {
              statusCards.map((item, index) => (
                <div className="col-6" key={index}>
                <StatusCard
                icon={item.icon}
                count={item.count}
                title={item.title}
                />
                </div>
              ))
              } */}
            {
              statusCards.map((item, index) => (
                <div className="col-6" key={index}>
                  <StatusCard
                    icon={getIcon(item.title)}
                    count={getItemValue(item.field)}
                    title={item.title}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            {/* chart */}
            <Chart
            options={themeReducer === 'theme-mode-dark' ? {
              ...chartOptions.options,
              theme: { mode: 'dark' }
            } : {
              ...chartOptions.options,
              theme: { mode: 'light' }
            }}
            series={chartOptions.series}
            type='line'
            height='100%'
          />
            
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>top customers</h3>
            </div>
            <div className="card__body">
            <CurrentTime />
          {/* <Calendars /> */}
            </div>
            <div className="card__footer">
            <Link to='/home'>view all</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            {/* <div className="card__header">
              <h3>latest orders</h3>
              </div> */}
              {/* <CalendarComponent /> */}
            <div className="card__body">
              <CalendarComponent />
            </div>
            {/* <div className="card__footer">
              <Link to='/home'>view all</Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
  function getIcon(title) {
    switch (title) {
      case "Total archive":
        return "bx bx-shopping-bag";
      case "Total visa":
        return "bx bx-cart";
      case "Total utilisateur":
        return "bx bx-dollar-circle";
      case "Total courrier":
        return "bx bx-receipt";
      default:
        return "";
    }
  }
  
  function getItemValue(field) {
    return statusCardsData[field];
  }
}


export default Home



































  // useEffect(() => {
  //   if (isLoadingFolder) {
  //     console.log('Chargement des courrier...');
  //     return;
  //   }

  //   if (isErrorFolder) {
  //     console.error('Erreur lors de la récupération des courrier');
  //     return;
  //   }

  //   // Vérifiez les données des archives
  //   if (folderData && Array.isArray(folderData.data)) {
  //     console.log('Données des courrier:', folderData.data);
  //     console.log('Nombre des courrier:', folderData.data.length);
  //     setFolderCount(folderData.data.length);
  //   } else {
  //     console.log("folder Data n'est pas un tableau :", folderData);
  //     setFolderCount(0);
  //   }
  // }, [folderData, isLoadingFolder, isErrorFolder]);







  // useEffect(() => {
  //   if (isLoadingFolder) {
  //     console.log('Chargement des courrier...');
  //     return;
  //   }
  
  //   if (isErrorFolder) {
  //     console.error('Erreur lors de la récupération des courrier');
  //     return;
  //   }
  
  //   // Afficher le contenu de folderData
  //   console.log("folderData :", folderData);
  
  //   // Vérifiez les données des archives
  //   if (folderData && Array.isArray(folderData.data)) {
  //     console.log('Données des courrier:', folderData.data);
  //     console.log('Nombre des courrier:', folderData.data.length);
  //     setFolderCount(folderData.data.length);
  //   } else {
  //     console.log("folderData n'est pas un tableau :", folderData);
  //     setFolderCount(0);
  //   }
  // }, [folderData, isLoadingFolder, isErrorFolder]);
  





  // useEffect(() => {
  //   if (isLoadingFolder) {
  //     console.log('Chargement des courrier...');
  //     return;
  //   }
  
  //   if (isErrorFolder) {
  //     console.error('Erreur lors de la récupération des courrier');
  //     return;
  //   }
  
  //   // Afficher le contenu de folderData
  //   console.log("folderData :", folderData);
  
  //   // Vérifiez les données des archives
  //   if (Array.isArray(folderData.data)) {
  //     console.log('Données des courrier:', folderData.data);
  //     console.log('Nombre des courrier:', folderData.data.length);
  //     setFolderCount(folderData.data.length);
  //   } else {
  //     console.error("folderData n'est pas un tableau :", folderData);
  //     setFolderCount(0);
  //   }
  // }, [folderData, isLoadingFolder, isErrorFolder]);








  // useEffect(() => {
  //   if (isLoadingFolder) {
  //     console.log('Chargement des courriers...');
  //     return;
  //   }
  
  //   if (isErrorFolder) {
  //     console.error('Erreur lors de la récupération des courriers');
  //     return;
  //   }
  
  //   // Afficher le contenu de folderData pour inspecter
  //   console.log("folderData :", folderData);
  
  //   // Vérifier si 'folderData.data' est un objet avec les courriers à l'intérieur
  //   if (folderData && folderData.data && Array.isArray(folderData.data.courriers)) {
  //     console.log('Données des courriers:', folderData.data.courriers);
  //     console.log('Nombre des courriers:', folderData.data.courriers.length);
  //     setFolderCount(folderData.data.courriers.length);
  //   } else {
  //     console.error("Données des courriers manquantes ou mal formatées dans folderData.data :", folderData.data);
  //     setFolderCount(0);
  //   }
  // }, [folderData, isLoadingFolder, isErrorFolder]);

  






  























// import React, { useEffect, useState } from 'react';
// import "./home.scss"
// import { Link } from 'react-router-dom'
// import Chart from 'react-apexcharts'
// import { useSelector } from 'react-redux'
// import StatusCard from '../../components/status-card/StatusCard'
// import Table from '../../components/table/Table'
// import Badge from '../../components/badge/Badge'
// import { useGetFoldersByMonth, useGetFolders } from '../../services/serviceFolder';
// import statusCards from '../../Data/status-card-data.json'
// import CalendarComponent from '../../components/calendar/Calendar'
// import CurrentTime from '../../components/Timer/CurrentTime';

// const Home = () => {
//   const { data: monthlyData, isLoading, isError } = useGetFoldersByMonth();
//   const { data: foldersData, isLoading: loadingFolders, isError: errorFolders } = useGetFolders(); // Récupérer tous les dossiers

//   const [chartData, setChartData] = useState([]);
//   const [chartCategories, setChartCategories] = useState([]);
//   const themeReducer = useSelector(state => state.ThemeReducer.mode);

//   useEffect(() => {
//     if (monthlyData && monthlyData.success && Array.isArray(monthlyData.data.courrierByMonth)) {
//       const folders = monthlyData.data.courrierByMonth;

//       const sortedMonths = [...new Set(folders.map(folder => folder.month))].sort((a, b) => {
//         const monthNames = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
//         return monthNames.indexOf(a.toLowerCase()) - monthNames.indexOf(b.toLowerCase());
//       });

//       const chartData = sortedMonths.map(month => ({
//         month,
//         count: folders.filter(folder => folder.month === month).reduce((acc, curr) => acc + curr.count, 0)
//       }));

//       setChartData(chartData);
//       setChartCategories(sortedMonths);
//       console.log("Folders data format:", folders.length); // Affiche le nombre de dossiers.
//     } else {
//       console.log("No folders or incorrect data format:", monthlyData);
//     }
//   }, [monthlyData]);

//   // Vérification des erreurs pour les dossiers
//   useEffect(() => {
//     if (errorFolders) {
//       console.error("Erreur lors de la récupération des dossiers:", errorFolders);
//     }
//     console.error(" récupération des dossiers:", foldersData);

//   }, [errorFolders]);

//   const chartOptions = {
//     series: [{
//       name: 'Count',
//       data: chartData.map(item => item.count),
//     }],
//     options: {
//       color: ['#6ab04c', '#2980b9'],
//       chart: {
//         background: 'transparent'
//       },
//       dataLabels: {
//         enabled: false
//       },
//       stroke: {
//         curve: 'smooth'
//       },
//       xaxis: {
//         categories: chartCategories
//       },
//       legend: {
//         position: 'top'
//       },
//       grid: {
//         show: false
//       }
//     }
//   };

//   return (
//     <div>
//       <h2 className="page-header">Dashboard</h2>
//       <div className="row card_row">
//         <div className="col-6 card_col">
//           <div className="row">
//             {
//               statusCards.map((item, index) => (
//                 <div className="col-6" key={index}>
//                   <StatusCard
//                     icon={item.icon}
//                     count={item.count}
//                     title={item.title}
//                   />
//                 </div>
//               ))
//             }
//           </div>
//         </div>
//         <div className="col-6">
//           <div className="card full-height">
//             <Chart
//               options={themeReducer === 'theme-mode-dark' ? {
//                 ...chartOptions.options,
//                 theme: { mode: 'dark' }
//               } : {
//                 ...chartOptions.options,
//                 theme: { mode: 'light' }
//               }}
//               series={chartOptions.series}
//               type='line'
//               height='100%'
//             />
//           </div>
//         </div>
//         <div className="col-4">
//           <div className="card">
//             <div className="card__header">
//               <h3>top customers</h3>
//             </div>
//             <div className="card__body">
//               {/* <Table
//                 headData={topCustomers.head}
//                 renderHead={(item, index) => renderCusomerHead(item, index)}
//                 bodyData={topCustomers.body}
//                 renderBody={(item, index) => renderCusomerBody(item, index)}
//               /> */}
//             </div>
//             <div className="card__footer">
//             </div>
//             <Link to='/home'>view all</Link>
//           </div>
//         </div>
//         <div className="col-8">
//           <div className="card">
//             <div className="card__body">
//               <CalendarComponent />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home;
