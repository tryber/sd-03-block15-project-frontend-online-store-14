import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Image from '../image/carrinho.png';
import Categories from '../components/Categories';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: [],
      selectedCategory: '',
    };
  }

  componentDidMount() {
    api.getCategories().then((categoriesList) => {
      this.setState({ categoriesList });
    });
  }

  render() {
    const { categoriesList, selectedCategory } = this.state;
    return (
      <div>
        <input type="text" />
        <Link to={'/Shopping'}>
          <img src={Image} Alt="Carrinho de Compras" data-testid="shopping-cart-button" />
        </Link><br />
        <label htmlFor="Barra-Pesquisa" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Categories
          categoriesList={categoriesList}
          selectedCategory={selectedCategory}
          categoryChange={async (event) => {
            await this.setState({ selectedCategory: event.target.value });
          }}
        />
      </div>
    );
  }
}

export default Search;
