// import React, { useState } from 'react';
//  import 'bootstrap/dist/css/bootstrap.min.css';


// const ContactUsPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
    
//     <div className="container mt-4">
      
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea
//             className="form-control"
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//             rows="4"
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>

      
//     </div>
//   );
// };

// export default ContactUsPage;
