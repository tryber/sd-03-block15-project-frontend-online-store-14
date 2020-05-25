import React from 'react';
import { Link } from 'react-router-dom';
import Storage from '../components/Storage';
import Image from '../image/carrinho.png';

class Details extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <img src={thumbnail} alt="Produto" />
        <p data-testid="product-detail-name">{`${title} - R$${price}`}</p>
        <Storage product={product} test={"product-detail-add-to-cart"} />
        <Link to={'/Shopping'}>
          <img
            src={Image}
            alt="Carrinho de Compras"
            data-testid="shopping-cart-button"
            className="Icon-car"
          />
        </Link><br />
        <Link to="/">Volta</Link>
      </div>
    );
  }
}

export default Details;
