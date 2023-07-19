import React from "react";
import "./HelpSupport.css";
import Navbar from "../Navbar/Navbar";

const HelpSupport = () => {
  return (
    
    <div>
<div>
  <Navbar/>
</div>
    
    <div className="help-support-container">
      <br>
      </br>
      
      <h2 className="help-support-title">Help and Support</h2>
      <div className="contact-info">
        <p>Email: info@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="faq-section">
        <h3 className="faq-heading">Frequently Asked Questions</h3>
        <ul className="faq-list">
          <li>How do I create an account?</li>
          <li>What payment methods are accepted?</li>
          <li>How can I track my order?</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default HelpSupport;
