import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
 const CompTable=()=> {
    
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
         Details of compounding fee
        </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        isCellEditable={(params) => {return [1, 2,3,4].includes(params.id)}}
        
        
      />
    </Box>
  );
}

const columns = [
    {
      field: 'S.NO.',
      headerName: 'S.NO.',
      type: 'number',
      width: 150,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'NGRBC Principle',
      headerName: 'NGRBC Principle',
      type: 'text',
      width: 150,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Name of the regulatory/ enforcement agencies/judicial institutions',
      headerName: 'Name of the regulatory/ enforcement agencies/judicial institutions',
      type: 'text',
      width: 150,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
        field: 'Amount (In INR)',
        headerName: 'Amount (In INR)',
        type: 'number',
        width: 150,
        editable: true,
        align: 'left',
        headerAlign: 'left',
        sortable: false,
    },
    {
        field: 'Brief of the Case',
        headerName: 'Brief of the Case',
        type: 'text',
        width: 150,
        editable: true,
        align: 'left',
        headerAlign: 'left',
        sortable: false,
    },
    {
        field: 'Has an appeal been preferred? (Yes/No)',
        headerName: 'Has an appeal been preferred? (Yes/No)',
        type: 'text',
        width: 150,
        editable: true,
        align: 'left',
        headerAlign: 'left',
        sortable: false,
      },
  ];

const rows = [
  {
    id: 1,
  },
  {
    id: 2,
    
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

export default CompTable;