import { render } from 'preact';

import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx';
import ShopContextProvider from './context/shopcontext';
import './index.css';
render(
  <BrowserRouter>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  </BrowserRouter>,
  document.getElementById('app')
);