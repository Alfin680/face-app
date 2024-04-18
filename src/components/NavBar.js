// import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
// import React from 'react'
// import { Link } from 'react-router-dom'
// const NavBar = () => {
//   return (
//     <div>
//       <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" style={{ backgroundColor: 'black' }}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
            
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Montserrat, sans-serif' }}>
//                   Students Attendance
//           </Typography>

        
//         <Box flexGrow={0.08} />
        
//         </Toolbar>
//       </AppBar>
//     </Box>
//     </div>
//   )
// }

// export default NavBar

import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="options-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: 'black',
                  width: '200px', // Adjust width as needed
                },
              }}
            >
              <MenuItem onClick={handleMenuClose}><Link to={'/add'} style={{ textDecoration: 'none', color: 'success' }}>Add Student</Link></MenuItem>
              <MenuItem onClick={handleMenuClose}><Link to={'/edit'} style={{ textDecoration: 'none', color: 'success' }}>Edit Student</Link></MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Montserrat, sans-serif' }}>
              Students Attendance
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default NavBar;
