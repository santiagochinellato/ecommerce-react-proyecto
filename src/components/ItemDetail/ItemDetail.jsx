import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ itemSelect }) => {
  return (
    <>
      <div className="card">
        <img className="imagen" src={itemSelect.imagen} />
        <div className="contenedor-info">
          <h3 className="titulo">{itemSelect.nombre}</h3>
          <p className="descripcion">{itemSelect.descripcion}</p>
          <div div className="contenedor-precio-botones">
            <h5 className="precio">$ {itemSelect.precio}</h5>
            <ItemCount />
            <button className="boton-compra btn btn-danger" type="button">
              comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
