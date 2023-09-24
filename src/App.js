import React, { createContext, useContext, useState } from "react";

import Navbar from "./components/Navbar";
import Midbody from "./components/Midbody";
import Footer from "./components/Footer";
import HealthCard from "./components/HealthCard";
import Cart from "./components/Cart";
//import PackageBlockTwo from "./components/PackageBlockTwo";

const CartContext = createContext(); // Create the context

const CartProvider = ({ children }) => {
  // Define your cart state and functions to modify it
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const [cartCount ,setCartCount] = useState(0);

    const addToCart = (item) => {
      setCart((prevCart) => {
        const updatedCart = [...prevCart, item];
        console.log(updatedCart); // Log the updated cart
        setCartCount(updatedCart.length);
        return updatedCart;
      });
    }

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

function App() {
  return (
    <div className="w-full overflow-x-hidden  ">
      <CartProvider> {/* Wrap your components with the provider */}
        
          <Navbar  />
          <Midbody />
          <HealthCard />
          <Cart />
          <Footer />
        
      </CartProvider>
    </div>
  );
}

export default App;
export { CartContext };

// Export the CartContext for use in other components
export const useCartContext = () => {
  return useContext(CartContext);
};
