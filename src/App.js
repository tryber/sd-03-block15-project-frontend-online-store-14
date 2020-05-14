import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import Shopping from './components/Shopping';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/Shopping" component={Shopping} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
