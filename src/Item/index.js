import React from 'react';
import '../App.scss';
import './item.css'

function Item ({product }) {
  const { id, name, price, total, image } = product;
  return (
   <div key={`product-${id}`} className='item-container' >
      <img className='product-img' alt='product' src={image}/>
      <h4 className='product-name'>{name}</h4> 
      <p className='price'>Price: $ {price}</p>
      <p className='total'>Total: {total}</p>
        
    <div className='increment-bar'>
      <img className='icon' alt='product' src="https://img.icons8.com/ios-glyphs/30/000000/minus.png"/>
      <h4 className='count'>0</h4>
      <img className='icon' alt='product' src="https://img.icons8.com/ios-filled/50/000000/plus.png"/>
    </div> 
   </div>
  )
}

export default Item