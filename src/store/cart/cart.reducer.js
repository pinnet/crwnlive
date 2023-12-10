export const CART_ACTION_TYPES = {
    UPDATE_CART: 'UPDATE_CART',
    IS_CART_VISABLE: 'IS_CART_VISABLE'
  }
  
export const cartReducer = ( state = INITIAL_STATE, action) => {
  
    const { type, payload } = action;
    console.log('cartReducer', type, payload);
    switch(type) {
        case CART_ACTION_TYPES.UPDATE_CART:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.IS_CART_VISABLE:
            return {
                ...state,
                isCartOpen: payload
            };        
      default:
        return state;
    }
  
  }
const INITIAL_STATE = {
    cartItems: [],
    quantity: 0,
    cartTotal: 0
};