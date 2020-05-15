import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/carrinho.png';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queryText: null };
  }

  textInputChangeHandler(value) {
    this.setState({ queryText: value });
  }

  render() {
    const { onChange } = this.props;
    const { queryText } = this.state;
    return (
      <div>
        <header className="Search">
          <input
            type="search"
            data-testid="query-input"
            className="Input"
            onChange={(e) => this.textInputChangeHandler(e.target.value)}
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={() => onChange(queryText)}
          >
            Buscar
          </button>
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
