import React,{useReducer} from "react";
import CartReducer from "./CartReducer";
import CartContext from "./CartContext";

const CartState= (props) =>{
  const stateInicial= {
    cart: []
  }
  const [state, dispatch] = useReducer(CartReducer, stateInicial)
  const AgregarCarrito =(item, cantidad) =>{
dispatch({
  type: "ENVIAR_A_CARRITO",
  payload: [{item, quantity: cantidad}]
})
  }
return(
  <CartContext.Provider value={{
    cart: state.cart, 
    AgregarCarrito 
  }}>
    {props.children}
    </CartContext.Provider>
)

}
export default CartState