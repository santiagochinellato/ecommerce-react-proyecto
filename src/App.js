import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <>
        <header>
          <NavBar cart={cart} />
        </header>
        <Switch>
          <Route exact component={ItemListContainer} path="/productos" />
          <Route
            exact
            component={ItemDetailContainer}
            path="/productos/:producto_id"
          />
        </Switch>
      </>
    </BrowserRouter>
  );
}
export default App;
