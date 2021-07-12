import React,{useState} from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


function Item({ producto }) {
  const [cantidad, setCantidad] = useState(0);
  return (
    <div className=" col-md-6 col-lg-6 cardProductos" key={producto.id}>
      <img className="fotoProducto" src={producto.imagen} alt="" />
      <div className="contenedorDescripcion">
        <h5 className="tituloProducto">{producto.nombre}</h5>
        <div className="apartadoCantidad">
          <p className="precioProducto">${producto.precio}</p>
          <ItemCount setCantidad={setCantidad} stock={producto.stock} initial={1} />
        </div>
        <div className="apartadoBotones">
          <button type="button" className="botonVermas btn btn-danger mr-1">
            <Link to={`/productos/${producto.id}`}>Ver +</Link>
          </button>
          <button type="button" className="botonComprar btn btn-danger">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
