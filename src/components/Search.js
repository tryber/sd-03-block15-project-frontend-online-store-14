import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="Barra-Pesquisa" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label><br />
        <input type="text" />
      </div>
    );
  }
}

export default Search;
