import { useState, useEffect } from "react";

function StockManagement() {
  const [stock, setStock] = useState([]);
  const [formData, setFormData] = useState({
    item_name: "",
    vendor_name: "",
    quantity: "",
    type: "purchase",
    price: "",
  });

  // Fetch stock data from backend
  useEffect(() => {
    fetch("http://localhost:5000/stock")
      .then((res) => res.json())
      .then((data) => setStock(data))
      .catch((err) => console.error("Error fetching stock:", err));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/stock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setStock([...stock, { id: data.id, ...formData }]);
        setFormData({
          item_name: "",
          vendor_name: "",
          quantity: "",
          type: "purchase",
          price: "",
        });
      })
      .catch((err) => console.error("Error adding stock:", err));
  };

  return (
    <div className="container">
      <h2>Stock Management</h2>

      {/* Stock Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item_name"
          placeholder="Item Name"
          value={formData.item_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="vendor_name"
          placeholder="Vendor Name"
          value={formData.vendor_name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="purchase">Purchase</option>
          <option value="sale">Sale</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Stock</button>
      </form>

      {/* Stock Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Vendor</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.item_name}</td>
              <td>{item.vendor_name}</td>
              <td>{item.quantity}</td>
              <td>{item.type}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockManagement;
