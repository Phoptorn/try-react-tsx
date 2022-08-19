import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </header>
    </div>
  );
}
export default App;