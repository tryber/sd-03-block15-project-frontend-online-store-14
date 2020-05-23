import React from 'react';
import { Link } from 'react-router-dom';
import Storage from '../components/Storage';
class Details extends React.Component {
  /* constructor(props) {
    super(props);

    this.addItems = this.addItems.bind(this);
  } */

  /* addItems() {
    const { product } = this.props;
    if (localStorage.getItem('item')) {
      const itens = JSON.parse(localStorage.getItem('item'));
      const upStorage = localStorage.setItem('item', JSON.stringify([...itens, { ...product }]));
      return upStorage;
    }
    const storage = localStorage.setItem('item', JSON.stringify([{ ...product }]));
    return storage;
  } */

  render() {
    const { location: { state: { product, addItems } } } = this.props;
    const { title, price, thumbnail } = product;
    console.log(addItems);
    
    return (
      <div>
        <img src={thumbnail} alt="Produto" />
        <p data-testid="product-detail-name">{`${title} - R$${price}`}</p>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={this.addItems}
          >
          Adicionar ao carrinho
        </button>
        <Link to="/">Volta</Link>
      </div>
    );
  }
}

export default Details;
