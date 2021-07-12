import "./CartWidget.css";
import React, {useContext} from "react";
import { Fragment } from "react";
import CartContext from "../../context/cart/CartContext";

const CartWidget = () => {
  const {cart} = useContext(CartContext)
  return (
    <Fragment>
      <button type="button" className="btn btn-danger cartwidget">
        cart<span className="badge bg-dark contadorWidget">{cart.length}</span>
      </button>
    </Fragment>
  );
};

export default CartWidget;
