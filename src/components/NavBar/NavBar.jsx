import React, { Fragment } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = ({ cart }) => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">E-commerce</a>
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
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">carrito</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ¿Quienes somos?
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Another action</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Something else here</a>
                  </li>
                </ul>
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
