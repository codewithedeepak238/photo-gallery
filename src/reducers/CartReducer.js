export const CartReducer = (state, action)=>{
    const {type, payload} = action;

    switch(type){
        case "INCREASECOUNT":
            return {cartItem: payload.cartItem, total: payload.total}
        case "DECREASECOUNT":
            return {cartItem: payload.cartItem, total: payload.total}
        case "DELETE":
            return {cartItem: payload.cartItem, total: payload.total}
        case "CLEARCART":
            return {cartItem: [], total: 0}
        default:
            return "ERROR"
    }
}