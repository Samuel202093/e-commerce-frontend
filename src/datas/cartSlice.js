import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

 // Adding to cart function using redux state management library
 // addTocart reducers is a function used to add items to the user localStorage
 //removeFromCart reducers is a function used to delete an item from the user localStorage
 //decreaseCart reducers is a function used to decrease the quantity of the item
//clearCart reducers is a function used to clear the items from user localStorage
//getTotal reducers is a function used to get the total price of all the items added to cart in the user localStorage


const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice =  createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex((item)=> item._id === action.payload._id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`${state.cartItems[itemIndex].name} quantity increased`, { position: "bottom-center"})
            }else{
             const tempProduct = { ...action.payload, cartQuantity: 1}
             state.cartItems.push(tempProduct)
             toast.success(`${action.payload.name} added to cart`, { position: "bottom-center"})
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action){
           const cartResult = state.cartItems.filter(
                cartItem => cartItem._id !== action.payload._id
            );
            state.cartItems = cartResult
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`${action.payload.name} deleted from cart`, { position: "bottom-right"})
        }, 
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem._id === action.payload._id
            )
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`${state.cartItems[itemIndex].name} quantity decreased`, { position: "bottom-center"})
            } else if(state.cartItems[itemIndex].cartQuantity === 1){
                const cartResult = state.cartItems.filter(
                    cartItem => cartItem._id !== action.payload._id
                );
                state.cartItems = cartResult
                
                toast.error(`${action.payload.name} deleted from cart`, { position: "bottom-right"})
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearCart(state, action){
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        getTotals(state, action){
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
                const {price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            },
            {
                total: 0,
                quantity: 0
            }
            );
            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    }
})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions

export default cartSlice.reducer;