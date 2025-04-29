import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
    },
    secondary: {
      main: '#2196f3',
      light: '#6ec6ff',
      dark: '#0069c0',
    },
  },
  components: {
    MuiButton: {styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});
