import "./CartWidget.css";
import React from "react";
import { Fragment } from "react";

const CartWidget = ({ cart }) => {
  return (
    <Fragment>
      <button type="button" className="btn btn-danger cartwidget">
        cart<span className="badge bg-dark contadorWidget">{cart.length}</span>
      </button>
    </Fragment>
  );
};

export default CartWidget;
