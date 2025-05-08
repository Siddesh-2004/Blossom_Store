import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const {products,cartItems,getCartAmount} = useContext(ShopContext);

  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // 1. Get cart items from context and match them with product data
      const items = Object.keys(cartItems).map((cartKey) => {
        const product = products.find((prod) => prod._id === cartKey); // Find product in the products array by ID
        if (!product) return null; // Skip if product is not found
        const size = Object.keys(cartItems[cartKey])[0]; // Assuming each cart item has only one size key
        const quantity = cartItems[cartKey][size]; // Get the quantity for that size
  
        if (quantity > 0) {
          return {
            name: product.name,
            image: product.image[0], // Assuming first image in the array
            quantity: quantity,
            price: product.price,
            size: size,
          };
        }
        return null;
      }).filter(item => item !== null); // Remove any null items if product is not found or quantity is 0
  
      // 2. Calculate total amount
      const totalAmount = getCartAmount();
  
      // 3. Build the order payload
      const payload = {
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        customerAddress: `${formData.street}, ${formData.city}, ${formData.state}, ${formData.zipCode}, ${formData.country}`,
        items: items,
        totalAmount: totalAmount+10,
        paymentStatus: method === 'cod' ? 'pending' : 'paid',
        orderStatus: 'processing',
        orderDate: Date.now(),
      };
      console.log("Order payload:", payload);
  
      // 4. Send the order data to the backend
      const res = await axios.post('http://localhost:4000/api/orders/create', payload);
  
      toast.success("Order placed successfully!");
      console.log("Order response:", res.data);
  
      // Optional: Clear form or cart, navigate, etc.
      // navigate('/success');
    } catch (err) {
      console.error("Error submitting order:", err);
      toast.error("Something went wrong while placing your order.");
    }
  };



  
  return (
    <div className='flex flex-col justify-between gap-4 pt-5 sm:flex-row sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side Content */}
      <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full gap-4 sm:max-w-[480px]"
    >
      <div className="my-3 text-xl sm:text-2xl font-semibold">
        DELIVERY INFORMATION
      </div>

      <div className="flex gap-3">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="First Name"
          required
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="Last Name"
          required
        />
      </div>

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded"
        type="email"
        placeholder="Email Address"
        required
      />

      <input
        name="street"
        value={formData.street}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded"
        type="text"
        placeholder="Street"
        required
      />

      <div className="flex gap-3">
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="City"
          required
        />
        <input
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="State"
          required
        />
      </div>

      <div className="flex gap-3">
        <input
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="number"
          placeholder="Zip Code"
          required
        />
        <input
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="Country"
          required
        />
      </div>

      <input
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded"
        type="number"
        placeholder="Mobile"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
      {/* Right Side Content */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        {/* Payment Methods Selection */}
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHODS'} />
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-600' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-600' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="RazorPay" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-600' : ''}`}></p>
              <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full mt-8 text-end'>
            <button onClick={() => navigate('/orders')} className='px-16 py-3 text-sm text-white bg-black active:bg-gray-800'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder






