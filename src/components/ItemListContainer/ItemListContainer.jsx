import React from "react";
import { Fragment } from "react";
import "../ItemListContainer/ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <Fragment>
      <div className=" col-md-4 cardProductos">
        <img
          className="fotoProducto"
          src="https://i.ibb.co/sC7HGQy/gin-bosque.png"
          alt=""
        />
        <div className="contenedorDescripcion">
          <h4 className="tituloProducto">Gin Bosque Craft</h4>
          <p className="precioProducto">$1500</p>
          <div className="apartadoCantidad">
            <button type="button" class="btn btn-danger botonMas">
              +
            </button>
            <span className="badge bg-light cantidad">4</span>
            <button type="button" class="btn btn-danger botonMenos">
              -
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemListContainer;
