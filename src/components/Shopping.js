import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/box.png';
import ImageBack from '../image/back.png';

export class Shopping extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>
          <img src={ImageBack} Alt="back-button" />
        </Link>
        <img src={Image} Alt="empty-box" />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Shopping;
