import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

class ProductCard extends Component {
  addItems() {
    conts {
      products: {
      sessionStorage.setItem(title, price, thumbnail, id)}
    } = this.props;
  }
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <div className="Card" data-testid="product">
        <div className="Title">
          <p>{title}</p>
        </div>
        <div>
          <img src={thumbnail} alt={title} className="Image" />
          <p>{`Preço: ${price}`}</p>
        </div>
        <div className="Link">
          <Link
            to={{ pathname: `/product/${id}`, state: { title, thumbnail, price } }}
            className="btn btn-danger"
            data-testid="product-detail-link"
            product={product}
          >
            Detalhes
        </Link>
        <button
        data-testid="product-add-to-cart"
        onClick={addItems}
        >Adicionar ao carrinho</button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
