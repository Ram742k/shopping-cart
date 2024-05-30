import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'T-shirt',
      description: 'A comfortable and stylish T-shirt.',
      price: 499,
      image: 'public/images/pngegg.png'
    },
    {
      id: 2,
      name: 'Cap',
      description: 'A cool cap for your daily use.',
      price: 399,
      image: 'public/images/pngegg (1).png'
    },
    {
      id: 3,
      name: 'Mugs',
      description: 'A mug for your coffee and tea.',
      price: 299,
      image: 'public/images/pngegg (2).png'
    },
    {
      id: 4,
      name: 'Samsung laptop',
      description: 'A high-performance laptop from Samsung.',
      price: 7999,
      image: 'public/images/laptop-10693.png'
    }

  ];

  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  const increaseQuantity = (product) => {
    setCart(cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} toggleCartVisibility={toggleCartVisibility} />
      {isCartVisible && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          toggleCartVisibility={toggleCartVisibility}
        />
      )}
      <ProductList
        products={products}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default App;
