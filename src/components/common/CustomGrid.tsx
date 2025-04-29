import { Grid, GridProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ExtendedGridProps extends GridProps {
  item?: boolean;
  container?: boolean;
  xs?: number | boolean;
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  xl?: number | boolean;
}

const CustomGrid = styled(Grid)<ExtendedGridProps>``;
export default CustomGrid;
