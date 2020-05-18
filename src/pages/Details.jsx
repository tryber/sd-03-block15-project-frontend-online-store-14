import React from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component {
  render() {
    const { location: { state: { price, title, thumbnail } } } = this.props;
    return (
      <div>
        <img src={thumbnail} alt="Produto" />
        <p data-testid="product-detail-name">{`${title} - R$${price}`}</p>
        <Link to="/">Volta</Link>
      </div>
    );
  }
}

export default Details;
