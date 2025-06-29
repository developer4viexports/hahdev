// src/index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Add this

// Fonts
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';
import '@fontsource/rufina/400.css';
import '@fontsource/rufina/700.css';

const theme = createTheme({
  palette: { mode: 'light' },
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
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
    <HelmetProvider> {/* ✅ This is REQUIRED */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
