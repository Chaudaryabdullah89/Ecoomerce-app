import { BrowserRouter } from "react-router-dom";
import { App } from './app.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  