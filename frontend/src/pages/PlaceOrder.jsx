import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { products, cartItems, getCartAmount } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState("cod");

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
    paymentMethod: "cod",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "paymentMethod") {
      setPaymentMethod(value);
    }
  };

  const launchRazorpay = async (orderPayload) => {
    try {
      const amount = orderPayload.totalAmount;

      const { data } = await axios.post("http://localhost:4000/api/payment/payment", {
        amount,
        currency: "INR",
      });
      console.log("Razorpay order response:", data);

      const options = {
        key: "rzp_test_C2YjF98ObgL2B5",
        amount: data.amount,
        currency: "INR",
        name: "Blossom",
        description: "Order Payment",
        order_id: data.id,
        handler:  async function (response) {
  try {
    const validateRes = await axios.post("http://localhost:4000/api/payment/validate", {
      razorpay_order_id: data.id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature,
    });
    console.log("Payment validation response:", validateRes);
    console.log("Payment response:", response); 

    if (validateRes.data.success) {
      console.log("Payment validated successfully");
      placeOrder(orderPayload); // Now call placeOrder only if valid
    } else {
      toast.error("Payment validation failed");
    }
  } catch (error) {
    console.error("Error validating payment", error);
    toast.error(error.response.data.message || "Payment validation failed");
  }
}
,
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: { color: "#0f172a" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Razorpay error:", error);
      toast.error("Payment initiation failed.");
    }
  };

  const placeOrder = async (payload, paymentStatus) => {
    try {
      payload.paymentStatus = paymentStatus;
      const res = await axios.post("http://localhost:4000/api/orders/create", payload);
      toast.success("Order placed successfully!");
      console.log("Order response:", res.data);
    } catch (err) {
      console.error("Error submitting order:", err);
      toast.error(err.response.data.message || "Order submission failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const items = Object.keys(cartItems)
      .map((cartKey) => {
        const product = products.find((prod) => prod._id === cartKey);
        if (!product) return null;
        const size = Object.keys(cartItems[cartKey])[0];
        const quantity = cartItems[cartKey][size];

        if (quantity > 0) {
          return {
            name: product.name,
            image: product.image[0],
            quantity: quantity,
            price: product.price,
            size: size,
          };
        }
        return null;
      })
      .filter((item) => item !== null);

    const totalAmount = getCartAmount() + 10;

    const payload = {
      customerName: `${formData.firstName} ${formData.lastName}`,
      customerEmail: formData.email,
      customerAddress: `${formData.street}, ${formData.city}, ${formData.state}, ${formData.zipCode}, ${formData.country}`,
      items: items,
      totalAmount: totalAmount,
      orderStatus: "processing",
      orderDate: Date.now(),
    };
    console.log("Payload:", payload);

    if (paymentMethod === "razorpay") {
      await launchRazorpay(payload);
    } else {
      await placeOrder(payload, "pending");
    }
  };

  return (
    <div className="flex flex-col justify-between gap-4 pt-5 sm:flex-row sm:pt-14 min-h-[80vh] border-t">
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl font-semibold">DELIVERY INFORMATION</div>

        <div className="flex gap-3">
          <input name="firstName" value={formData.firstName} onChange={handleChanges} required placeholder="First Name" className="w-full px-4 py-2 border rounded" />
          <input name="lastName" value={formData.lastName} onChange={handleChanges} required placeholder="Last Name" className="w-full px-4 py-2 border rounded" />
        </div>

        <input name="email" value={formData.email} onChange={handleChanges} required placeholder="Email Address" className="w-full px-4 py-2 border rounded" />

        <input name="street" value={formData.street} onChange={handleChanges} required placeholder="Street" className="w-full px-4 py-2 border rounded" />

        <div className="flex gap-3">
          <input name="city" value={formData.city} onChange={handleChanges} required placeholder="City" className="w-full px-4 py-2 border rounded" />
          <input name="state" value={formData.state} onChange={handleChanges} required placeholder="State" className="w-full px-4 py-2 border rounded" />
        </div>

        <div className="flex gap-3">
          <input name="zipCode" value={formData.zipCode} onChange={handleChanges} required placeholder="Zip Code" type="number" className="w-full px-4 py-2 border rounded" />
          <input name="country" value={formData.country} onChange={handleChanges} required placeholder="Country" className="w-full px-4 py-2 border rounded" />
        </div>

        <input name="mobile" value={formData.mobile} onChange={handleChanges} required placeholder="Mobile" type="number" className="w-full px-4 py-2 border rounded" />

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Select Payment Method</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:shadow-md transition">
              <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === "cod"} onChange={handleChanges} className="accent-green-600 w-4 h-4" />
              <span className="text-gray-700 font-medium">Cash on Delivery</span>
            </label>
            <label className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:shadow-md transition">
              <input type="radio" name="paymentMethod" value="razorpay" checked={formData.paymentMethod === "razorpay"} onChange={handleChanges} className="accent-green-600 w-4 h-4" />
              <span className="text-gray-700 font-medium">Razorpay</span>
            </label>
          </div>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHODS"} />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
