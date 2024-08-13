import React,{useState} from 'react'
import './Header.css';

const Header = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log('Form submitted:', formData);
      };

  return (
    <div class='bg-primary mt-2'>
    <div class="container " id='contact'>
  <div class="row">
    
    <div class="col-md-6 mt-3 mb-3">
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
   
    <div class="col-md-6 mt-3">
      <h3><b>Google Map</b></h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7562197460775!2d74.45327786397095!3d16.689078144709153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e32cdc7ea07d%3A0x7b6ce8e1c1f443b!2sPanchavati%20talkies!5e0!3m2!1sen!2sin!4v1723235885725!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>
</div>

  )
}

export default Header
