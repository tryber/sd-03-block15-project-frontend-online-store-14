import React, { Component } from 'react';
import Image from '../image/box.png';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Search from './Search';

export class Shopping extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
            <Route exact path="/" component={Search} />
            <Link to={'/'}>Voltar</Link>
        </BrowserRouter>
        <img src={Image} Alt="empty-box" />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    )
  }
}

export default Shopping;
