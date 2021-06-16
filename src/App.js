import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <header>
        <NavBar cart={cart} />
      </header>
      <section className="container-fluid row seccionGaleria">
        <ItemListContainer cart={cart} setCart={setCart} />
      </section>
    </>
  );
}
export default App;
