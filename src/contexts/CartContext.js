import { createContext, useContext } from "react"
import { CartReducer } from "../reducers/CartReducer"
import { useReducer } from "react"
import img1 from "../assets/phone1.jpeg"
import img2 from "../assets/phone2.jpeg"
import img3 from "../assets/phone3.jpeg"
import img4 from "../assets/phone4.jpeg"

const itemData = [
    {
        id: 1,
        name: 'Samsung Galaxy S8',
        price: 399.9,
        count: 1,
        img: img1
    },
    {
        id: 2,
        name: 'Google Pixel',
        price: 699.9,
        count: 1,
        img: img2
    },
    {
        id: 3,
        name: 'Xiaomi Redmi Note 2',
        price: 299.9,
        count: 1,
        img: img3
    },
    {
        id: 4,
        name: 'Samsung Galaxy S7',
        price: 599.9,
        count: 1,
        img: img4
    },
]
const initialCart = {
    cartItem: itemData,
    total: 1999.6,
}

const CartContext = createContext(initialCart);

export const CartProvider = ({ children }) => {
    const [cartData, dispatch] = useReducer(CartReducer, initialCart);

    function addItem(product){
        const updatedItem = cartData.cartItem.map((item)=>{
            if(item.id === product.id){
                item.count++;
            }
            return item;
        })
        const updateTotal = cartData.total + product.price;
        dispatch({
            type: "INCREASECOUNT",
            payload:{
                cartItem: updatedItem,
                total: updateTotal,
            }
         })
    }

    function removeItem(product){
        const updatedItem = cartData.cartItem.map((item)=>{
            if(item.id === product.id){
                if(item.count===1){

                }
                item.count--;
            }
            return item
        })
        const updateTotal = cartData.total - product.price;
        dispatch({
            type: "INCREASECOUNT",
            payload:{
                cartItem: updatedItem,
                total: updateTotal,
            }
         })
    }

    function deleteItem(product){
        const updatedItem = cartData.cartItem.filter((item)=>item.id!==product.id);
        const updateTotal = cartData.total - product.price;
        dispatch({
            type: "DELETE",
            payload:{
                cartItem: updatedItem,
                total: updateTotal,
            }
         })
    }

    function clearCart(){
        dispatch({
            type: "CLEARCART",
         })
    }
    const value = {
        addItem,
        removeItem,
        clearCart,
        deleteItem,
        cartItem : cartData.cartItem,
        total : cartData.total,
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=> useContext(CartContext);