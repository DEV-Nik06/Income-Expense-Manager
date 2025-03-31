import { Link } from "react-router-dom";
import "./App.css"
import "./style.css"
import "./Home.css"
import "./invoice.css"

function App() {
  return (
    <div>
      <h1>Income & Expense Manager</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/stock">Stock Management</Link></li>
          <li><Link to="/income-expense">Income & Expense</Link></li>
          <li><Link to="/invoices">Generate Invoices</Link></li>
          {/* <li><Link to="/invoices-list">Invoices List</Link></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default App;
