import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './booking.css';

const TakeAway = () => {
  const [showCart, setShowCart] = useState(false);
  const [takeawayTime, setTakeawayTime] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  const { totalWithGST = 0, cart = [] } = location.state || {};
  const cartItems = Array.isArray(cart) ? cart : [];

  const handleTimeChange = (e) => {
    setTakeawayTime(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const validateTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const selectedTime = new Date();
    selectedTime.setHours(hours, minutes);

    const startTime = new Date();
    startTime.setHours(11, 0); // 11:00 AM

    const endTime = new Date();
    endTime.setHours(22, 0); // 10:00 PM

    return selectedTime >= startTime && selectedTime <= endTime;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateTime(takeawayTime)) {
      toast.error('Please select a time between 11:00 AM and 10:00 PM.');
      return;
    }

    navigate('/payment', {
      state: {
        totalWithGST,
        cartItems,
        takeawayTime,
        phone,
        username,
        orderType: 'Takeaway'
      }
    });
  };

  return (
    <div className="bg1">
      <h2>Take Away</h2>
      <div>Total Price with GST: ₹{totalWithGST}</div>
      <div className="takeaway-time">
        <h3>Select Takeaway Time:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              value={takeawayTime}
              onChange={handleTimeChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <button onClick={() => setShowCart(!showCart)}>
        {showCart ? 'Hide Cart' : 'Show Cart'}
      </button>
      {showCart && (
        <div className="cart-details">
          <h4>Cart Items:</h4>
          <ul>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <li key={item._id}>
                  {item.title} - Quantity: {item.quantity} - Price: ₹{item.price}
                </li>
              ))
            ) : (
              <li>No items in the cart.</li>
            )}
          </ul>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default TakeAway;
