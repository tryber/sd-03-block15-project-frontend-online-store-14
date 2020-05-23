import React from 'react';
import { Link } from 'react-router-dom';
import Storage from '../components/Storage';

class Details extends React.Component {
  render() {
    const { product } = this.props;
    const { location: { state: { price, title, thumbnail } } } = this.props;
    return (
      <div>
        <img src={thumbnail} alt="Produto" />
        <p data-testid="product-detail-name">{`${title} - R$${price}`}</p>
        <Storage product={product} />
        <Link to="/">Volta</Link>
      </div>
    );
  }
}

export default Details;
