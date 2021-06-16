import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section className="container-fluid seccionGaleria">
        <ItemListContainer />
      </section>
    </>
  );
}

export default App;
