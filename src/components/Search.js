import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/carrinho.png';

class Search extends React.Component {
  render() {
    return (
      <div>
        <header className="Search">
          <input type="search" className="Input" />
          <Link to={'/Shopping'}>
            <img
              src={Image}
              alt="Carrinho de Compras"
              data-testid="shopping-cart-button"
              className="Icon-car"
            />
          </Link><br />
        </header>
        <div className="Lista">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </div>
    );
  }
}

export default Search;
