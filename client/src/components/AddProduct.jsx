import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ onProductAdded }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if (!name || !price) {
            setStatusMessage('Please enter both a name and a price.');
            return;
        }

        try {
            setStatusMessage('Adding product...');
            
            const response = await axios.post('http://localhost:5000/api/products', { 
                name: name, 
                price: Number(price) 
            });

            setName('');
            setPrice('');
            setStatusMessage('Bottle added successfully!');
            
            if (onProductAdded) {
                onProductAdded();
            }

            setTimeout(() => setStatusMessage(''), 3000);

        } catch (error) {
            console.error("Error creating product:", error);
            setStatusMessage('Failed to add product. Is the backend server running?');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px auto', padding: '20px', border: '1px solid #444', borderRadius: '8px', maxWidth: '500px', backgroundColor: '#222' }}>
            <h3 style={{ marginTop: 0 }}>Add New Bottle</h3>
            
            <input 
                type="text" 
                placeholder="Bottle Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                style={{ marginRight: '10px', padding: '8px', borderRadius: '4px', border: 'none' }}
            />
            
            <input 
                type="number" 
                placeholder="Price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                style={{ marginRight: '10px', padding: '8px', borderRadius: '4px', border: 'none', width: '80px' }}
            />
            
            <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#646cff', color: 'white', border: 'none', borderRadius: '4px' }}>
                Add Product
            </button>

            {statusMessage && <p style={{ marginTop: '15px', marginBottom: 0, fontSize: '14px', color: '#ffcc00' }}>{statusMessage}</p>}
        </form>
    );
};

export default AddProduct;