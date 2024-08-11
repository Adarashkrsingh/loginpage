import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import LoginPage from './Loginpage';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  
    <ThemeProvider theme={theme}><LoginPage/></ThemeProvider>,
    
    
    

    
    
  
);


