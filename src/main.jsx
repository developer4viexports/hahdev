// src/index.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// ——— Fontsource imports ———
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import '@fontsource/rufina/400.css';
import '@fontsource/rufina/700.css';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    // Body copy uses Raleway
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    // Headings use Rufina
    h1: { fontFamily: ['Rufina', 'serif'].join(',') },
    h2: { fontFamily: ['Rufina', 'serif'].join(',') },
    h3: { fontFamily: ['Rufina', 'serif'].join(',') },
    h4: { fontFamily: ['Rufina', 'serif'].join(',') },
    h5: { fontFamily: ['Rufina', 'serif'].join(',') },
    h6: { fontFamily: ['Rufina', 'serif'].join(',') },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
