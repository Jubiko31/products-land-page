import React from 'react';
import '../App.scss';

function Item ({product, addNewProduct, totalSelected = 0}) {
  const { id, name, price, total, image } = product;
  return (
   <div className='item-container' key={`product-${id}`}>
      <img className='product-img' alt='product' src={image} onClick={() => addNewProduct(id)}/>
      <h4 className='product-name'>{name}</h4> 
      <p className='price'>Price: $ {price}</p>
      <p className='total'>Total: {total}</p>
        
    <div className='increment-bar'>
      <img onClick={() => this.updateAmount(id, 'decrease')} className='icon' alt='product' src="https://img.icons8.com/ios-glyphs/30/000000/minus.png"/>
      <h4 className='count'>{totalSelected}</h4>
      <img onClick={() => this.updateAmount(id, 'increase')} className='icon' alt='product' src="https://img.icons8.com/ios-filled/50/000000/plus.png"/>
    </div> 
   </div>
  )
}

export default Item