import React, { useState, useEffect } from 'react';
import './Inventory.css';
import Navbar from '../Navbar/Navbar';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    quantity: 0,
    expiryDate: '',
  });

  useEffect(() => {
    fetchInventoryData();
  }, []);

  const fetchInventoryData = async () => {
    try {
      const response = await fetch('http://localhost:8080/get');
      const data = await response.json();
      setInventory(data);
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Item added successfully, refresh inventory data
        fetchInventoryData();
        // Reset the form data after successful submission
        setFormData({
          name: '',
          quantity: 0,
          expiryDate: '',
        });
        // Display a success message
        alert('Inventory item added successfully');
      } else {
        console.error('Failed to add inventory item:', response);
        // Display an error message
        alert('Failed to add inventory item');
      }
    } catch (error) {
      console.error('Error adding inventory item:', error);
      // Display an error message
      alert('Error adding inventory item');
    }
  };

  return (
    <div className="inventory-container">
      <Navbar />
      <form onSubmit={handleSubmit} className="add-inventory-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Inventory</button>
      </form>
      <div className='u'>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.expiryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Inventory;
