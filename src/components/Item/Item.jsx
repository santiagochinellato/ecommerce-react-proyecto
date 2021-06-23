import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

function Item({ producto }) {
  return (
    <div className=" col-md-3 cardProductos" key={producto.id}>
      <img className="fotoProducto" src={producto.imagen} alt="" />
      <div className="contenedorDescripcion">
        <h5 className="tituloProducto">{producto.nombre}</h5>
        <p className="precioProducto">${producto.precio}</p>
        <div className="apartadoCantidad">
          <ItemCount stock={producto.stock} initial={1} />
        </div>
      </div>
    </div>
  );
}

export default Item;
