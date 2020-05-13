import React from 'react';
import Image from '../image/carrinho.png';
import { BrowserRouter, Link } from 'react-router-dom';
class Carrinho extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to={'/Shopping'}>
            <img src={Image} Alt="Carrinho de Compras" data-testid="shopping-cart-button" />
          </Link>
        </BrowserRouter>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Carrinho;
