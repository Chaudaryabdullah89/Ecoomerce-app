import { render } from 'preact';
// import App from './app.jsx';
// import './index.css';

// render(<App />, document.getElementById('app'))

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './app'; // Ensure this path is correct
// import './index.css';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx';
import './index.css';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);