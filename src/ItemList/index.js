/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable no-prototype-builtins */
import React from 'react';
import Item from '../Item';
import './list.css';

function ItemList({
  products, addNewProduct, cart, updateAmount,
}) {
  return (
    <div className="flex-products">
      {products.length
        ? products.map((item) => (
          <Item
            key={`product-${item.id}`}
            product={item}
            addNewProduct={addNewProduct}
            updateAmount={updateAmount}
            selected={cart.hasOwnProperty(item.id)}
            totalSelected={cart[item.id] || 0}
          />
        ))
        : 'No Products in the DB.'}
    </div>
  );
}

export default ItemList;