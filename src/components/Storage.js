import React from 'react';

function Storage() {
  const { product } = this.props;
  if (sessionStorage.getItem('item')) {
    const itens = JSON.parse(sessionStorage.getItem('item'));
    const upStorage = sessionStorage.setItem('item', JSON.stringify([...itens, { ...product }]));
    return upStorage;
  }
  const storage = sessionStorage.setItem('item', JSON.stringify([{ ...product }]));
  return storage;
}

export default Storage;
