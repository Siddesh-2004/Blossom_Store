import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/orders/getAll");
        console.log(response.data);
        if (Array.isArray(response.data)) {
          setOrders(response.data);
          toast.success("Orders loaded successfully");
        } else {
          toast.error("Invalid data format");
          setOrders([]);
        }
      } catch (error) {
        toast.error("Failed to load orders");
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []); 
  const handleDeleteOrder = async (orderId) => {
    console.log("Deleting order with ID:", orderId);
    try {
      await axios.post("http://localhost:4000/api/orders/delete", {
        orderId, // ✅ This results in { orderId: "value" }
      });
      toast.success("Order deleted successfully");

      // Remove deleted order from state
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error(error.response?.data?.message || "Failed to delete order");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 style={{ marginBottom: "1.5rem" }}>Admin Orders</h2>

      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
              background: "#fafafa",
            }}
          >
            <h3 style={{ marginBottom: "0.5rem" }}>{order.customerName}</h3>
            <p><strong>Email:</strong> {order.customerEmail}</p>
            <p><strong>Address:</strong> {order.customerAddress}</p>
            <p><strong>Total:</strong> ₹{order.totalAmount.toFixed(2)}</p>
            <p><strong>Status:</strong> {order.orderStatus} | <strong>Payment:</strong> {order.paymentStatus}</p>
            <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleString()}</p>

            <h4 style={{ marginTop: "1rem" }}>Items:</h4>
            <ul style={{ paddingLeft: "1.2rem" }}>
              {order.items.map((item) => (
                <li key={item._id}>
                  {item.quantity} × {item.name} ({item.size}) – ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <button
            
              onClick={() => {handleDeleteOrder(order._id)}}
              style={{
                background: "red",
                color: "#fff",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete Order
            </button>
          </div>
         
          
        ))
      )}
     
    </div>
  );
};

export default AdminOrders;
