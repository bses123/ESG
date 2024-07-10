import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
 const Principle=()=> {
    
    return (
    <Box
      sx={{
       marginTop:"1%",
       
        height: "auto",
        width: '52%',
        
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
         <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '0rem' }}>
        <Typography variant="h6" gutterBottom>
        Essential indicators
      </Typography>
      </Box>
      <Typography variant="h6" gutterBottom>
         1)Percentage coverage by training and awareness programmes on any of the Principles during the financial year:
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        isCellEditable={(params) => {return [1,2,3,4].includes(params.id)}}
        
        
      />
    </Box>
  );
}

const columns = [
    
    {
      field: 'Segment',
      headerName: 'Segment',
      width: 200,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Total number of training and awareness programmes held',
      headerName: 'Total number of training and awareness programmes held',
      type: 'number',
      width: 200,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: 'Topics/principles covered under the training and its impact',
      headerName: 'Topics/principles covered under the training and its impact',
      width: 200,
      editable: true,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    {
      field: '%age of persons in respective category covered by the awareness programmes',
      headerName: '%age of persons in respective category covered by the awareness programmes',
      type: 'number',
      width: 200,
      editable: false,
      align: 'left',
      headerAlign: 'left',
      sortable: false,
    },
    
  ];

const rows = [
  
  {
    id: 1,
    'Segment':"Board of Directors",
   
  },
  {
    id: 2,
    'Segment':"Key",
    
  },
  {
    id: 3,
    "Segment":"Employees other than BoD and KMPs",
    
  },
  {
    id: 4,
    "Segment":"Workers",
    
  },
  
];

export default Principle