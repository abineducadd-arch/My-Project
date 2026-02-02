import  { createContext, useState, useContext, useCallback } from 'react';

const CartContext = createContext();


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be within a CartProvider");
  }
  return context; 
};



const CartProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const extractPrice = (price) => {
   
    if (typeof price === "string") { 
      const numericString = price.replace(/[^\d.]/g, "");
      return parseFloat(numericString) || 0;
    }
    return typeof price === "number" ? price : 0;
  };

  const addToCart = useCallback((product) => {
  
    setCartItems((prevItems) => {
   
      const numericPrice = extractPrice(product.price);
      
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id,
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        return [
          ...prevItems,
          {
            ...product,
            quantity: 1,
            numericPrice: numericPrice, 
          },
        ];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  }, []);

  const updateQuantity = useCallback(
    (productId, quantity) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item, 
        ),
      );
    },
    [removeFromCart],
  );

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => {
      const price = item.numericPrice || extractPrice(item.price);
      return total + (price * item.quantity); 
    }, 0);
  }, [cartItems]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        updateQuantity,
        removeFromCart,
        getTotalItems,
        clearCart,
        getTotalPrice,
        toggleCart,
        setIsCartOpen,
        addToCart, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export { CartProvider };
