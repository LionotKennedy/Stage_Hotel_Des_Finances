

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



































import React, { useEffect, useState } from 'react';

import "./home.scss"

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../../components/status-card/StatusCard'

import Table from '../../components/table/Table'

import Badge from '../../components/badge/Badge'

import { useGetFoldersByMonth } from '../../services/serviceFolder';

import statusCards from '../../Data/status-card-data.json'
import CalendarComponent from '../../components/calendar/Calendar'
import CurrentTime from '../../components/Timer/CurrentTime';

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


const Home = () => {

  const { data, isLoading, isError } = useGetFoldersByMonth();
  const [chartData, setChartData] = useState([]);
  const [chartCategories, setChartCategories] = useState([]);
  const themeReducer = useSelector(state => state.ThemeReducer.mode);


  useEffect(() => {
    if (data && data.success && Array.isArray(data.data.courrierByMonth)) {
      const folders = data.data.courrierByMonth;
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
    } else {
      console.log("No folders or incorrect data format:", data);
    }
  }, [data]);

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



  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row card_row">
        <div className="col-6 card_col">
          <div className="row">
            {
              statusCards.map((item, index) => (
                <div className="col-6" key={index}>
                  <StatusCard
                    icon={item.icon}
                    count={item.count}
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
              {/* <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCusomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCusomerBody(item, index)}
              /> */}
            </div>
            {/* <CurrentTime /> */}
            <div className="card__footer">
            </div>
            <Link to='/home'>view all</Link>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            {/* <div className="card__header">
              <h3>latest orders</h3>
            </div> */}
            <div className="card__body">
              {/* <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              /> */}
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
}

export default Home
