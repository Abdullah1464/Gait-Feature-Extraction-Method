import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonAppBar from './appbar';

// function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar >
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:"center" }}>
//             News
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <ButtonAppBar />
    </>
  )
}

export default App
