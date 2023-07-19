import React, { useState } from 'react';
import './PointofSale.css';
import Navbar from '../Navbar/Navbar';

const PointOfSale = () => {
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState('');

  const handleAddToCart = () => {
    const cartItem = {
      name: itemName,
      quantity: itemQuantity,
      price: parseFloat(itemPrice),
    };
    setCart([...cart, cartItem]);
    setItemName('');
    setItemQuantity(1);
    setItemPrice('');
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className='body'>
      <Navbar/>
    <div>

    </div>
    <div className="pos-container">
      <h2 className="pos-heading"></h2>

      <div className="item-inputs">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={itemQuantity}
          min="1"
          onChange={(e) => setItemQuantity(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Price"
          value={itemPrice}
          step="0.01"
          onChange={(e) => setItemPrice(parseFloat(e.target.value))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <div className="cart-container">
        <h3 className="cart-heading">Cart</h3>
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Price: ${item.price.toFixed(2)}</span>
              <strong>Total: ${(item.quantity * item.price).toFixed(2)}</strong>
              <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <p className="cart-total">Total: ${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
    </div>
  );
};

export default PointOfSale;
