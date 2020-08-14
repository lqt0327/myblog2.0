import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
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
    <HashRouter>
      <IconStyle></IconStyle>
      {
        renderRoutes(routes)
      }
    </HashRouter>
  );
}

export default App;
