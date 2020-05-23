import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/emptybox.png';
import ImageBack from '../image/back.png';
import '../styles/Shopping.css';

export class Shopping extends Component {
  render() {
    const itens = JSON.parse(localStorage.getItem('item'));
    return (
      <div className="Container">
        <header className="Header">
          <Link to={'/'}>
            <img src={ImageBack} alt="back-button" className="Back-icon" />
          </Link>
        </header>
        <section className="Section">
          {itens !== null &&
            <div>
              <h2 data-testid="shopping-cart-product-quantity">Quantidade: {itens.length}</h2>
              {itens.map((element, index) => <div data-testid="shopping-cart-product-name" key={index}>
                <p>{element.title}</p>
                <img src={element.thumbnail} alt={element.title} className="Image" />
              </div>)}
            </div>
          }
          {itens === null &&
            <div>
              <img src={Image} alt="empty-box" className="Icon-box" />
              <p
                data-testid="shopping-cart-empty-message" className="Empty-text"
              >
                Seu&nbsp;carrinho&nbsp;está&nbsp;vazio
              </p>
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Shopping;
