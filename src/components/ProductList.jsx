import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <div className='row'>
      {products.map(product => (
        <ProductItem 
          key={product.id}  
          product={product} 
          isInCart={cart.some(item => item.id === product.id)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
