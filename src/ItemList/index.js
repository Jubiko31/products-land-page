import React from 'react';
import Item from '../Item';
import './list.css'

function ItemList({ products }) {
  return (
    <div className='flex-products'>
      {products.length
        ? products.map((item) => (
          <Item
            key={`product-${item.id}`}
            product={item}
          />
        ))
        : 'No Products in the DB.'
      }
    </div>
  )
}

export default ItemList