import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import productos from "../../json/Productos.json";

function ItemListContainer() {
  // const [productos, setProductos] = useState([]);
  const { id } = useParams();

  return (
    <section className=" row container-fluid  seccionGaleria">
      <ItemList productos={productos} />
    </section>
  );
}
export default ItemListContainer;
