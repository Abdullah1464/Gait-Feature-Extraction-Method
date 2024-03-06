import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, textAlign:"left", color: "#fff", fontWeight: "bold", letterSpacing: "2px" }}>
          Feature Quest
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:"center", color: "#fff", fontWeight: "bold", letterSpacing: "2px" }}>
          Human Gait Feature Extraction Method
        </Typography>
        <img src={logo}  style={{height: '100px', width: '120px'}}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
