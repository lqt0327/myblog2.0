import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index';
import Firewords from './assets/firewords';
import { IconStyle } from "./assets/iconfont/iconfont";

function App() {
  
  useEffect(()=>{
    let yh = new Firewords();
    yh.init();
  },[])

  return (
    <BrowserRouter>
      <IconStyle></IconStyle>
      {
        renderRoutes(routes)
      }
    </BrowserRouter>
  );
}

export default App;
