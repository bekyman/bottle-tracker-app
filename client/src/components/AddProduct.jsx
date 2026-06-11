import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ onProductAdded }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/products', { name, price: Number(price) });
            setName('');
            setPrice('');
            if (onProductAdded) onProductAdded(); 
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0', padding: '15px', border: '1px solid #333', borderRadius: '5px' }}>
            <h3>Add New Bottle</h3>
            <input 
                type="text" placeholder="Bottle Name" value={name} 
                onChange={(e) => setName(e.target.value)} required 
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <input 
                type="number" placeholder="Price" value={price} 
                onChange={(e) => setPrice(e.target.value)} required 
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <button type="submit" style={{ padding: '5px 10px', cursor: 'pointer' }}>Add Product</button>
        </form>
    );
};

export default AddProduct;