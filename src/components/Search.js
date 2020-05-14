import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/carrinho.png';
import '../styles/Search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="Container">
        <header className="Header">
          <input type="text" className="Input" />
          <Link to={'/Shopping'}>
            <img
              src={Image}
              alt="Carrinho de Compras"
              data-testid="shopping-cart-button"
              className="Icon-car"
            />
          </Link><br />
          <label htmlFor="Barra-Pesquisa" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </header>
      </div>
    );
  }
}

export default Search;
