import React from 'react';
import Image from '../image/carrinho.png';

class Carrinho extends React.Component {
  render() {
    return(
      <div>
        <img src={Image} Alt="Carrinho de Compras" data-testid="shopping-cart-button"/>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    )
  }
}

export default Carrinho;
