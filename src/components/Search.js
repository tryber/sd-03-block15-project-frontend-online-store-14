import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/carrinho.png';

class Search extends React.Component {
  render() {
    return (
      <div>
        <header className="Search">
          <input type="search" data-testid="query-input" className="Input" />
          <button type="Search" data-testid="query-button">Buscar</button>
          <Link to={'/Shopping'}>
            <img
              src={Image}
              alt="Carrinho de Compras"
              data-testid="shopping-cart-button"
              className="Icon-car"
            />
          </Link><br />
        </header>
      </div>
    );
  }
}

export default Search;
