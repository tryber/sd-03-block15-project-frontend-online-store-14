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
            to={{ pathname: `/product/${id}`, state: { title, thumbnail, price } }}
            className="btn btn-danger"
            data-testid="product-detail-link"
            product={product}
          >
            Detalhes
          </Link>
          <Storage product={product} />
        </div>
      </div >
    );
  }
}

export default ProductCard;
