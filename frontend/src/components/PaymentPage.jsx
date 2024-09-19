// // // import React, { useState, useEffect } from 'react';
// // // import { useLocation, useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import './pay.css';

// // // // Full-screen success animation for successful payment
// // // const SuccessAnimation = ({ onAnimationEnd }) => {
// // //   useEffect(() => {
// // //     const timer = setTimeout(() => {
// // //       onAnimationEnd();
// // //     }, 3000); // Duration of the success animation

// // //     return () => clearTimeout(timer);
// // //   }, [onAnimationEnd]);

// // //   return (
// // //     <div className="success-animation-full">
// // //       <div className="success-animation-content">
// // //         <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //           <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" />
// // //           <path d="M6 12l4 4 8-8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// // //         </svg>
// // //         <p>Payment Successful!</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const PaymentPage = () => {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();

// // //   const {
// // //     totalWithGST = 0,
// // //     cart = [], // Ensure the key matches with what you used in BookTable
// // //     username = '',
// // //     phone = '',
// // //     selectedOption = '',
// // //     selectedDate = '',
// // //     selectedTimes = [],
// // //     takeawayTime = '',
// // //     orderType,
// // //     address,
// // //     email,
// // //     rollNumber
// // //   } = location.state || {};

// // //   const [orderCode, setOrderCode] = useState('');
// // //   const [message, setMessage] = useState('');
// // //   const [paymentCompleted, setPaymentCompleted] = useState(false);
// // //   const [showCardForm, setShowCardForm] = useState(false);
// // //   const [cardNumber, setCardNumber] = useState('');
// // //   const [expiryDate, setExpiryDate] = useState('');
// // //   const [cvv, setCvv] = useState('');
// // //   const [paymentError, setPaymentError] = useState('');
// // //   const [animationFinished, setAnimationFinished] = useState(false);
// // //   const [showOptions, setShowOptions] = useState(false); // New state for showing payment options

// // //   useEffect(() => {
// // //     console.log('Cart Items:', cart); // Debug statement
// // //     generateOrderCode();
// // //   }, [cart]);

// // //   useEffect(() => {
// // //     if (orderCode) {
// // //       let msg = `Welcome to KEC Food Court! 🍽️\n\n`;
// // //       msg += `Order Summary:\n\nTotal Price with GST: ₹${totalWithGST.toFixed(2)}\n\n`;
// // //       msg += `Order Code: ${orderCode}\n\n`;

// // //       if (orderType === 'Table Booking') {
// // //         msg += `Booking Details:\nRoll Number: ${rollNumber}\nUsername: ${username}\nPhone: ${phone}\nSelected Table: ${selectedOption}\nDate: ${selectedDate}\nTime Slots: ${selectedTimes.join(', ')}`;
// // //       } else if (orderType === 'Home Delivery') {
// // //         msg += `Delivery Information:\nName: ${username}\nPhone: ${phone}\nAddress: ${address}`;
// // //       } else if (orderType === 'Takeaway') {
// // //         msg += `Takeaway Details:\nUsername: ${username}\nPhone: ${phone}\nTakeaway Time: ${takeawayTime}`;
// // //       }

// // //       msg += `\n\nOrder Summary:\n`;
// // //       cart.forEach(item => {
// // //         msg += `${item.title} - Quantity: ${item.quantity} - Price: ₹${item.price}\n`;
// // //       });

// // //       msg += `\n\nThank you for ordering with KEC Food Court! 🎉🍽️😊`;
// // //       msg += `\n\nIt takes about 1 hour to make your order. And use the Order Code for Verify Your Order!`;

// // //       const encodedMessage = encodeURIComponent(msg);
// // //       setMessage(encodedMessage);
// // //     }
// // //   }, [orderCode, orderType, totalWithGST, username, phone, selectedOption, selectedDate, selectedTimes, takeawayTime, cart, address, rollNumber]);

// // //   const generateOrderCode = () => {
// // //     // Simulate generating an order code
// // //     const code = Math.random().toString(36).substr(2, 8).toUpperCase();
// // //     setOrderCode(code);
// // //   };

// // //   const handleCardNumberChange = (e) => setCardNumber(e.target.value);
// // //   const handleExpiryDateChange = (e) => setExpiryDate(e.target.value);
// // //   const handleCvvChange = (e) => setCvv(e.target.value);

// // //   const handleCardPayment = (e) => {
// // //     e.preventDefault();

// // //     // Check if all fields are filled
// // //     if (cardNumber && expiryDate && cvv) {
// // //       // Simulate successful payment
// // //       setPaymentCompleted(true);
// // //     } else {
// // //       setPaymentError('Please fill in all card details.');
// // //     }
// // //   };

// // //   const handleCashPayment = async () => {
// // //     try {
// // //       // Save order directly to the database without payment
// // //       await axios.post('/api/save-order', { cart, totalWithGST, username, phone, address, email, rollNumber, orderCode });
// // //       setPaymentCompleted(true);
// // //     } catch (error) {
// // //       setPaymentError('Failed to save order. Please try again.');
// // //     }
// // //   };

// // //   const handleSuccessAnimationEnd = () => {
// // //     setAnimationFinished(true);
// // //     setShowOptions(true); // Show payment options after animation
// // //   };

// // //   const handleViewOrderClick = () => {
// // //     navigate('/order-summary', { state: { orderCode } });
// // //   };

// // //   return (
// // //     <div className="bg1">
// // //       <h2>Payment Page</h2>
// // //       <div>
// // //         <hr />
// // //         {orderType === 'Table Booking' && (
// // //           <>
// // //             <h3>Booking Details</h3>
// // //             <p><strong>Roll Number:</strong> {rollNumber}</p>
// // //             <p><strong>Username:</strong> {username}</p>
// // //             <p><strong>Phone:</strong> {phone}</p>
// // //             <p><strong>Selected Table:</strong> {selectedOption}</p>
// // //             <p><strong>Date:</strong> {selectedDate}</p>
// // //             <p><strong>Time Slots:</strong> {selectedTimes.join(', ')}</p>
// // //             <hr />
// // //           </>
// // //         )}
// // //         {orderType === 'Home Delivery' && (
// // //           <>
// // //             <h3>Delivery Information</h3>
// // //             <p><strong>Order Type:</strong> {orderType}</p>
// // //             <p><strong>Name:</strong> {username}</p>
// // //             <p><strong>Phone:</strong> {phone}</p>
// // //             <p><strong>Address:</strong> {address}</p>
// // //             <hr />
// // //           </>
// // //         )}
// // //         {orderType === 'Takeaway' && (
// // //           <>
// // //             <h3>Takeaway Details</h3>
// // //             <p><strong>Order Type:</strong> {orderType}</p>
// // //             <p><strong>Username:</strong> {username}</p>
// // //             <p><strong>Phone:</strong> {phone}</p>
// // //             <p><strong>Takeaway Time:</strong> {takeawayTime}</p>
// // //             <hr />
// // //           </>
// // //         )}
// // //         <p><strong>Total Price with GST:</strong> ₹{totalWithGST.toFixed(2)}</p>
// // //         <hr />
// // //         <h4>Ordered Items</h4>
// // //         <ul>
// // //           {cart.length > 0 ? (
// // //             cart.map((item) => (
// // //               <li key={item._id}>
// // //                 {item.title} - Quantity: {item.quantity} - Price: ₹{item.price}
// // //               </li>
// // //             ))
// // //           ) : (
// // //             <li>No items in the cart.</li>
// // //           )}
// // //         </ul>
// // //         <hr />
// // //         <h4>Message Content:</h4>
// // //         <pre>{decodeURIComponent(message)}</pre>
// // //         <hr />
// // //         <div className="payment-buttons-container">
// // //           {!paymentCompleted && !showCardForm && (
// // //             <>
// // //               <button className="confirm-payment" onClick={() => setShowCardForm(true)}>Submit Payment</button>
// // //               <button className="view-order" onClick={handleViewOrderClick}>View Order</button>
// // //             </>
// // //           )}
// // //           {paymentCompleted && !animationFinished && (
// // //             <SuccessAnimation onAnimationEnd={handleSuccessAnimationEnd} />
// // //           )}
// // //           {paymentCompleted && animationFinished && !showOptions && (
// // //             <button className="view-order" onClick={handleViewOrderClick}>View Order</button>
// // //           )}
// // //           {showOptions && !paymentCompleted && (
// // //             <div className="payment-options">
// // //               <button className="cash-payment" onClick={handleCashPayment}>Cash</button>
// // //               <button className="make-payment" onClick={() => setShowCardForm(true)}>Make Payment</button>
// // //             </div>
// // //           )}
// // //         </div>
// // //         {showCardForm && (
// // //           <form onSubmit={handleCardPayment}>
// // //             <div className="form-group">
// // //               <label htmlFor="cardNumber">Card Number:</label>
// // //               <input
// // //                 type="text"
// // //                 id="cardNumber"
// // //                 value={cardNumber}
// // //                 onChange={handleCardNumberChange}
// // //                 placeholder="Card Number"
// // //                 maxLength="19"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
// // //               <input
// // //                 type="text"
// // //                 id="expiryDate"
// // //                 value={expiryDate}
// // //                 onChange={handleExpiryDateChange}
// // //                 placeholder="MM/YY"
// // //                 maxLength="5"
// // //               />
// // //             </div>
// // //             <div className="form-group">
// // //               <label htmlFor="cvv">CVV:</label>
// // //               <input
// // //                 type="text"
// // //                 id="cvv"
// // //                 value={cvv}
// // //                 onChange={handleCvvChange}
// // //                 placeholder="CVV"
// // //                 maxLength="3"
// // //               />
// // //             </div>
// // //             <button type="submit">Submit Payment</button>
// // //           </form>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PaymentPage;
// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import './pay.css';

// // // Full-screen success animation for successful payment
// // const SuccessAnimation = ({ onAnimationEnd }) => {
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       onAnimationEnd();
// //     }, 3000); // Duration of the success animation

// //     return () => clearTimeout(timer);
// //   }, [onAnimationEnd]);

// //   return (
// //     <div className="success-animation-full">
// //       <div className="success-animation-content">
// //         <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //           <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" />
// //           <path d="M6 12l4 4 8-8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //         </svg>
// //         <p>Payment Successful!</p>
// //       </div>
// //     </div>
// //   );
// // };

// // const PaymentPage = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const {
// //     totalWithGST = 0,
// //     cart = [],
// //     username = '',
// //     phone = '',
// //     email = '',
// //     rollNumber = '',
// //     orderType
// //   } = location.state || {};

// //   const [paymentCompleted, setPaymentCompleted] = useState(false);
// //   const [showCardForm, setShowCardForm] = useState(false);
// //   const [cardNumber, setCardNumber] = useState('');
// //   const [expiryDate, setExpiryDate] = useState('');
// //   const [cvv, setCvv] = useState('');
// //   const [paymentError, setPaymentError] = useState('');
// //   const [animationFinished, setAnimationFinished] = useState(false);
// //   const [orderCode, setOrderCode] = useState('');

// //   useEffect(() => {
// //     generateOrderCode();
// //   }, []);

// //   const generateOrderCode = () => {
// //     const code = Math.random().toString(36).substr(2, 8).toUpperCase();
// //     setOrderCode(code);
// //   };

// //   const handleCardPayment = async (e) => {
// //     e.preventDefault();

// //     if (cardNumber && expiryDate && cvv) {
// //       try {
// //         // Simulate successful payment and store order
// //         await saveOrder('Card');
// //         setPaymentCompleted(true);
// //       } catch (error) {
// //         setPaymentError('Payment failed. Try again.');
// //       }
// //     } else {
// //       setPaymentError('Please fill in all card details.');
// //     }
// //   };

// //   const handleCashPayment = async () => {
// //     try {
// //       // Save order with cash payment type
// //       await saveOrder('Cash');
// //       setPaymentCompleted(true);
// //     } catch (error) {
// //       setPaymentError('Failed to save order. Please try again.');
// //     }
// //   };

// //   const saveOrder = async (paymentType) => {
// //     await axios.post('/api/save-order', {
// //       rollNumber,
// //       username,
// //       email,
// //       phone,
// //       cart,
// //       totalWithGST,
// //       orderCode,
// //       paymentType
// //     });
// //   };

// //   const handleSuccessAnimationEnd = () => {
// //     setAnimationFinished(true);
// //   };

// //   const handleViewOrderClick = () => {
// //     navigate('/order-summary', { state: { orderCode } });
// //   };

// //   return (
// //     <div className="bg1">
// //       <h2>Payment Page</h2>
// //       <p><strong>Total Price with GST:</strong> ₹{totalWithGST.toFixed(2)}</p>

// //       <div className="payment-buttons-container">
// //         {!paymentCompleted && !showCardForm && (
// //           <>
// //             <button className="cash-payment" onClick={handleCashPayment}>Cash</button>
// //             <button className="make-payment" onClick={() => setShowCardForm(true)}>Submit Payment</button>
// //           </>
// //         )}
// //         {paymentCompleted && !animationFinished && (
// //           <SuccessAnimation onAnimationEnd={handleSuccessAnimationEnd} />
// //         )}
// //         {paymentCompleted && animationFinished && (
// //           <button className="view-order" onClick={handleViewOrderClick}>View Order</button>
// //         )}
// //       </div>

// //       {showCardForm && (
// //         <form onSubmit={handleCardPayment}>
// //           <div className="form-group">
// //             <label htmlFor="cardNumber">Card Number:</label>
// //             <input
// //               type="text"
// //               id="cardNumber"
// //               value={cardNumber}
// //               onChange={(e) => setCardNumber(e.target.value)}
// //               placeholder="Card Number"
// //               maxLength="19"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
// //             <input
// //               type="text"
// //               id="expiryDate"
// //               value={expiryDate}
// //               onChange={(e) => setExpiryDate(e.target.value)}
// //               placeholder="MM/YY"
// //               maxLength="5"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="cvv">CVV:</label>
// //             <input
// //               type="text"
// //               id="cvv"
// //               value={cvv}
// //               onChange={(e) => setCvv(e.target.value)}
// //               placeholder="CVV"
// //               maxLength="3"
// //             />
// //           </div>
// //           <button type="submit">Confirm Payment</button>
// //         </form>
// //       )}
// //       {paymentError && <p>{paymentError}</p>}
// //     </div>
// //   );
// // };

// // export default PaymentPage;

// // import React from 'react';
// // import { useLocation } from 'react-router-dom';

// // const PaymentPage = () => {
// //   const { state } = useLocation();
// //   const { rollNumber, name, email, phone, cart, totalWithGST, paymentType } = state;

// //   return (
// //     <div>
// //       <h2>Payment Summary</h2>
// //       <p><strong>Roll Number:</strong> {rollNumber}</p>
// //       <p><strong>Name:</strong> {name}</p>
// //       <p><strong>Email:</strong> {email}</p>
// //       <p><strong>Phone:</strong> {phone}</p>

// //       <h3>Cart Details</h3>
// //       <ul>
// //         {cart.map((item, index) => (
// //           <li key={index}>
// //             {item.title} - {item.quantity} pcs - ₹{item.price} per item 
// //             <br />
// //             <strong>Total:</strong> ₹{(item.price * item.quantity).toFixed(2)}
// //           </li>
// //         ))}
// //       </ul>
// //       <p><strong>Total with GST:</strong> ₹{totalWithGST.toFixed(2)}</p>

// //       <h3>Payment Method: {paymentType}</h3>
// //     </div>
// //   );
// // };

// // export default PaymentPage;
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import gpay from '../assets/gpay.png'
// const PaymentPage = () => {
//   const { state } = useLocation();
//   const { role, email, phone, cart, totalWithGST, paymentType } = state;

//   return (
//     <div>
//       <h2>Payment Summary</h2>
//       <p><strong>Role:</strong> {role}</p>
//       <p><strong>Email:</strong> {email}</p>
//       <p><strong>Phone:</strong> {phone}</p>

//       <h3>Cart Details</h3>
//       <ul>
//         {cart.map((item, index) => (
//           <li key={index}>
//             {item.title} - {item.quantity} pcs - ₹{item.price} per item
//             <br />
//             <strong>Total:</strong> ₹{(item.price * item.quantity).toFixed(2)}
//           </li>
//         ))}
//       </ul>
//       <p><strong>Total with GST:</strong> ₹{totalWithGST.toFixed(2)}</p>

//       <h3>Payment Method: {paymentType}</h3>
//       {paymentType === 'GPay' ? (
//         <div>
//           <h3>Scan the QR code to pay with GPay</h3>
//           <img
//             src={gpay}
//             alt="QR Code for GPay"
//             style={{ width: '200px', height: '200px' }}
//           />
//           <p>Total Amount: ₹{totalWithGST.toFixed(2)}</p>
//         </div>
//       ) : (
//         <div>
//           <h3>Complete your payment in cash</h3>
//           <p>Total Amount: ₹{totalWithGST.toFixed(2)}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode';
import './PaymentPage.css'; // Import your CSS file

const PaymentPage = () => {
  const { state } = useLocation();
  const { role, email, phone, cart, totalWithGST, paymentType } = state;

  const upiId = 'varshatheeran@okhdfcbank'; // Replace with your UPI ID
  const upiLink = `upi://pay?pa=${upiId}&pn=Varsha&am=${totalWithGST}&cu=INR`;
  const canvasRef = useRef(null);

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const canvas = canvasRef.current;
        await QRCode.toCanvas(canvas, upiLink, { errorCorrectionLevel: 'H' });
      } catch (error) {
        console.error('Error generating QR Code:', error);
      }
    };

    generateQRCode();
  }, [upiLink]);

  return (
    <div className="container">
      <h2>Payment Summary</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>

      <h3>Cart Details</h3>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price per Item</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price}</td>
              <td>₹{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p><strong>Total:</strong> ₹{totalWithGST.toFixed(2)}</p>

      <h3>Payment Method: {paymentType}</h3>
      {paymentType === 'GPay' ? (
        <div>
          <div className="canvas-container">
            <canvas ref={canvasRef} />
          </div>
          <p>Total Amount: ₹{totalWithGST.toFixed(2)}</p>
        </div>
      ) : (
        <div>
          <h3>Complete your payment in cash</h3>
          <p>Total Amount: ₹{totalWithGST.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
