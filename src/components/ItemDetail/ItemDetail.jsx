import React from "react";
import "./ItemDetail.css";

const ItemDetail = (props) => {
  return (
    <>
      <div className="card">
        <img className="imagen" src={props.item.book_image} alt="" />
        <div className="contenedor-info">
          <h3 className="titulo">{props.item.title}</h3>
          <p className="descripcion">{props.item.description}</p>
          <h5 className="precio">{props.item.price}</h5>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
