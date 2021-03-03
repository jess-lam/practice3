import { useState } from 'react';
import './App.css';
const headers = ['id', 'first_name', 'last_name', 'gender'];
const originalData = [
  {
    id: 1,
    first_name: 'Uriel',
    last_name: 'Abbotson',
    gender: 'Genderfluid',
  },
  { id: 2, first_name: 'Sal', last_name: 'Folli', gender: 'Female' },
  {
    id: 3,
    first_name: 'Haze',
    last_name: 'Jacqueminet',
    gender: 'Bigender',
  },
  { id: 4, first_name: 'Tove', last_name: 'Deuss', gender: 'Male' },
  {
    id: 5,
    first_name: 'Barny',
    last_name: 'Broszkiewicz',
    gender: 'Genderfluid',
  },
  {
    id: 6,
    first_name: 'Marietta',
    last_name: 'Kelf',
    gender: 'Agender',
  },
  {
    id: 7,
    first_name: 'Callie',
    last_name: 'Timby',
    gender: 'Agender',
  },
  { id: 8, first_name: 'Crystie', last_name: 'Pulley', gender: 'Male' },
  {
    id: 9,
    first_name: 'Aurore',
    last_name: 'Scimonelli',
    gender: 'Female',
  },
  {
    id: 10,
    first_name: 'Trish',
    last_name: 'Windridge',
    gender: 'Genderqueer',
  },
];
function App() {
  //map over and display data
  const [tableData, setTableData] = useState(originalData);

  //increment counter by 1 for every onClick
  const [counter, setCounter] = useState(1);

  //depicts which column is selected and sets state to that header
  const [selectedColumn, setSelectedColumn] = useState('');

  const resetBackToInitialState = () => {
    setSelectedColumn('');
    setCounter(1);
    setTableData(originalData);
  };

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            {columnHeaders.map((header) => (
              <th
                key={header}
                onClick={(e) => {
                  // alt key for mac users
                  if (e.ctrlKey || e.altKey) {
                    return handlePinColumn(header);
                  }
                  handleSort(header);
                }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return renderTableRow(data);
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;