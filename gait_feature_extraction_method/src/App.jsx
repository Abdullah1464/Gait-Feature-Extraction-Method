import React, { useState } from 'react';
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
import Button from '@mui/material/Button';
import Heterogenous from './Heterogenous Experiment.png'
function App() {

  const [showTypewriter, setShowTypewriter] = useState(true);

  const handleClick = () => {
    setShowTypewriter(false);
    setTimeout(() => setShowTypewriter(true), 0);
  };

  return (
    <>
      <ButtonAppBar />

        <Box sx={{ scrollSnapAlign: 'start', height: '100vh' }}>
          <Typography variant="h2" component="h2" gutterBottom sx={{ textAlign:"center", position: 'relative', top: '20%', color: '#FE6B8B' }}>
            Introduction
          </Typography>
            <Typography variant="h4" sx={{ textAlign:"justify" ,position: 'relative', top: '35%', margin: '0 2rem' }}>
              <Typewriter text={"Gait recognition refers to the identification of individuals based on features acquired from their body movement during walking. Despite the recent advances in the feature extraction process, variations in things such as camera angles, subject pose, occlusions, and clothing make it a computationally challenging task to extract an optimal set of features from gait data. Our research aims to contribute to the state-of-the-art with a machine learning framework for extracting robust gait features from gait data that both reduces the dimensionality of the gait data and maximizes the class separability. This will help us to learn what aspects of walking people generally differ and extract those as general gait features, improving the discriminative power of our feature set. To identify people without the need for group-specific features is convenient as particular people might not always provide annotated learning data. Our research aims to explore Mocap datasets especially as they remove the need for preprocessing, allowing us to focus solely on optimizing the feature extraction process."} delay={10} />
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
          Class Separability Coefficients and Classification Metrics Comparison
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom sx={{ textAlign:"center", position: 'relative', top: '20%', color: 'black' }}>
          Choose from the drop down below: 
        </Typography>
        <Box sx={{ mt: 3, mx: 4 ,position: 'relative', top: '19%'}}>
        <ResponsiveBarChart />
        </Box>
      </Box>

      <Box sx={{ scrollSnapAlign: 'start', height: '100vh' , bgcolor: 'white'}}>
        <Typography variant="h3" component="h3" gutterBottom sx={{ textAlign:"center", position: 'relative', top: '20%', color: '#FE6B8B' }}>
          Heterogeneous Metric 
        </Typography>
        <Box sx={{ mt: 5, mx: 5 ,position: 'relative', top: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={Heterogenous}  style={{height: '50%', width: '50%'}}/>
        </Box>
        <Typography variant="h5" component="h5" gutterBottom sx={{ textAlign:"center", position: 'relative', top: '20%', color: 'black' }}>
          Experiment: Increasing the subjects increased the metrics score as more identities are used for training
        </Typography>
      </Box>

      <Box sx={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <Typography variant="h2" component="h2" gutterBottom sx={{ textAlign:"center", position: 'relative', top: '20%', color: '#FE6B8B' }}>
          Conclusion
        </Typography>
        <Button size='small' variant="contained" color="primary" onClick={handleClick} sx={{fontSize: '0.8rem', padding: '0.5rem 1rem', borderRadius: '20px', textTransform: 'none' }}>
          Animate
        </Button>
        {showTypewriter && (
          <Typography variant="h4" sx={{ textAlign:"justify" ,position: 'relative', top: '20%', margin: '0 2rem' }}>
            <Typewriter text={"In the past, gait recognition features were extracted manually by hand. The field has not advanced much to the point where machine learning could be used to extract these features. Utilizing deep learning models increases the complexity of the models and thus increases the computational time. Although they are accurate but cannot be used in practical terms due to their huge time and space complexity. Our research introduces a balanced approach for gait recognition on unknown subjects for which the identity is not known but the samples are available. It is done by modification of fisher linear discriminant analysis with maximum margin criterion. It is observed that this method outperforms other hand-crafted methods. Although PCA/LDA is performing better in terms of CCR score, but MMC model is also very close to it when it comes to accuracy with far less computational time. The MMC method performs well when evaluated on 4 class separability coefficients, making it very useful in gait recognition applications. The system is tested on 27 walkers and then evaluated on 27 walkers’ making it 50\% ratio with an accuracy of 95.3\% in terms of CCR and when tested on 14 walkers and evaluated on 40 walkers making it 25\% training and 75\% testing, it was over 90\% which depicts that greater the number of identities given for training, better is the result for evaluation."} delay={10} />
          </Typography>
        )}
      </Box>
      
    </>
  )
}

export default App