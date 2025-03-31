import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Expense Manager</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/stock">Stock</Link></li>
        <li><Link to="/income-expense">Income & Expense</Link></li>
        <li><Link to="/invoice">Invoices</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
