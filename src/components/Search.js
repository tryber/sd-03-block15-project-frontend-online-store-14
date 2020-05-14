import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Image from '../image/carrinho.png';
import Categories from '../components/Categories';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: '',
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  render() {
    const { categories, selectedCategory } = this.state;
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
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={async (event) => {
            await this.setState({ selectedCategory: event.target.value });
          }}
        />
      </div>
    );
  }
}

export default Search;
