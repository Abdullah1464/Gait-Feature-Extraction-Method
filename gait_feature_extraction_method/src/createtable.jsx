import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Method,CCR,EER,AUC,MAP,DCT,TD,DBI,DI,SC,FDR,Time) {
  return { Method,CCR,EER,AUC,MAP,DCT,TD,DBI,DI,SC,FDR,Time };
}

const rows = [
  createData('MMC Transform',0.9532,0.3945,0.7273,0.3348,0.0048,26,2.3493,0.1652,0.0177,1.1266,'57.3 m'),
  createData('PCA/LDA Transform',0.9607,0.4389,0.7098,0.3384,0.0038,27,2.8163,0.1417,-0.0263,1.0162,'1.8 h'),
  createData('Mohammad Ahmed',0.0063,0.6158,0.1975,0.4391,24,2.9642,0.1321,-0.1836,1.0099,0.4261,'59 m'),
  createData('Adrian Ball',0.8563,0.4013,0.6483,0.2456,0.0026,18,2.8266,0.1639,-0.1346,1.1241,'45 m'),
  createData('Bojan Divoski',0.8563,0.4007,0.6491,0.2757,0.0069,71,1.9502,0.2322,-0.0576,1.3837,'47 m'),
  createData('KwolekB',0.9438,0.413,0.6845,0.3016,0.06,660,2.2992,0.1778,-0.0749,1.1493,'1.1 h'),
  createData('PreisJ',0.9434,0.4461,0.5677,0.0965,0.0017,13,12.5721,0.0216,-0.4941,1.0754,'49 m'),
  createData('SinhaA',0.2092,0.4153,0.6224,0.1918,0.0048,45,2.7097,0.181,-0.2226,1.1492,'51 m'),
  createData('AliS',0.8033,0.4535,0.6108,0.1321,9.00E-04,2,7.0848,0.0144,-0.4206,1.2709,'41 m'),
  createData('AnderssonVO',0.2968,0.3774,0.6722,0.2636,0.0068,68,2.3017,0.1986,-0.0752,1.1362,'45 m'),
];

export default function DenseTable() {
    return (
      <TableContainer component={Paper} sx={{ bgcolor: 'black' }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ color: 'white' }}>
              <TableCell sx={{ color: 'white' }}>Method</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>CCR</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>EER</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>AUC</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>MAP</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>DCT</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>TD</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>DBI</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>DI</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>SC</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>FDR</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Method} sx={{ color: 'white' }}>
                <TableCell component="th" scope="row" sx={{ color: 'white' }}>
                  {row.Method}
                </TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.CCR}</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.EER}</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.AUC}</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.MAP}</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.DCT}</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.TD}</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.DBI}</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.DI}</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.SC}</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.FDR}</TableCell>
                <TableCell align="right" sx={{ color: 'white' }}>{row.Time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
