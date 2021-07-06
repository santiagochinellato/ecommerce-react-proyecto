import React, { Fragment } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ cart }) => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"}>
                  <a className="nav-link active" aria-current="page">
                    Inicio
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/productos"}>
                  <a className="nav-link">Productos</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">carrito</a>
              </li>
            </ul>
            <div className="botoncarrito">
              {/* <button type="button" className="btn btn-danger cartwidget">
                cart
                <span className="badge bg-dark contadorWidget">{contador}</span>
              </button> */}
              <CartWidget cart={cart} />
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
