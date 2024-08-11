// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color
    },
    secondary: {
      main: '#000000', // Black color
    },
    background: {
      default: '#f5f5f5', // Light gray background
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
    },
  },
});

export default theme;
