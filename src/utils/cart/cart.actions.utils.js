export const addItemToCartItems = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(item => {
            return (item.id === itemToAdd.id) ? 
            { ...item, quantity: item.quantity + 1, itemTotal: item.price * (item.quantity + 1) } : 
            item
        });
    }
    else {
        return [...cartItems, { ...itemToAdd, quantity: 1, itemTotal: itemToAdd.price }];
    }
  };
  export const removeItemFromCartItems = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === itemToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id);
    }
    else {
        return cartItems.map(item => {
            return (item.id === itemToRemove.id) ? 
            { ...item, quantity: item.quantity - 1, itemTotal: item.price * (item.quantity - 1) } : 
            item
        });
    }
  };
  