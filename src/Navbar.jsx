// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';

// const truncateText = (text, maxLength) => {
//   if (text.length <= maxLength) {
//     return text;
//   }
//   return text.substr(0, maxLength) + "...";
// }

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 6, marginTop: "4%", marginBottom: "0%" }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Button color="inherit" component={Link} to="/" sx={{ mr: 5 ,ml:5}}>
//             Employees
//           </Button>
//           <Button color="inherit" component={Link} to="/principle1" sx={{ mr: 5 }}>
//             {truncateText("PRINCIPLE 1: Businesses should conduct and govern themselves with integrity in a manner that is Ethical, Transparent and Accountable", 50)}
//           </Button>
//           <Button color="inherit" component={Link} to="#" sx={{ mr: 3 }}>
//             {truncateText("PRINCIPLE 3: Essential Indicators", 30)}
//           </Button>
//           <Button color="inherit" component={Link} to="#" sx={{ mr: 0 }}>
//             {truncateText("PRINCIPLE 5 Businesses should respect and promote human rights", 30)}
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

const principles = [
  {
    id: 1,
    title: "PRINCIPLE 1: Businesses should conduct and govern themselves with integrity in a manner that is Ethical, Transparent and Accountable",
    shortTitle: "PRINCIPLE 1"
  },
  {
    id: 2,
    title: "PRINCIPLE 3: Essential Indicators",
    shortTitle: "PRINCIPLE 3"
  },
  {
    id: 3,
    title: "PRINCIPLE 5: Businesses should respect and promote human rights",
    shortTitle: "PRINCIPLE 5"
  }
];

const TruncatedButton = ({ title, shortTitle, ...rest }) => (
  <Tooltip title={title} placement="bottom">
    <Button color="inherit" component={Link} {...rest}>
      {shortTitle}
    </Button>
  </Tooltip>
);

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 6, marginTop: "4%", marginBottom: "0%" }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/" sx={{ mr: 30,ml:20 }}>
            Employees
          </Button>
          {principles.map((principle) => (
            <TruncatedButton
              key={principle.id}
              title={principle.title}
              shortTitle={principle.shortTitle}
              to={`/principle${principle.id}`}
              sx={{ mr:20}}
            />
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
