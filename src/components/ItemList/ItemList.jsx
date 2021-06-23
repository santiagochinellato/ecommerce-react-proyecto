import React from "react";
import Item from "../Item/Item";

export default function ItemList({ productos }) {
  return (
    <>
      {productos.map((producto) => {
        return <Item producto={producto} key={producto.id} />;
      })}
    </>
  );
}
