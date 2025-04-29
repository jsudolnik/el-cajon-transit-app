import { Grid, GridProps } from '@mui/material';
import React from 'react';

const CustomGrid: React.FC<GridProps> = (props) => {
  return <Grid {...props} />;
};

export default CustomGrid;
