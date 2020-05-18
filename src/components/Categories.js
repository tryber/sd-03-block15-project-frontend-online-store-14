import React, { Component } from 'react';

export class Categories extends Component {
  render() {
    const { categoriesList, handleChange } = this.props;

    return categoriesList.map(({ id, name }) => (
      <div key={id}>
        <input
          data-testid="category"
          type="radio"
          id={id}
          name="categories"
          onChange={() => handleChange(id)}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    ));
  }
}

export default Categories;
