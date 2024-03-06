import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { FormControl, InputLabel, Select, MenuItem, createTheme, ThemeProvider, Box } from '@mui/material';

const colors = ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600', '#7a5195', '#ef5675', '#66c5cc', '#d45087', 'red'];

function createData(Method,CCR,EER,AUC,MAP,DCT,TD,DBI,DI,SC,FDR,Time) {
  return { Method,CCR,EER,AUC,MAP,DCT,TD,DBI,DI,SC,FDR,Time };
}

const rows = [
  createData('MMC Transform',0.9532,0.3945,0.7273,0.3348,0.0048,26,2.3493,0.1652,0.0177,1.1266,57.3),
  createData('PCA/LDA Transform',0.9607,0.4389,0.7098,0.3384,0.0038,27,2.8163,0.1417,-0.0263,1.0162,108),
  createData('Mohammad Ahmed',0.0063,0.6158,0.1975,0.4391,24,2.9642,0.1321,-0.1836,1.0099,0.4261,59),
  createData('Adrian Ball',0.8563,0.4013,0.6483,0.2456,0.0026,18,2.8266,0.1639,-0.1346,1.1241,45),
  createData('Bojan Divoski',0.8563,0.4007,0.6491,0.2757,0.0069,71,1.9502,0.2322,-0.0576,1.3837,47),
  createData('KwolekB',0.9438,0.413,0.6845,0.3016,0.06,660,2.2992,0.1778,-0.0749,1.1493,66),
  createData('PreisJ',0.9434,0.4461,0.5677,0.0965,0.0017,13,12.5721,0.0216,-0.4941,1.0754,49),
  createData('SinhaA',0.2092,0.4153,0.6224,0.1918,0.0048,45,2.7097,0.181,-0.2226,1.1492,51),
  createData('AliS',0.8033,0.4535,0.6108,0.1321,9.00E-04,2,7.0848,0.0144,-0.4206,1.2709,41),
  createData('AnderssonVO',0.2968,0.3774,0.6722,0.2636,0.0068,68,2.3017,0.1986,-0.0752,1.1362,45),
];

const metrics = ['CCR', 'EER', 'AUC', 'MAP', 'DCT', 'TD', 'DBI', 'DI', 'SC', 'FDR', 'Time'];

function ResponsiveBarChart() {
  const [selectedMetric, setSelectedMetric] = useState(metrics[0]);

  const handleChange = (event) => {
    setSelectedMetric(event.target.value);
  };

  return (
      <div>
        <Box display="flex" justifyContent="center">
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="metric-label">Select</InputLabel>
            <Select
              labelId="metric-label"
              value={selectedMetric}
              onChange={handleChange}
              sx={{ bgcolor: '#FE6B8B', color: 'black', '&:hover': { bgcolor: 'primary.main' } }}
            >
              {metrics.map((metric) => (
                <MenuItem key={metric} value={metric}>
                  {metric}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={rows}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" stroke='black' domain={['auto', 'auto'] } />
            <YAxis dataKey="Method" type="category" stroke='black' width={200} tick={{ fill: 'black', fontWeight: 'bold' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey={selectedMetric}>
              {
                rows.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 10]} />
                ))
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
}

export default ResponsiveBarChart;
