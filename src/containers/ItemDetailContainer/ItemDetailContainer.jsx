import React, { useState, useEffect } from "react";
// import "./ItemListContainer.css";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router";
import productos from "../../json/Productos.json";

// const ItemDetailContainer = (props) => {
//   const [descripcion, setDescripcion] = useState([]);
//   useEffect(async () => {
//     const response = await fetch("./json/productos.json");
//     const result = await response.json();
//     setDescripcion(result[0]);
//     console.log(result[0]);
//   }, []);
//   return (
//     <>
//       <ItemDetail item={descripcion} />
//     </>
//   );
// };
// export default ItemDetailContainer;

export default function ItemDetailcontainer() {
  const { producto_id } = useParams();
  // const { listProductos, setListProductos } = useState([]);
  const [itemSelect, setItemSelect] = useState({});

  useEffect(() => {
    const getItem = () => {
      let productoFiltado = productos.filter(
        (producto) => producto.id === producto_id.toString()
      );
      setItemSelect(productoFiltado[0]);
    };
    getItem();
  }, []);
  return (
    <section className=" row container-fluid  seccionGaleria">
      {itemSelect ? <ItemDetail itemSelect={itemSelect} /> : <h1>cargando</h1>}
    </section>
  );
}
