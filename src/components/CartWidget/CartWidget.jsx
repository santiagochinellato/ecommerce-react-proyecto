import "./CartWidget.css";
import React from "react";
import { Fragment } from "react";

const CartWidget = () => {
  return (
    <Fragment>
      <button type="button" className="btn btn-danger cartwidget">
        cart<span className="badge bg-dark contadorWidget">4</span>
      </button>
    </Fragment>
  );
};

export default CartWidget;
