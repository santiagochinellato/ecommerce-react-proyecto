import { useState, useEffect } from "react";

export const ItemCount = (props) => {
  const {setCantidad, stock, initial}= props
  const [valor, setValor] = useState(initial);
  const onAdd = () => {
    if (valor < stock) {
      setValor(valor + 1);
    }
    // console.log(valor);
  };
  const onSubstract = () => {
    if (valor > 1) {
      setValor(valor - 1);
    } else {
      alert("la cantidad debe ser menor a 1");
    }
  };
  useEffect(() => {
    setCantidad(valor)
}, [valor])
  return (
    <div>
      <button className="btn btn-danger botonMenos" onClick={onSubstract}>
        -
      </button>
      <input className="cantidad" type="text" value={valor} />
      <button className="btn btn-danger botonMas" onClick={onAdd}>
        +
      </button>
    </div>
  );
};
