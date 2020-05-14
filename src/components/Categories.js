import React, { Component } from 'react';

export class Categories extends Component {
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
        />
        <label htmlFor={id}>{name}</label>
      </div>
    ));
  }
}

export default Categories;
