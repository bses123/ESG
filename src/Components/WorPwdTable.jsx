import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
 const WorPwdTable=()=> {
    
    return (
    <Box
      sx={{
        marginTop:'0%',
       
        height: "15rem",
        width: '55%',
        marginBottom: '5%',
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
         <Typography variant="h6" gutterBottom>
        Differently Abled Workers
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        isCellEditable={(params) => {return [1, 2].includes(params.id)}}
        
        
      />
    </Box>
  );
}

const columns = [
    { field: 'Particulars', headerName: 'Particulars', width: 100, editable:false, sortable: false,},
    {
      field: 'Total(A)',
      headerName: 'Total(A)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Male No(B)',
      headerName: 'Male No(B)',
      type: 'number',
      width: 100,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Male %(B/A)',
      headerName: 'Male %(B/A)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Female No(C)',
      headerName: 'Female (C)',
      type: 'number',
      width: 100,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Female %(C/A)',
      headerName: 'Female %(C/A)',
      type: 'number',
      width: 100,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Other No(H)',
      headerName: 'Other(H)',
      type: 'number',
      width: 100,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Other %(H/A)',
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
    Particulars: "Permanent (D)",
    'Male No(B)':0,
    'Female No(C)':0
   
  },
  {
    id: 2,
    Particulars: "Other than Permanent (E)",
   
  },
  {
    id: 3,
    Particulars: "Total (D+E)",
    
  },
  
];

export default WorPwdTable;