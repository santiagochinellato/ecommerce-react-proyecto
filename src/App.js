import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <header>
        <NavBar cart={cart} />
      </header>
      <section className="container-fluid row seccionGaleria">
        {/* <ItemListContainer /> */}
        <ItemDetailContainer />
      </section>
    </>
  );
}
export default App;
