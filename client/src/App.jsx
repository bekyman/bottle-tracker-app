import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => setRefreshKey(prev => prev + 1);

  return (
    <div className="App" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', color: '#fff' }}>
      <h1>Bottle Tracker Dashboard</h1>
      <AddProduct onProductAdded={handleRefresh} />
      <ProductList key={refreshKey} />
    </div>
  );
}

export default App;