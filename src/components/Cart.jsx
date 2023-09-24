import React, { useContext } from 'react';
import { CartContext } from '../App'; // Import the context

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext); // Access cart data and removeFromCart function

  // Use the cart data in your component
  return (
    <div>
      <h1>Selected Tests and Packages</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
