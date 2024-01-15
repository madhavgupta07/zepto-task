import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Test from './Test';
import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
    {/* <Test /> */}
  </StrictMode>
);
