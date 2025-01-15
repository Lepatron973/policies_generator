// # src/app.tsx

import './index.css'; // import css

import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import * as React from "react";
import { createRoot } from "react-dom/client";


const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  </HashRouter>
);
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);




// ReactDOM.render(<App />, document.getElementById('root'));
