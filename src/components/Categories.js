import React, { Component } from 'react';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
      ID: '',
    };
    this.listaCategorias = this.listaCategorias.bind(this);
    this.pegaCategoriaEscolhida = this.pegaCategoriaEscolhida.bind(this);
  }

  componentDidMount() {
    this.listaCategorias();
  }

  listaCategorias() {
    fetch('https://api.mercadolibre.com/sites/MLB/categories', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => this.setState({ categorias: data }));
  }

  pegaCategoriaEscolhida(value) {
    this.setState(() => ({ ID: value }));
  }


  render() {
    const { selectedCategory, categoryChange, categoriesList } = this.props;


    return categoriesList.map(({ id, name }) => (
      <div key={id}>
        <input
          data-testid="category"
          type="radio"
          id={id}
          value={id}
          name="categories"
          checked={selectedCategory === id}
          onChange={categoryChange}
          // onClick={() => (id)}

        />
        <label htmlFor={id}>{name}</label>
      </div>
    ));
  }
}

export default Categories;
