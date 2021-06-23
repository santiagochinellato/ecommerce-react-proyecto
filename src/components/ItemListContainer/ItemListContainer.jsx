import React, { useState, useEffect } from "react";
import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  useEffect(async () => {
    const response = await fetch("./json/productos.json");
    const result = await response.json();
    setProductos(result);
    console.log(result);
  }, []);
  return (
    <>
      <ItemList productos={productos} />
    </>
  );
}
export default ItemListContainer;
