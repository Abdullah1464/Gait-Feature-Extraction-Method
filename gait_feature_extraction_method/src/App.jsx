import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonAppBar from './appbar';
import Typewriter from './TypeWriter';
import methodologyGif from './Proposed Methodology.gif'; 
import results from './resultstable.png'; 
import DenseTable from './createtable';
import ResponsiveBarChart from './MetricsTable';
function App() {

  return (
    <>
      <ButtonAppBar />

        <Box sx={{ scrollSnapAlign: 'start', height: '100vh' }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ textAlign:"center", position: 'relative', top: '20%', color: '#FE6B8B' }}>
            Introduction
          </Typography>
            <Typography variant="h4" sx={{ textAlign:"justify" ,position: 'relative', top: '35%', margin: '0 2rem' }}>
              <Typewriter text={"Gait recognition refers to the identification of individuals based on features acquired from their body movement during walking. Despite the recent advances in the feature extraction process, variations in things such as camera angles, subject pose, occlusions, and clothing make it a computationally challenging task to extract an optimal set of features from gait data. Our research aims to contribute to the state-of-the-art with a machine learning framework for extracting robust gait features from gait data that both reduces the dimensionality of the gait data and maximizes the class separability. This will help us to learn what aspects of walking people generally differ and extract those as general gait features, improving the discriminative power of our feature set. To identify people without the need for group-specific features is convenient as particular people might not always provide annotated learning data. Our research aims to explore Mocap datasets especially as they remove the need for preprocessing, allowing us to focus solely on optimizing the feature extraction process."} delay={20} />
            </Typography>
        </Box>

        <Box sx={{ scrollSnapAlign: 'start', height: '100vh' , bgcolor: 'white'}}>
        <Typography variant="h3" component="h3" gutterBottom sx={{ textAlign:"center", position: 'relative', top: '15%', color: '#FE6B8B' }}>
          Proposed Methodology
        </Typography>
        <img src={methodologyGif} alt="Methodology Diagram" style={{ display: 'block', position: 'relative', top: '15%', margin: '0 auto', width: '70%', height: '70%' }} />
      </Box>

      <Box sx={{ scrollSnapAlign: 'start', height: '100vh' , bgcolor: 'black'}}>
        <Typography variant="h3" component="h3" gutterBottom sx={{ textAlign:"center", position: 'relative', top: '20%', color: '#FE6B8B' }}>
          Results 
        </Typography>
        <Box sx={{ mt: 5, mx: 5 ,position: 'relative', top: '30%'}}>
          <DenseTable />
        </Box>
      </Box>

      <Box sx={{ scrollSnapAlign: 'start', height: '100vh' , bgcolor: 'beige'}}>
        <Typography variant="h3" component="h3" gutterBottom sx={{ textAlign:"center", position: 'relative', top: '20%', color: '#FE6B8B' }}>
          Class Seperability Coefficients and Classification Metrics Comparison
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom sx={{ textAlign:"center", position: 'relative', top: '20%', color: 'black' }}>
          Choose Comparison Metrics from the drop down below: 
        </Typography>
        <Box sx={{ mt: 3, mx: 4 ,position: 'relative', top: '19%'}}>
        <ResponsiveBarChart />
        </Box>
      </Box>
      
    </>
  )
}

export default App