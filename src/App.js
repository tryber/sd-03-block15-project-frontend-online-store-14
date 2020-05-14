import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shopping from './components/Shopping';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Shopping" component={Shopping} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
