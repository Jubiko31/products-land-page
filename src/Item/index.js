/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './item.css';

function Item({
  product, addNewProduct, totalSelected, updateAmount, selected,
}) {
  const {
    id, name, price, total, image,
  } = product;
  return (
    <div key={`product-${id}`} className={`item-container ${selected && 'selected-item'}`}>
      <img className="product-img" alt="product" src={image} onClick={() => addNewProduct(id)} />
      <h4 className="product-name">{name}</h4>
      <p className="price">
        Price: $
        {' '}
        {price}
      </p>
      <p className="total">
        Total:
        {' '}
        {total}
      </p>

      <div className="increment-bar">
        <img onClick={() => selected && updateAmount(id, 'decrease')} className="icon" alt="product" src="https://img.icons8.com/ios-glyphs/30/000000/minus.png" />
        <h4 className="count">{totalSelected}</h4>
        <img onClick={() => selected && totalSelected < total && updateAmount(id, 'increase')} className="icon" alt="product" src="https://img.icons8.com/ios-filled/50/000000/plus.png" />
      </div>
    </div>
  );
}

export default Item;
