import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Router , Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import ForgotPass from './ForgotPass';
import Phone from './Phone';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/register' Component={Register}></Route>
      <Route path='/' Component={Login}></Route>
      <Route path='/dashboard' Component={App}></Route>
      <Route path='/forgotpass' Component={ForgotPass}></Route>
      <Route path='/phone' Component={Phone } ></Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
