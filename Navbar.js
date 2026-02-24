import React from "react"; 
import { Link } from "react-router-dom"; 
 
function Navbar() { 
  return ( 
    <nav> 
      <Link to="/">Login</Link> |  
      <Link to="/products"> Products</Link> |  
      <Link to="/cart"> Cart</Link> 
      <hr /> 
    </nav> 
  ); 
} 
 
export default Navbar;