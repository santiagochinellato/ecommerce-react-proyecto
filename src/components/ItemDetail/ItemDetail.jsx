import React from "react";
import { useState, useContext} from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import CartContext from "../../context/cart/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ itemSelect }) => {
  const {cart, AgregarCarrito} = useContext(CartContext)
  const [cantidad, setCantidad] = useState(0);
  console.log(cart)
  return (
    <>
      <div className="card">
        <img className="imagen" src={itemSelect.imagen} />
        <div className="contenedor-info">
          <h3 className="titulo">{itemSelect.nombre}</h3>
          <p className="descripcion">{itemSelect.descripcion}</p>
          <div div className="contenedor-precio-botones">
            <h5 className="precio">$ {itemSelect.precio}</h5>
            <ItemCount setCantidad={setCantidad} stock={itemSelect.stock} initial={1} />
            <button className="boton-compra btn btn-danger" type="button" onClick={() =>AgregarCarrito(itemSelect, cantidad)}>
              comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
