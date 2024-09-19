// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './booking.css';

// const HomeDelivery = () => {
//   const [showCart, setShowCart] = useState(false);
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const navigate = useNavigate();
  
//   const location = useLocation();
//   const { totalWithGST = 0, cart = [] } = location.state || {};

//   const cartItems = Array.isArray(cart) ? cart : [];

//   // List of address options
//   const addressOptions = [
//     'Chithode',
//     'Perundurai',
//     'Bhavani',
//     'Kavundhapaadi',
//     'Komarapalayam',
//     'Tindal',
//     'Nasiyanur',
//     'Karungalpalayam',
//     'Telephone Nagar',
//     'Erode Bus Stand',
//     'VOC Park',
//     'Erode Railway Station',
//     'VilarasamPatti',
//     'KanchiKovil'
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Navigate to PaymentPage with necessary data
//     navigate('/payment', { state: { totalWithGST, cartItems, name, address, phone } });
//   };

//   return (
//     <div className="bg1">
//       <h2>Home Delivery</h2>
//       <div>Total Price with GST: ₹{totalWithGST}</div>
//       <button onClick={() => setShowCart(!showCart)}>
//         {showCart ? 'Hide Cart' : 'Show Cart'}
//       </button>
//       {showCart && (
//         <div className="cart-details">
//           <h4>Cart Items:</h4>
//           <ul>
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <li key={item._id}>
//                   {item.title} - Quantity: {item.quantity} - Price: ₹{item.price}
//                 </li>
//               ))
//             ) : (
//               <li>No items in the cart.</li>
//             )}
//           </ul>
//         </div>
//       )}

//       {/* Delivery Information Form */}
//       <div className="delivery-details">
//         <h3>Enter Delivery Details:</h3>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </label>
//           <label>
//             Address:
//             <select
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             >
//               <option value="" disabled>Select your address</option>
//               {addressOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label>
//             Phone:
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HomeDelivery;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './booking.css';

const HomeDelivery = () => {
  const [showCart, setShowCart] = useState(false);
  const [username, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  
  const location = useLocation();
  const { totalWithGST = 0, cart = [] } = location.state || {};
  const cartItems = Array.isArray(cart) ? cart : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', {
      state: {
        totalWithGST,
        cartItems,
        username,
        address,
        phone,
        orderType: 'Home Delivery'
      }
    });
  };

  const addressOptions = [
    'Chithode',
    'Perundurai',
    'Bhavani',
    'Kavundhapaadi',
    'Komarapalayam',
    'Tindal',
    'Nasiyanur',
    'Karungalpalayam',
    'Telephone Nagar',
    'Erode Bus Stand',
    'VOC Park',
    'Erode Railway Station',
    'VilarasamPatti',
    'KanchiKovil'
  ];

  return (
    <div className="bg1">
      <h2>Home Delivery</h2>
      <div>Total Price with GST: ₹{totalWithGST}</div>
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
      <div className="delivery-details">
        <h3>Enter Delivery Details:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={username} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Address:
            <select value={address} onChange={(e) => setAddress(e.target.value)} required>
              <option value="" disabled>Select your address</option>
              {addressOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            Phone:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HomeDelivery;
