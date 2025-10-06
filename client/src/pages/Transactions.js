import { useState } from 'react';
export default function Transactions() {
  const [stock, setStock] = useState('');
  const [shares, setShares] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ stock, shares });
  }

  return (
    <div>
      <h1>Transactions</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Stock Symbol" value={stock} onChange={(e) => setStock(e.target.value)} />
        <input placeholder="Shares" type="number" value={shares} onChange={(e) => setShares(e.target.value)} />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}
