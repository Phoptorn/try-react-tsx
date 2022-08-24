// https://medium.com/@thanatchakromsang/%E0%B8%A1%E0%B8%B2%E0%B8%88%E0%B8%B1%E0%B8%9A-react-%E0%B8%A2%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%AA%E0%B9%88-container-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-react-docker-45ece149d603

import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
    </div>
  );
}
export default App;