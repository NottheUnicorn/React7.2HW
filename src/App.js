import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  {field:'id', headerName:'ID', width: 70},
  {field:'make', headerName:'Make', width: 130},
  {field:'model', headerName:'Model', width: 130},
  {field:'color', headerName:'Color', width: 130},
  {field:'price', headerName:'Price', width: 130},
];

const rows = [
  { id: 1, make: "Toyota", model:"Camry", color: "Blue", price:"$20,000"},
  { id: 2, make: "Honda", model:"Accord", color: "Gold", price:"$1,200,000"},
  { id: 3, make: "Jeep", model:"Wrangler", color: "Orange", price:"$30,000"},
  { id: 4, make: "Ford", model:"Taurus", color: "Grey", price:"$6,000"},
  { id: 5, make: "BMW", model:"300 series", color: "Black", price:"$70,000"},
  { id: 6, make: "Ford", model:"F-150", color: "White", price:"$42,000"},
  { id: 7, make: "Nissan", model:"Altima", color: "Navy Blue", price:"$25,000"},
  { id: 8, make: "Honda", model:"Pilot", color: "White", price:"$40,000"},
  { id: 9, make: "Toyota", model:"Avalon", color: "Blue", price:"$35,000"},
  { id: 10, make: "Honda", model:"CR-4", color: "Black", price:"$30,000"},
];

export default function DataTable() {
  return (
    <div style={{height:1000, width: '100%'}}>
      <DataGrid
      rows={rows}
      columns={columns}
      pagesize={5}
      rowsPerPageOptions={[10]}
      checkboxSelection
      />
    </div>
  );
}

