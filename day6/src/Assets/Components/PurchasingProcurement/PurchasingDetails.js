// PurchasingDetails.js
import React, { useState } from 'react';
import './PurchasingDetails.css';
import Navbar from '../Navbar/Navbar';

const PurchasingDetails = () => {
  const [items, setItems] = useState([]);

  const [newProduct, setNewProduct] = useState({
    id: '',
    productName: '',
    price: 0,
    quantity: 0,
  });

  const handleQuantityChange = (id, event) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(event.target.value) } : item
    );
    setItems(updatedItems);
  };

  const handleNewProductChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'id' ? Math.max(0, parseInt(value)) : value,
    }));
  };

  const handleAddProduct = () => {
    if (newProduct.id && newProduct.productName && newProduct.price >= 0) {
      setItems([...items, newProduct]);
      setNewProduct({ id: '', productName: '', price: 0, quantity: 0 });
    }
  };

  const handleRemoveProduct = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='body'>
    <div className="full-body-background">
      <Navbar />

      <div className="purchasing-details">
        <div className="add-new-product">
          <label>
            ID:
            <input
              type="number"
              name="id"
              value={newProduct.id}
              onChange={handleNewProductChange}
            />
          </label>
          <label>
            Product Name:
            <input
              type="text"
              name="productName"
              value={newProduct.productName}
              onChange={handleNewProductChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              min="0"
              value={newProduct.price}
              onChange={handleNewProductChange}
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              min="0"
              value={newProduct.quantity}
              onChange={handleNewProductChange}
            />
          </label>
          <button onClick={handleAddProduct}>Add Product</button>
        </div>

        <h1 className="product-list-heading">Product List</h1>

        <div className="product-list">
          {items.map((item) => (
            <div key={item.id} className="product-item">
              <p>ID: {item.id}</p>
              <p>Product Name: {item.productName}</p>
              <p>Price: ${item.price}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
              </p>
              <p>Total Price: ${item.price * item.quantity}</p>
              <button onClick={() => handleRemoveProduct(item.id)}>Remove</button>
            </div>
          ))}
        </div>

        <h2 className="total-price">Total Price: ${calculateTotalPrice()}</h2>
      </div>
    </div>
    </div>
  );
};

export default PurchasingDetails;
