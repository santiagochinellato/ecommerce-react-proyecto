import React, { useState, useEffect } from "react";
import "../ItemListContainer/ItemListContainer.css";

const productos = [
  {
    id: "1",
    nombre: "Gin Aconcagua",
    imagen: "https://i.ibb.co/PjW25vL/gin-aconcagua.png",
    precio: "1550",
  },
  {
    id: "2",
    nombre: "Gin Bosque Craft",
    imagen: "https://i.ibb.co/sC7HGQy/gin-bosque.png",
    precio: "1500",
  },
  {
    id: "3",
    nombre: "Gin Black Prince",
    imagen: "https://i.ibb.co/1RnJXgP/gin-balckprince.png",
    precio: "1045",
  },
  {
    id: "4",
    nombre: "Gin Hendrick´s Dry",
    imagen: "https://i.ibb.co/K5NyjgD/gin-hendricks.png",
    precio: "5750",
  },
  {
    id: "5",
    nombre: "Gin Bulldog",
    imagen: "https://i.ibb.co/dB784NJ/gin-bulldog.png",
    precio: "1920",
  },
  {
    id: "6",
    nombre: "Gin Merle",
    imagen: "https://i.ibb.co/yq6ZFV8/gin-merle.png",
    precio: "845",
  },
  {
    id: "7",
    nombre: "Gin Bombay Sapphire",
    imagen: "https://i.ibb.co/GxpPNqN/gin-bombay.png",
    precio: "2139",
  },
  {
    id: "8",
    nombre: "Gin Monkey 47",
    imagen: "https://i.ibb.co/w0m1xjJ/gin-monkey47.png",
    precio: "6390",
  },
  {
    id: "9",
    nombre: "Gin Heraclito & Macedonio",
    imagen: "https://i.ibb.co/0J7Lw5j/gin-macedonio.png",
    precio: "1140",
  },
  {
    id: "10",
    nombre: "Gin Principe de los Apostoles",
    imagen: "https://i.ibb.co/P4GtDnY/gin-apostoles.png",
    precio: "1214",
  },
  {
    id: "11",
    nombre: "Gin Gordon's",
    imagen: "https://i.ibb.co/PYd49mB/gin-gordons.png",
    precio: "787",
  },
];

const ItemListContainer = ({ cart, setCart }) => {
  const deleteItem = (id) => {
    let resultado = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(resultado);
  };
  return (
    <>
      {productos.map((producto) => (
        <div className=" col-md-3 cardProductos" key={producto.id}>
          <img className="fotoProducto" src={producto.imagen} alt="" />
          <div className="contenedorDescripcion">
            <h5 className="tituloProducto">{producto.nombre}</h5>
            <p className="precioProducto">${producto.precio}</p>
            <div className="apartadoCantidad">
              <button
                type="button"
                class="btn btn-danger botonMas"
                onClick={() => {
                  setCart([
                    ...cart,
                    {
                      id: producto.id,
                      name: producto.nombre,
                      price: producto.precio,
                    },
                  ]);
                }}
              >
                +
              </button>
              <span className="badge bg-light cantidad">4</span>
              <button
                type="button"
                class="btn btn-danger botonMenos"
                onClick={() => deleteItem(producto.id)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className=" col-md-4 cardProductos">
        <img
          className="fotoProducto"
          src="https://i.ibb.co/sC7HGQy/gin-bosque.png"
          alt=""
        />
        <div className="contenedorDescripcion">
          <h4 className="tituloProducto">Gin Bosque Craft</h4>
          <p className="precioProducto">$1500</p>
          <div className="apartadoCantidad">
            <button type="button" class="btn btn-danger botonMas">
              +
            </button>
            <span className="badge bg-light cantidad"></span>
            <button type="button" class="btn btn-danger botonMenos">
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
