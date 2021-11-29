import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { 
  BrowserRouter ,
  Routes,
  Route,
  } from "react-router-dom"
import Votes from './routes/votes';


ReactDOM.render(
  <BrowserRouter>
      <Routes>          
        <Route path=":electionParam/votes" element={<Votes/>} />  
           
        <Route path="*" element="not found" />
      </Routes>
    </BrowserRouter>
  ,document.getElementById('root')
);

