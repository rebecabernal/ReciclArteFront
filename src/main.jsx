
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/Authcontext'; // Importa el AuthProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* Envuelves la app con el AuthProvider */}
      <App />
      </AuthProvider>
      </StrictMode>
    );

