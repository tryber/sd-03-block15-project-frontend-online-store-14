import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/emptybox.png';
import ImageBack from '../image/back.png';
import '../styles/Shopping.css';

export class Shopping extends Component {
  render() {
    return (
      <div className="Container">
        <header className="Header">
          <Link to={'/'}>
            <img src={ImageBack} alt="back-button" className="Back-icon" />
          </Link>
        </header>
        <section className="Section">
          <img src={Image} alt="empty-box" className="Icon-box" />
          <p
            data-testid="shopping-cart-empty-message" className="Empty-text"
          >
            Seu&nbsp;carrinho&nbsp;está&nbsp;vazio
          </p>
        </section>
      </div>
    );
  }
}

export default Shopping;
