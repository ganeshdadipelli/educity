/* eslint-disable no-unused-vars */
import React from 'react';
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ed753341-1b43-40b0-abda-e43e0b60054e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else { 
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div className='contact'>
      <div className="contact-col">
<h3>Send us a message <img src={msg_icon} alt='' /></h3>
<p>
If you have any questions, suggestions, or feedback, we would love to hear from you! Feel free to reach out to us by filling out the form below. Our team is dedicated to providing you with the support and assistance you need. We strive to respond to all inquiries promptly and ensure that your experience with us is seamless. Thank you for choosing to connect with us!
</p>
<ul>
    <li><img src={mail_icon} alt='' /> ganesh@gmail.com</li>
    <li><img src={phone_icon} alt='' /> +1 123-456-789</li>
    <li><img src={location_icon} alt='' /> 17-41/1 ayodhya nagar , Edulur<br/>Kattangur mandal, Nalgonda Dist</li>
</ul>
      </div>
      <div className="contact-col">
<form onSubmit={onSubmit}> 
    <label>
        Your Name
    </label>
    <input type='text' name='name' placeholder='Enter your name' required />
    <label>
        Phone Number
    </label>
    <input type='tel' name='phone' placeholder='Enter your mobile number' required />
    <label>
        Write your messages here
    </label>
    <textarea name='message' id='' rows='6' placeholder='Enter your message' required></textarea>
    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} /></button>
</form>
<span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
