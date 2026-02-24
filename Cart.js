import React from "react";
function Cart({cart}) {
    return(
        <div>
            <h2>Cart items</h2>
            {cart.length === 0?(
            <p>NO items in cart</p>
            ) :(
                cart.map((item, index)) => (
                    <div key={index}>
                        <p>{item.name} - ₹{item.price}</p>
                    </div>
                ))
           )}
        </div>
    );
}  export default Cart;