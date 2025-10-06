import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Analysis from './pages/Analysis';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Dashboard</Link> |{" "}
          <Link to="/transactions">Transactions</Link> |{" "}
          <Link to="/analysis">Analysis</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

