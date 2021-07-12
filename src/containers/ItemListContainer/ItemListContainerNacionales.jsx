import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import productos from "../../json/Productos.json";

const ItemListContainerNacionales = () => {
  console.log(productos);
  const ProductosFiltrados = productos.filter(
    (producto) => producto.categoria === "Nacional"
  );
  console.log(ProductosFiltrados);
  const { id } = useParams();

  return (
    <section className=" row container-fluid  seccionGaleria">
      <ItemList productos={ProductosFiltrados} />
    </section>
  );
};
export default ItemListContainerNacionales;
