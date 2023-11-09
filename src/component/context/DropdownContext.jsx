import { createContext, useContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cart items contains product to add
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    // if found, increment quantity
    if (existingCartItem){
        return cartItems.map((cartItem)=> cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity +1} 
        : cartItem) 
    }

    // return new array with modified cartitems or new cart item
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id)
    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem)=> cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem)=> cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem) 
}

const deleteCartItem = (cartItems, productToDelete) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id)
};

export const DropdownContext = createContext({
    showDropdown: false,
    setShowDropdown: () => {},
    carItems: [],
    addItemToCart: () => {},
    cartTotal: 0,
    setCartTotal: () => {},
    checkoutTotal: 0,
    setCheckoutTotal: () => {},
    removeItemFromCart: () => {},
    deleteCartItem: () => {}
});

export const DropdownProvider = ({children}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [cartItems, setCartItem] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [checkoutTotal, setCheckoutTotal] = useState(0); 

    useEffect (()=>{
        const newCartItem = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartTotal(newCartItem);
    }, [cartItems]);

    useEffect(()=>{
        const totalPrice = cartItems.reduce((total, item)=> total + item.quantity * item.price, 0);
        setCheckoutTotal(totalPrice);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItem(removeCartItem(cartItems, productToRemove))
    }
    const deleteItemCartItem = (productToDelete) => {
        setCartItem(deleteCartItem(cartItems, productToDelete))
    }

    const value = {
        showDropdown, 
        setShowDropdown, 
        cartItems, 
        addItemToCart, 
        cartTotal, 
        setCartTotal,
        removeItemFromCart,
        deleteItemCartItem,
        checkoutTotal,
        setCheckoutTotal
    }
    
    return <DropdownContext.Provider value={value} >{children}</DropdownContext.Provider>
    
};

export const useDropdown = () => useContext(DropdownContext);