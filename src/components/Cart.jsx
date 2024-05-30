import React from 'react';

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, toggleCartVisibility }) => {
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <button className="close-cart" onClick={toggleCartVisibility}>X</button>
      <h2>Your Cart</h2>
      <hr></hr>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h5>{item.name}</h5>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button className='cart-btn' onClick={() => decreaseQuantity(item)}>-</button>
                  <button className='cart-btn' onClick={() => increaseQuantity(item)}>+</button>
                  <button className='cart-btn' onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
              
            ))}
            
          </ul>
          <div className="cart-total">
            <h3>Total Amount: ${totalAmount}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
