import React, { Fragment } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = ({ cart }) => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"}>Home</Link>
              <Link to={"/productos"}>Productos</Link>
              <NavDropdown title="Categoria" id="basic-nav-dropdown">
                <Link to={"/importados"}>Importados</Link>
                <Link to={"/nacionales"}>Nacionales</Link>
              </NavDropdown>
            </Nav>
            <div className="botoncarrito">
              <CartWidget cart={cart} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
