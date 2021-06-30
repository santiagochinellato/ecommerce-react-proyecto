import React, { useState, useEffect } from "react";
// import "./ItemListContainer.css";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = (props) => {
  const [descripcion, setDescripcion] = useState([]);
  useEffect(async () => {
    const response = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=3PsGM517VytdQc8bG0MEtRZAyGFkDhc4"
    );
    const result = await response.json();
    setDescripcion(result.results.books[0]);
    // console.log(result.results.books[0]);
    console.log(descripcion);
  }, []);
  return (
    <>
      <ItemDetail item={descripcion} />
    </>
  );
};
export default ItemDetailContainer;
