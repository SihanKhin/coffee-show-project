import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './app/store'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
           <Router>
               <Routes>
                   <Route path='/*' element={<App />} />
               </Routes>
           </Router>
    </Provider>
  </React.StrictMode>
);