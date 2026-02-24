import React from "react"; 
import { Link } from "react-router-dom"; 
import products from "../data/products"; 
 
function Products() { 
  return ( 
    <div> 
      <h2>Products List</h2> 
 
      {products.map((p) => ( 
        <div key={p.id}> 
          <h3>{p.name}</h3> 
          <p>Price: ₹{p.price}</p> 
          <Link to={`/product/${p.id}`}>View Details</Link> 
          <hr /> 
        </div> 
      ))} 
    </div> 
  ); 
} 
 
export default Products; 