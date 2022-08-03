import React from 'react';
import Item from './Item';

function ItemList({ products, addNewProduct }) {
  return (
    <div className='flex-products'>
      {products.length
        ? products.map((item) => (
          <Item
            key={`product-${item.id}`}
            product={item}
            addNewProduct={addNewProduct}
          />
        ))
        : 'No Products in the DB.'
      }
    </div>
  )
}

export default ItemList