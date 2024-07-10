import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
 const RepWomTable=()=> {
    
    return (
    <Box
      sx={{
        marginTop:"1.5%",
        height: "auto",
        width: '57.67%',
        border:'2%',
        marginBottom: '5%',
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
         Participation/Inclusion/Representation of women :
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
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    
    {
      field: 'Number of Females',
      headerName: 'Number of Females',
      type: 'number',
      width: 100,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Percentage of Females',
      headerName: 'Percentage of Females(%)',
      type: 'number',
      width: 100,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
  ];

const rows = [
  {
    id: 1,
    Particulars: "Board of Directors",
    'Total(A)':0,
    'Number of Females':0,
    'Percentage of Females':0,
   
  },
  {
    id: 2,
    Particulars: "Key Management Personnel",
    'Total(A)':0,
    'Number of Females':0,
    'Percentage of Females':0,
  },
];

export default RepWomTable;