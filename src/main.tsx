import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './providers/theme-provider.tsx';
import { Toaster } from './components/ui/toaster';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <App />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);