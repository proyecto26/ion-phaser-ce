import React from 'react';
import { createRoot } from 'react-dom/client';
import { initPhaser } from './global';
import './index.css';
import App from './App';

// Initialize phaser-ce globals before rendering
initPhaser().then(() => {
  const container = document.getElementById('root');
  const root = createRoot(container!);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
