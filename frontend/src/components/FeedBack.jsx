// // import React, { useState, useEffect } from 'react';
// // import './FeedBack.css'; // Updated CSS file name

// // function FeedBack() {
// //   const [feedbacks, setFeedbacks] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   useEffect(() => {
// //     // Fetch feedback data when the component mounts
// //     fetch('http://localhost:3001/api/feedbacks')
// //       .then(response => response.json())
// //       .then(data => setFeedbacks(data))
// //       .catch(error => console.error('Error fetching feedbacks:', error));
// //   }, []);

// //   // Handle search input change
// //   const handleSearchChange = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   // Filter feedbacks based on the search term
// //   const filteredFeedbacks = feedbacks.filter(feedback =>
// //     feedback.phone.includes(searchTerm)
// //   );

// //   return (
// //     <div className="feedback-container abg">
// //       <h2 className="feedback-header">Feedback Management</h2>
// //       <div className="feedback-searchbar">
// //         <input
// //           type="text"
// //           placeholder="Search by phone number"
// //           className="feedback-input"
// //           value={searchTerm}
// //           onChange={handleSearchChange}
// //         />
// //         {/* <button className="feedback-button">Search</button> */}
// //       </div>
// //       <div className="feedback-table-container">
// //         <table className="feedback-table">
// //           <thead>
// //             <tr>
// //               {/* <th>ID</th> */}
// //               <th>Name</th>
// //               <th>Email</th>
// //               <th>Phone</th>
// //               <th>Message</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {filteredFeedbacks.length > 0 ? (
// //               filteredFeedbacks.map(feedback => (
// //                 <tr key={feedback.id}>
// //                   {/* <td>{feedback.id}</td> */}
// //                   <td>{feedback.name}</td>
// //                   <td>{feedback.email}</td>
// //                   <td>{feedback.phone}</td>
// //                   <td>{feedback.message}</td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan="5">No feedback found</td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FeedBack;



// import React, { useState, useEffect } from 'react';
// import './FeedBack.css'; // Updated CSS file name

// function FeedBack() {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch feedback data when the component mounts
//     fetch('http://localhost:3001/api/feedbacks')
//       .then(response => response.json())
//       .then(data => setFeedbacks(data))
//       .catch(error => console.error('Error fetching feedbacks:', error));
//   }, []);

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Filter feedbacks based on the search term
//   const filteredFeedbacks = feedbacks.filter(feedback =>
//     feedback.phone.includes(searchTerm)
//   );

//   // Handle delete button click
//   const handleDelete = (id) => {
//     fetch(`http://localhost:3001/api/feedbacks/${id}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (response.ok) {
//           // Remove the feedback from the state
//           setFeedbacks(feedbacks.filter(feedback => feedback._id !== id));
//         } else {
//           console.error('Error deleting feedback:', response.statusText);
//         }
//       })
//       .catch(error => console.error('Error deleting feedback:', error));
//   };

//   return (
//     <div className="feedback-container abg">
//       <h2 className="feedback-header">Feedback Management</h2>
//       <div className="feedback-summary">
//         <p>Total Feedback: {feedbacks.length}</p>
//       </div>
//       <div className="feedback-searchbar">
//         <input
//           type="text"
//           placeholder="Search by phone number"
//           className="feedback-input"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </div>
//       <div className="feedback-table-container">
//         <table className="feedback-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Message</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredFeedbacks.length > 0 ? (
//               filteredFeedbacks.map(feedback => (
//                 <tr key={feedback._id}>
//                   <td>{feedback.name}</td>
//                   <td>{feedback.email}</td>
//                   <td>{feedback.phone}</td>
//                   <td>{feedback.message}</td>
//                   <td>
//                     <button
//                       className="feedback-delete-button"
//                       onClick={() => handleDelete(feedback._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5">No feedback found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default FeedBack;


import React, { useState, useEffect } from 'react';
import './FeedBack.css'; // Make sure this CSS file contains the necessary styles
import rooster from '../assets/rooster.png'; // Adjust the path if necessary

function FeedBack() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch feedback data when the component mounts
    fetch('http://localhost:3001/api/feedbacks')
      .then(response => response.json())
      .then(data => setFeedbacks(data))
      .catch(error => console.error('Error fetching feedbacks:', error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter feedbacks based on the search term
  const filteredFeedbacks = feedbacks.filter(feedback =>
    feedback.phone.includes(searchTerm)
  );

  // Handle delete button click
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/api/feedbacks/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Remove the feedback from the state
          setFeedbacks(feedbacks.filter(feedback => feedback._id !== id));
        } else {
          console.error('Error deleting feedback:', response.statusText);
        }
      })
      .catch(error => console.error('Error deleting feedback:', error));
  };

  return (
    <div className="feedback-container abg">
      <div className="feedback-header-container">
        <img src={rooster} width={100} height={100} alt='Rooster Logo' />
        <h2 className="hea">Feedback Management</h2>
      </div>
      <hr />
      <div className="feedback-summary">
        <p>Total Feedback: {feedbacks.length}</p>
      </div>
      <div className="feedback-searchbar">
        <input
          type="text"
          placeholder="Search by phone number"
          className="feedback-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="feedback-table-container">
        <table className="feedback-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFeedbacks.length > 0 ? (
              filteredFeedbacks.map(feedback => (
                <tr key={feedback._id}>
                  <td>{feedback.name}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.phone}</td>
                  <td>{feedback.message}</td>
                  <td>
                    <button
                      className="feedback-delete-button"
                      onClick={() => handleDelete(feedback._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No feedback found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeedBack;
