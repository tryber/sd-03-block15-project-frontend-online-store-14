import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.addItems = this.addItems.bind(this);
  }

  addItems() {
    const { product } = this.props;
    if (localStorage.getItem('item')) {
      const itens = JSON.parse(localStorage.getItem('item'));
      const upStorage = localStorage.setItem('item', JSON.stringify([...itens, { ...product }]));
      return upStorage;
    }
    const storage = localStorage.setItem('item', JSON.stringify([{ ...product }]));
    return storage;
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
            to={{ pathname: `/product/${id}`, state: { product } }}
            className="btn btn-danger"
            data-testid="product-detail-link"
          >
            Detalhes
          </Link>
          <button
            data-testid="product-add-to-cart"
            onClick={this.addItems}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div >
    );
  }
}

export default ProductCard;
