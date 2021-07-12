import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import productos from "../../json/Productos.json";

const ItemListContainerImportados = () => {
  console.log(productos);
  const ProductosFiltrados = productos.filter(
    (producto) => producto.categoria === "Importado"
  );
  console.log(ProductosFiltrados);
  const { id } = useParams();

  return (
    <section className=" row container-fluid  seccionGaleria">
      <ItemList productos={ProductosFiltrados} />
    </section>
  );
};
export default ItemListContainerImportados;
