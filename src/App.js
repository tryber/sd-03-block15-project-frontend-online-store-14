import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
