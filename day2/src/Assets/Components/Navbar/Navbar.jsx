// import React from "react";
// import { Link } from "react-router-dom";
// import './Navbar.css';
// const Navbar = () => {
//     return(
//         <div className='navbar'>
         
//            <div className='nav'>
//             <h1>estate</h1>
//             <Link to="/home" className="HOME">HOME</Link>
//             <Link to="/about" className="ABOUT">ABOUT</Link>
//             <Link to="/property" className="PROPERTY">PROPERTY</Link>
//             <Link to="/" className="LOGIN">SIGNIN</Link>
//             </div>
               
                



            
//         </div>
//     )
// }
// export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/nav" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/inventory" className="nav-link">Inventory Management</Link>
        </li>
        <li className="nav-item">
          <Link to="/sales" className="nav-link">Sales/Point of Sale</Link>
        </li>
        <li className="nav-item">
          <Link to="/purchasing" className="nav-link">Purchasing/Procurement</Link>
        </li>
        <li className="nav-item">
          <Link to="/reports" className="nav-link">Reports/Analytics</Link>
        </li>
        <li className="nav-item">
          <Link to="/customers" className="nav-link">Customers</Link>
        </li>
        <li className="nav-item">
          <Link to="/employees" className="nav-link">Employees/Staff</Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">Settings</Link>
        </li>
        <li className="nav-item">
          <Link to="/help" className="nav-link">Help/Support</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;