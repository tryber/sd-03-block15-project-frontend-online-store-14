import React from 'react';
import { Link } from 'react-router-dom'

class Search extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="Barra-Pesquisa" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label><br />
        <input type="text" />
        <Link to={'/Shopping'}>VVV</Link>
      </div>
    );
  }
}

export default Search;
