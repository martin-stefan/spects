import React from 'react'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <p>Spects.io</p>
      <a href="#" className="btt">Back to top</a>
      <Link to="/about" className="btt">About Us</Link>
    
    </div>
  );
}

export default Footer;