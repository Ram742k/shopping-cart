import React from 'react';

const ProductItem = ({ product, isInCart, addToCart, removeFromCart }) => {
  return (
    
    <div className='col-sm-3 mt-1'>
      <div className='card'>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {isInCart ? (
          <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
        ) : (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
