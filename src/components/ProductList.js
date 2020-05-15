import React, { Component } from 'react';
import ProductCard from './ProductCard';
import '../styles/Home.css';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="Lista">
        {products.map((product) => <ProductCard product={product} />)}
      </div>
    );
  }
}
export default ProductList;
