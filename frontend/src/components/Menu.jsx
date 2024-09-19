// // import React, { useState, useEffect } from 'react';
// // import '../App.css';
// // import { FaShoppingCart } from 'react-icons/fa';  
// // import './menu.css';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // function Menu() {
// //   const [cart, setCart] = useState({});
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [menuItems, setMenuItems] = useState([]);
// //   const GST_RATE = 0.18;
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Fetch available products from backend
// //     const fetchAvailableProducts = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:3001/api/products/available');
// //         setMenuItems(response.data);
// //       } catch (error) {
// //         console.error('Error fetching available products:', error);
// //       }
// //     };

// //     fetchAvailableProducts();
// //   }, []);

// //   const handleAddToCart = (item) => {
// //     setCart(prevCart => {
// //       const updatedCart = { ...prevCart };  // Clone the previous cart
  
// //       // Check if the item already exists in the cart
// //       if (updatedCart[item._id]) {
// //         // Increase the quantity if it already exists
// //         updatedCart[item._id].quantity += 0.5;
// //       } else {
// //         // Add the item if it's new, with a quantity of 1
// //         updatedCart[item._id] = { ...item, quantity: 1 };
// //       }
  
// //       return updatedCart; // Return the updated cart state
// //     });
// //   };
  
  

// //   const handleRemoveFromCart = (item) => {
// //     setCart(prevCart => {
// //       const updatedCart = { ...prevCart };  // Clone the previous cart
  
// //       // Check if the item exists in the cart
// //       if (updatedCart[item._id]) {
// //         // Decrease the quantity if it's more than 1
// //         if (updatedCart[item._id].quantity > 1) {
// //           updatedCart[item._id].quantity -= 1;
// //         } else {
// //           // If it's 1 or less, remove it from the cart
// //           delete updatedCart[item._id];
// //         }
// //       }
  
// //       return updatedCart; // Return the updated cart state
// //     });
// //   };
  
  

// //   const handlePayment = () => {
// //     setIsModalOpen(true);
// //   };

// //   const handleModalClose = () => {
// //     setIsModalOpen(false);
// //   };

// //   const handleOrderType = (type) => {
// //     setIsModalOpen(false);
    
// //     if (type === 'Book a Table') {
// //       navigate('/book-table', { state: { totalWithGST, cart } });
// //     } else {
// //       alert(`You selected: ${type}`);
// //     }
// //   };

// //   const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
// //   const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
// //   const gstAmount = totalPrice * GST_RATE;
// //   const totalWithGST = totalPrice + gstAmount;

// //   return (
// //     <>
// //       <div className='m-bg'>
// //         <div className='text-style'>Rooster Menu</div>
        
// //         <div className='cart-icon-container'>
// //           <div className='logo1'>
// //             <FaShoppingCart size={50} className='logo'/>
// //             {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
// //           </div>
// //           <div className='cart-dropdown'>
// //             <h2>Your Cart</h2>
// //             {totalItems > 0 ? (
// //               <>
// //                 <ul>
// //                   {Object.values(cart).map(item => (
// //                     <li key={item.id}>
// //                       {item.title} - {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
// //                       <button onClick={() => handleAddToCart(item)}>+</button>
// //                       <button onClick={() => handleRemoveFromCart(item)}>-</button>
// //                     </li>
// //                   ))}
// //                 </ul>
// //                 <div>
// //                   <p>Total Price: ₹{totalPrice}</p>
// //                   <p>GST (18%): ₹{gstAmount}</p>
// //                   <p>Total with GST: ₹{totalWithGST}</p>
// //                   <center><button onClick={handlePayment} className='confirm-btn'>Proceed to Confirm</button></center>
// //                 </div>
// //               </>
// //             ) : (
// //               <p>Your cart is empty</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {isModalOpen && (
// //         <div className='modal'>
// //           <div className='modal-content'>
// //             <h2>Select Order Type</h2>
// //             <button onClick={() => handleOrderType('Take Away')}>Take Away</button>
// //             <button onClick={() => handleOrderType('Book a Table')}>Book a Table</button>
// //             <button onClick={handleModalClose}>Close</button>
// //           </div>
// //         </div>
// //       )}

// //       <div className='m1-bg'>
// //         <div className='menu-mainbox'>
// //           {menuItems.map(item => (
// //             <div key={item._id} className='menu-innerbox'>
// //               <img 
// //                 src={`http://localhost:3001/${item.imageUrl}`} 
// //                 alt={item.title} 
// //                 className='menu-image' 
// //                 onError={(e) => e.target.src = '/path/to/default-image.jpg'} // Fallback if the image fails to load
// //               />
// //               <h2 className='menu-title'>{item.title}</h2>
// //               <p className='menu-price'>Price: ₹{item.price}</p>
// //               <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Menu;



// // import React, { useState, useEffect } from 'react';
// // import '../App.css';
// // import { FaShoppingCart } from 'react-icons/fa';  
// // import './menu.css';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // // import HomeDelivery from './HomeDelivery';  // Import the new component

// // function Menu() {
// //   const [cart, setCart] = useState({});
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false); // For Home Delivery Modal
// //   const [menuItems, setMenuItems] = useState([]);

// //   const GST_RATE = 0.18;
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchAvailableProducts = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:3001/api/products/available');
// //         setMenuItems(response.data);
// //       } catch (error) {
// //         console.error('Error fetching available products:', error);
// //       }
// //     };

// //     fetchAvailableProducts();
// //   }, []);

// //   const handleAddToCart = (item) => {
// //     setCart(prevCart => {
// //       const updatedCart = { ...prevCart };

// //       if (updatedCart[item._id]) {
// //         updatedCart[item._id].quantity += 0.5;
// //       } else {
// //         updatedCart[item._id] = { ...item, quantity: 1 };
// //       }

// //       return updatedCart;
// //     });
// //   };

// //   const handleRemoveFromCart = (item) => {
// //     setCart(prevCart => {
// //       const updatedCart = { ...prevCart };

// //       if (updatedCart[item._id]) {
// //         if (updatedCart[item._id].quantity > 1) {
// //           updatedCart[item._id].quantity -= 1;
// //         } else {
// //           delete updatedCart[item._id];
// //         }
// //       }

// //       return updatedCart;
// //     });
// //   };

// //   const handlePayment = () => {
// //     setIsModalOpen(true);
// //   };

// //   const handleModalClose = () => {
// //     setIsModalOpen(false);
// //   };

// //   const handleOrderType = (type) => {
// //     setIsModalOpen(false);

// //     if (type === 'Book a Table') {
// //       navigate('/book-table', { state: { totalWithGST, cart } });
// //     } else if (type === 'Home Delivery') {
// //       navigate('/home-delivery',{ state: { totalWithGST, cart } }) // Open the Home Delivery modal
// //     }
// //   };

// //   const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
// //   const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
// //   const gstAmount = totalPrice * GST_RATE;
// //   const totalWithGST = totalPrice + gstAmount;

// //   return (
// //     <>
// //       <div className='m-bg'>
// //         <div className='text-style'>Rooster Menu</div>
        
// //         <div className='cart-icon-container'>
// //           <div className='logo1'>
// //             <FaShoppingCart size={50} className='logo'/>
// //             {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
// //           </div>
// //           <div className='cart-dropdown'>
// //             <h2>Your Cart</h2>
// //             {totalItems > 0 ? (
// //               <>
// //                 <ul>
// //                   {Object.values(cart).map(item => (
// //                     <li key={item.id}>
// //                       {item.title} - {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
// //                       <button onClick={() => handleAddToCart(item)}>+</button>
// //                       <button onClick={() => handleRemoveFromCart(item)}>-</button>
// //                     </li>
// //                   ))}
// //                 </ul>
// //                 <div>
// //                   <p>Total Price: ₹{totalPrice}</p>
// //                   <p>GST (18%): ₹{gstAmount}</p>
// //                   <p>Total with GST: ₹{totalWithGST}</p>
// //                   <center><button onClick={handlePayment} className='confirm-btn'>Proceed to Confirm</button></center>
// //                 </div>
// //               </>
// //             ) : (
// //               <p>Your cart is empty</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Modal for selecting order type */}
// //       {isModalOpen && (
// //         <div className='modal'>
// //           <div className='modal-content'>
// //             <h2>Select Order Type</h2>
// //             <button onClick={() => handleOrderType('Take Away')}>Take Away</button>
// //             <button onClick={() => handleOrderType('Book a Table')}>Book a Table</button>
// //             <button onClick={() => handleOrderType('Home Delivery')}>Home Delivery</button>
// //             <button onClick={handleModalClose}>Close</button>
// //           </div>
// //         </div>
// //       )}

// //       {/* Render HomeDelivery component when Home Delivery is selected */}
// //       {isDeliveryModalOpen && (
// //         <HomeDelivery cart={cart} totalWithGST={totalWithGST} />
// //       )}

// //       <div className='m1-bg'>
// //         <div className='menu-mainbox'>
// //           {menuItems.map(item => (
// //             <div key={item._id} className='menu-innerbox'>
// //               <img 
// //                 src={`http://localhost:3001/${item.imageUrl}`} 
// //                 alt={item.title} 
// //                 className='menu-image' 
// //                 onError={(e) => e.target.src = '/path/to/default-image.jpg'}
// //               />
// //               <h2 className='menu-title'>{item.title}</h2>
// //               <p className='menu-price'>Price: ₹{item.price}</p>
// //               <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Menu;


// import React, { useState, useEffect } from 'react';
// import '../App.css';
// import { FaShoppingCart } from 'react-icons/fa';  
// import './menu.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Menu() {
//   const [cart, setCart] = useState({});
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [menuItems, setMenuItems] = useState([]);

//   const GST_RATE = 0;
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAvailableProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/api/products/available');
//         setMenuItems(response.data);
//       } catch (error) {
//         console.error('Error fetching available products:', error);
//       }
//     };

//     fetchAvailableProducts();
//   }, []);

//   const handleAddToCart = (item) => {
//     setCart(prevCart => {
//       const updatedCart = { ...prevCart };

//       if (updatedCart[item._id]) {
//         updatedCart[item._id].quantity += 0.5;
//       } else {
//         updatedCart[item._id] = { ...item, quantity: 1 };
//       }

//       return updatedCart;
//     });
//   };

//   const handleRemoveFromCart = (item) => {
//     setCart(prevCart => {
//       const updatedCart = { ...prevCart };

//       if (updatedCart[item._id]) {
//         if (updatedCart[item._id].quantity > 1) {
//           updatedCart[item._id].quantity -= 1;
//         } else {
//           delete updatedCart[item._id];
//         }
//       }

//       return updatedCart;
//     });
//   };

//   const handlePayment = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleOrderType = (type) => {
//     setIsModalOpen(false);

//     // Convert cart object to array
//     const cartArray = Object.values(cart);

//     // Calculate totals
//     const totalItems = cartArray.reduce((sum, item) => sum + item.quantity, 0);
//     const totalPrice = cartArray.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     const gstAmount = totalPrice * GST_RATE;
//     const totalWithGST = totalPrice + gstAmount;

//     if (type === 'Book a Table') {
//       navigate('/book-table', { state: { totalWithGST, cart: cartArray } });
//     } else if (type === 'Home Delivery') {
//       navigate('/home-delivery', { state: { totalWithGST, cart: cartArray } });
//     } else if (type === 'Take Away') {
//       navigate('/take-away', { state: { totalWithGST, cart: cartArray } });
//     }
//   };

//   const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const gstAmount = totalPrice * GST_RATE;
//   const totalWithGST = totalPrice + gstAmount;

//   return (
//     <>
//       <div className='m-bg'>
//         <div className='text-style'>KEC Food-Court Menu</div>
        
//         <div className='cart-icon-container'>
//           <div className='logo1'>
//             <FaShoppingCart size={50} className='logo'/>
//             {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
//           </div>
//           <div className='cart-dropdown'>
//             <h2>Your Cart</h2>
//             {totalItems > 0 ? (
//               <>
//                 <ul>
//                   {Object.values(cart).map(item => (
//                     <li key={item._id}>
//                       {item.title} - {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
//                       <button onClick={() => handleAddToCart(item)}>+</button>
//                       <button onClick={() => handleRemoveFromCart(item)}>-</button>
//                     </li>
//                   ))}
//                 </ul>
//                 <div>
//                   <p>Total Price: ₹{totalPrice}</p>
//                   {/* <p>GST (18%): ₹{gstAmount}</p>
//                   <p>Total with GST: ₹{totalWithGST}</p> */}
//                   <center><button onClick={handlePayment} className='confirm-btn'>Proceed to Confirm</button></center>
//                 </div>
//               </>
//             ) : (
//               <p>Your cart is empty</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modal for selecting order type */}
//       {isModalOpen && (
//         <div className='modal'>
//           <div className='modal-content'>
//             {/* <h2>Select Order Type</h2>
//             <button onClick={() => handleOrderType('Take Away')}>Take Away</button> */}
//             <button onClick={() => handleOrderType('Book a Table')}>Book a Pre-Order</button>
//             {/* <button onClick={() => handleOrderType('Home Delivery')}>Home Delivery</button> */}
//             <button onClick={handleModalClose}>Close</button>
//           </div>
//         </div>
//       )}

//       <div className='m1-bg'>
//         <div className='menu-mainbox'>
//           {menuItems.map(item => (
//             <div key={item._id} className='menu-innerbox'>
//               <img 
//                 src={`http://localhost:3001/${item.imageUrl}`} 
//                 alt={item.title} 
//                 className='menu-image' 
//                 onError={(e) => e.target.src = '/path/to/default-image.jpg'}
//               />
//               <h2 className='menu-title'>{item.title}</h2>
//               <p className='menu-price'>Price: ₹{item.price}</p>
//               <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Menu;
import React, { useState, useEffect } from 'react';
import '../App.css';
import { FaShoppingCart } from 'react-icons/fa';  
import './menu.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Menu() {
  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  const GST_RATE = 0; // Assuming GST is not applicable for now
  const navigate = useNavigate();

  // Define allowed time slots for booking
  const allowedTimeSlots = [
    { start: '10:25', end: '10:45' },
    { start: '07:00', end: '08:45' },
    { start: '12:15', end: '13:15' }
  ];

  useEffect(() => {
    const fetchAvailableProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products/available');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching available products:', error);
      }
    };

    fetchAvailableProducts();
  }, []);

  const handleAddToCart = (item) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };

      if (updatedCart[item._id]) {
        updatedCart[item._id].quantity += 0.5;
      } else {
        updatedCart[item._id] = { ...item, quantity: 1 };
      }

      return updatedCart;
    });
  };

  const handleRemoveFromCart = (item) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };

      if (updatedCart[item._id]) {
        if (updatedCart[item._id].quantity > 1) {
          updatedCart[item._id].quantity -= 1;
        } else {
          delete updatedCart[item._id];
        }
      }

      return updatedCart;
    });
  };

  const handlePayment = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const isWithinTimeSlot = (currentTime) => {
    const currentTimeString = currentTime.toTimeString().slice(0, 5); // Get HH:mm format
    return allowedTimeSlots.some(slot => 
      currentTimeString >= slot.start && currentTimeString <= slot.end
    );
  };

  const handleOrderType = (type) => {
    const currentTime = new Date();

    if (type === 'Book a Table' && !isWithinTimeSlot(currentTime)) {
      alert('Booking is only allowed between the specified time slots: ' + 
        allowedTimeSlots.map(slot => `${slot.start} to ${slot.end}`).join(', ')
      );
      return;
    }

    setIsModalOpen(false);

    // Convert cart object to array
    const cartArray = Object.values(cart);

    // Calculate totals
    const totalItems = cartArray.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartArray.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const gstAmount = totalPrice * GST_RATE;
    const totalWithGST = totalPrice + gstAmount;

    if (type === 'Book a Table') {
      navigate('/book-table', { state: { totalWithGST, cart: cartArray } });
    } else if (type === 'Home Delivery') {
      navigate('/home-delivery', { state: { totalWithGST, cart: cartArray } });
    } else if (type === 'Take Away') {
      navigate('/take-away', { state: { totalWithGST, cart: cartArray } });
    }
  };

  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gstAmount = totalPrice * GST_RATE;
  const totalWithGST = totalPrice + gstAmount;

  return (
    <>
      <div className='m-bg'>
        <div className='text-style'>KEC Food-Court Menu</div>
        
        <div className='cart-icon-container'>
          <div className='logo1'>
            <FaShoppingCart size={50} className='logo'/>
            {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
          </div>
          <div className='cart-dropdown'>
            <h2>Your Cart</h2>
            {totalItems > 0 ? (
              <>
                <ul>
                  {Object.values(cart).map(item => (
                    <li key={item._id}>
                      {item.title} - {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}
                      <button onClick={() => handleAddToCart(item)}>+</button>
                      <button onClick={() => handleRemoveFromCart(item)}>-</button>
                    </li>
                  ))}
                </ul>
                <div>
                  <p>Total Price: ₹{totalPrice}</p>
                  <center><button onClick={handlePayment} className='confirm-btn'>Proceed to Confirm</button></center>
                </div>
              </>
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal for selecting order type */}
      {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <button onClick={() => handleOrderType('Book a Table')}>Book a Pre-Order</button>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}

      <div className='m1-bg'>
        <div className='menu-mainbox'>
          {menuItems.map(item => (
            <div key={item._id} className='menu-innerbox'>
              <img 
                src={`http://localhost:3001/${item.imageUrl}`} 
                alt={item.title} 
                className='menu-image' 
                onError={(e) => e.target.src = '/path/to/default-image.jpg'}
              />
              <h2 className='menu-title'>{item.title}</h2>
              <p className='menu-price'>Price: ₹{item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
