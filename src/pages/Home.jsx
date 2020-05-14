import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import * as api from '../services/api';
import '../styles/Home.css';

class Home extends React.Component {
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
      <div className="Home">
        <div className="Category">
          <h2>Categorias</h2>
          <Categories
            categoriesList={categoriesList}
            selectedCategory={selectedCategory}
            categoryChange={async (event) => {
              await this.setState({ selectedCategory: event.target.value });
            }}
          />
        </div>
        <div>
          <Search />
        </div>
      </div>
    );
  }
}

export default Home;