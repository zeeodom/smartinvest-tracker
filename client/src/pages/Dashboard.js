import { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const chartData = [
  { date: '2025-01-01', value: 1000 },
  { date: '2025-02-01', value: 1100 },
  { date: '2025-03-01', value: 1050 }
];

export default function Dashboard() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/portfolio')
      .then((res) => setPortfolio(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <h2>Portfolio Summary</h2>
        {portfolio.map((item) => (
          <div key={item.stock}>
            {item.stock}: {item.shares} shares @ ${item.price}
          </div>
        ))}
      </div>

      <LineChart width={400} height={200} data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
