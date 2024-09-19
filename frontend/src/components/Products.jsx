// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);

//   // Fetch all products on component mount
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Fetch products from backend
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/api/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   // Handle form submit for adding/editing a product
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('price', price);
//     if (image) formData.append('image', image);

//     try {
//       if (editMode) {
//         // Edit product
//         await axios.put(`http://localhost:3001/api/products/${editProductId}`, formData);
//         setEditMode(false);
//         setEditProductId(null);
//       } else {
//         // Add new product
//         await axios.post('http://localhost:3001/api/products', formData);
//       }
//       fetchProducts(); // Refresh the product list
//       resetForm(); // Reset form fields
//     } catch (error) {
//       console.error('Error saving product:', error);
//     }
//   };

//   // Handle delete product
//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:3001/api/products/${productId}`);
//       fetchProducts(); // Refresh the product list
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   // Handle edit product
//   const handleEdit = (product) => {
//     setTitle(product.title);
//     setPrice(product.price);
//     setEditMode(true);
//     setEditProductId(product._id);
//   };

//   // Reset form fields
//   const resetForm = () => {
//     setTitle('');
//     setPrice('');
//     setImage(null);
//     setEditMode(false);
//   };

//   return (
//     <div>
//       <h1>Product Management</h1>

//       {/* Product Form */}
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Image:</label>
//           <input
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//         </div>
//         <button type="submit">
//           {editMode ? 'Update Product' : 'Add Product'}
//         </button>
//         {editMode && <button onClick={resetForm}>Cancel</button>}
//       </form>

//       {/* Products List */}
//       <h2>Product List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Price</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td>{product.title}</td>
//               <td>{product.price}</td>
//               <td>
//                 {product.imageUrl && (
//                   <img
//                     src={`http://localhost:3001/${product.imageUrl}`}
//                     alt={product.title}
//                     style={{ width: '50px', height: '50px' }}
//                   />
//                 )}
//               </td>
//               <td>
//                 <button onClick={() => handleEdit(product)}>Edit</button>
//                 <button onClick={() => handleDelete(product._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Product;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);
//   const [availability, setAvailability] = useState(1); // Default to Available (1)
//   const [editMode, setEditMode] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);

//   // Fetch all products on component mount
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Fetch products from backend
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/api/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   // Handle form submit for adding/editing a product
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
  
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('price', price);
//     formData.append('availability', availability); // Ensure availability is included
//     if (image) formData.append('image', image);
  
//     try {
//       if (editMode) {
//         // Edit product
//         await axios.put(`http://localhost:3001/api/products/${editProductId}`, formData);
//         setEditMode(false);
//         setEditProductId(null);
//       } else {
//         // Add new product
//         await axios.post('http://localhost:3001/api/products', formData);
//       }
//       fetchProducts(); // Refresh the product list
//       resetForm(); // Reset form fields
//     } catch (error) {
//       console.error('Error saving product:', error);
//     }
//   };
  

//   // Handle delete product
//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:3001/api/products/${productId}`);
//       fetchProducts(); // Refresh the product list
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   // Handle edit product
//   const handleEdit = (product) => {
//     setTitle(product.title);
//     setPrice(product.price);
//     setAvailability(product.availability); // Set availability during editing
//     setEditMode(true);
//     setEditProductId(product._id);
//   };

//   // Reset form fields
//   const resetForm = () => {
//     setTitle('');
//     setPrice('');
//     setImage(null);
//     setAvailability(1); // Reset availability to 1 (Available)
//     setEditMode(false);
//   };

//   return (
//     <div>
//       <h1>Product Management</h1>

//       {/* Product Form */}
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Image:</label>
//           <input
//             type="file"
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//         </div>
//         <div>
//           <label>Availability (1 for Available, 0 for Not Available):</label>
//           <select
//             value={availability}
//             onChange={(e) => setAvailability(parseInt(e.target.value, 10))}
//           >
//             <option value={1}>Available</option>
//             <option value={0}>Not Available</option>
//           </select>
//         </div>
//         <button type="submit">
//           {editMode ? 'Update Product' : 'Add Product'}
//         </button>
//         {editMode && <button onClick={resetForm}>Cancel</button>}
//       </form>

//       {/* Products List */}
//       <h2>Product List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Price</th>
//             <th>Image</th>
//             <th>Availability</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td>{product.title}</td>
//               <td>{product.price}</td>
//               <td>
//                 {product.imageUrl && (
//                   <img
//                     src={`http://localhost:3001/${product.imageUrl}`}
//                     alt={product.title}
//                     style={{ width: '50px', height: '50px' }}
//                   />
//                 )}
//               </td>
//               <td>{product.availability === 1 ? 'Available' : 'Not Available'}</td>
//               <td>
//                 <button onClick={() => handleEdit(product)}>Edit</button>
//                 <button onClick={() => handleDelete(product._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Product;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css'; // Import the CSS file
import rooster from '../assets/rooster.png'; 

const Product = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [availability, setAvailability] = useState(1); // Default to Available (1)
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Handle form submit for adding/editing a product
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('availability', availability); // Ensure availability is included
    if (image) formData.append('image', image);
  
    try {
      if (editMode) {
        // Edit product
        await axios.put(`http://localhost:3001/api/products/${editProductId}`, formData);
        setEditMode(false);
        setEditProductId(null);
      } else {
        // Add new product
        await axios.post('http://localhost:3001/api/products', formData);
      }
      fetchProducts(); // Refresh the product list
      resetForm(); // Reset form fields
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  // Handle delete product
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/api/products/${productId}`);
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Handle edit product
  const handleEdit = (product) => {
    setTitle(product.title);
    setPrice(product.price);
    setAvailability(product.availability); // Set availability during editing
    setEditMode(true);
    setEditProductId(product._id);
  };

  // Reset form fields
  const resetForm = () => {
    setTitle('');
    setPrice('');
    setImage(null);
    setAvailability(1); // Reset availability to 1 (Available)
    setEditMode(false);
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='product-container'>
      <div className='place'>
          {/* <img src={rooster} width={100} height={100} alt='Rooster Logo' /> */}
        <h2 className='h2'>Product Management</h2>
      </div>
      <hr></hr>
      <div class="ani">
      {/* Product Form */}
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div>
            <label>Availability (1 for Available, 0 for Not Available):</label>
            <select
              value={availability}
              onChange={(e) => setAvailability(parseInt(e.target.value, 10))}
            >
              <option value={1}>Available</option>
              <option value={0}>Not Available</option>
            </select>
          </div>
          <button type="submit">
            {editMode ? 'Update Product' : 'Add Product'}
          </button>
          {editMode && <button onClick={resetForm}>Cancel</button>}
        </form>
      </div>
      
      </div>


     

      {/* Product List */}
      <h1>Product List</h1>
      <div className="table-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  {product.imageUrl && (
                    <img
                      src={`http://localhost:3001/${product.imageUrl}`}
                      alt={product.title}
                      style={{ width: '50px', height: '50px' }}
                    />
                  )}
                </td>
                <td>{product.availability === 1 ? 'Available' : 'Not Available'}</td>
                <td>
                  <button onClick={() => handleEdit(product)}>Edit</button>
                  <button onClick={() => handleDelete(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Product;
