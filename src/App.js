import React from 'react';
import Search from './components/Search';
import Carrinho from './components/Carrinho';
import Shopping from './components/Shopping';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/shopping" component={Shopping} />
        </Switch>
      </BrowserRouter>
      <Carrinho />
    </div>
  );
}

export default App;
