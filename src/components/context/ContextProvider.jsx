/* eslint-disable no-case-declarations */
import { createContext, useContext, useReducer } from "react"

const initial = {
   cart: []
}
// action type 
const Add_To_Cart = "Add_To_Cart";
const Remove_To_Cart = "Remove_To_Cart"

const reducer = (state, action) =>{
    switch(action.type){
        case Add_To_Cart : 
        const item = state.cart.find((i)=> i.id === action.payload.id);
        if(item){
            return{
                ...state,
                cart: state.cart.map((i)=> i.id === action.payload.id?{...i, quantity: i.quantity + 1}:i)
            }
        }else{
            return{
                ...state,  
                cart: [...state.cart, {...action.payload, quantity: 1}]
            }
        }
        
        case Remove_To_Cart :
            return{
                ...state,
                cart: state.cart.filter((i)=> i.id !== action.payload.id)
            }

            
        default:
            return state; 
    }
}

// create context

const CartContext = createContext()

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initial)
  return (
    <div> 
        <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>
    </div>
  )
}

export default ContextProvider

//create custom hook 
export const useProduct = () =>{
    const context = useContext(CartContext)
    return context
} 