import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
 const Emptable=()=> {
    
    return (
    <Box
      sx={{
        marginTop:'2%',
        
        height: "auto",
        width: 'auto',
        border:'2%',
        '& .MuiDataGrid-root .MuiDataGrid-footerContainer': {
          display: 'none', // Hide pagination using CSS
        },
        '& .MuiDataGrid-root .MuiDataGrid-columnHeaderSelector': {
            display: 'none', // Hide column selector using CSS
          },
          '& .MuiDataGrid-root .MuiDataGrid-menuIcon': {
            display: 'none', // Hide column menu using CSS
          },
        '& .MuiDataGrid-cell--editable': {
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#376331' : 'rgb(255 243 190)',
        },
      }}
    >
        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '0rem' }}>
        <Typography variant="h6" gutterBottom>
          Details as at the end of FY24:
        </Typography>
        <Typography variant="h6" gutterBottom>
          Details as at the end of FY23:
        </Typography>
       </Box>
       <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
        <Typography variant="h8" gutterBottom>
        Employees (including differently abled):
        </Typography>
        <Typography variant="h8" gutterBottom>
        Employees (including differently abled):
        </Typography>
       </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        isCellEditable={(params) => {return [1, 2].includes(params.id)}}
        
        
      />
    </Box>
  );
}

const columns = [
    { field: 'Particulars24', headerName: 'Particulars', width: 100, editable:false, sortable: false,},
    {
      field: 'Total(A)24',
      headerName: 'Total(A)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Male No(B)24',
      headerName: 'Male No(B)',
      type: 'number',
      width: 100,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Male %(B/A)24',
      headerName: 'Male %(B/A)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Female No(C)24',
      headerName: 'Female (C)',
      type: 'number',
      width: 100,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Female %(C/A)24',
      headerName: 'Female %(C/A)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Other No(H)24',
      headerName: 'Other(H)',
      type: 'number',
      width: 100,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Other %(H/A)24',
      headerName: 'Other %(H/A)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field:'Empty' ,
      headerName:'' ,
      type: '',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    { field: 'Particulars23', headerName: 'Particulars', width: 100, editable:false, sortable: false,},
    
    {
      field: 'Total(A)23',
      headerName: 'Total(A)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Male No(B)23',
      headerName: 'Male No(B)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Male %(B/A)23',
      headerName: 'Male %(B/A)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Female No(C)23',
      headerName: 'Female (C)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Female %(C/A)23',
      headerName: 'Female %(C/A)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Other No(H)23',
      headerName: 'Other(H)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Other %(H/A)23',
      headerName: 'Other %(H/A)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
  ];

const rows = [
  {
    id: 1,
    Particulars24: "Permanent (D)",
    Particulars23: "Permanent (D)",
   
  },
  {
    id: 2,
    Particulars24: "Other than Permanent (E)",
    Particulars23: "Permanent (D)",
  },
  {
    id: 3,
    Particulars24: "Total (D+E)",
    Particulars23: "Permanent (D)",
  },
 
  
];

export default Emptable