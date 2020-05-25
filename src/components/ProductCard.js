import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Storage from '../components/Storage';
import '../styles/Home.css';

class ProductCard extends Component {
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
            to={{ pathname: `/product/${id}`, state: { product } }}
            className="btn btn-danger"
            data-testid="product-detail-link"
          >
            Detalhes
          </Link>
          <Storage product={product} test={'product-add-to-cart'} />
        </div>
      </div >
    );
  }
}

export default ProductCard;
