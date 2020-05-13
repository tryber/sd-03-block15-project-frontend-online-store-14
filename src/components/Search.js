import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/carrinho.png';

class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <Link to={'/Shopping'}>
          <img src={Image} Alt="Carrinho de Compras" data-testid="shopping-cart-button" />
        </Link><br />
        <label htmlFor="Barra-Pesquisa" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </div>
    );
  }
}

export default Search;
