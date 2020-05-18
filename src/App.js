import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shopping from './components/Shopping';
import Details from './pages/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Shopping" component={Shopping} />
          <Route path="/product/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
