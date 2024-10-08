import React from 'react'

const Table = () => {
  return (
    <div>
        <table id='testes'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>30</td>
              <td>New York</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>28</td>
              <td>Los Angeles</td>
            </tr>
            <tr>
              <td>Alice Johnson</td>
              <td>35</td>
              <td>Chicago</td>
            </tr>
          </tbody>
        </table>
  
    </div>
  )
}

export default Table