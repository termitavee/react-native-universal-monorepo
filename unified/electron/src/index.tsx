import App from '@common/app';
import React from 'react';
import { createRoot } from 'react-dom/client';

const element = document.getElementById('root');

const root = createRoot(element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
