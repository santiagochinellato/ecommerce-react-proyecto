import "../ItemListContainer/ItemListContainer.css";
import { ItemCount } from "./ItemCount/ItemCount";

const productos = [
  {
    id: "1",
    nombre: "Gin Aconcagua",
    imagen: "https://i.ibb.co/PjW25vL/gin-aconcagua.png",
    precio: "1550",
    stock: 10,
  },
  {
    id: "2",
    nombre: "Gin Bosque Craft",
    imagen: "https://i.ibb.co/sC7HGQy/gin-bosque.png",
    precio: "1500",
    stock: 20,
  },
  {
    id: "3",
    nombre: "Gin Black Prince",
    imagen: "https://i.ibb.co/1RnJXgP/gin-balckprince.png",
    precio: "1045",
    stock: 3,
  },
  {
    id: "4",
    nombre: "Gin Hendrick´s Dry",
    imagen: "https://i.ibb.co/K5NyjgD/gin-hendricks.png",
    precio: "5750",
    stock: 15,
  },
  {
    id: "5",
    nombre: "Gin Bulldog",
    imagen: "https://i.ibb.co/dB784NJ/gin-bulldog.png",
    precio: "1920",
    stock: 5,
  },
  {
    id: "6",
    nombre: "Gin Merle",
    imagen: "https://i.ibb.co/yq6ZFV8/gin-merle.png",
    precio: "845",
    stock: 11,
  },
  {
    id: "7",
    nombre: "Gin Bombay Sapphire",
    imagen: "https://i.ibb.co/GxpPNqN/gin-bombay.png",
    precio: "2139",
    stock: 2,
  },
  {
    id: "8",
    nombre: "Gin Monkey 47",
    imagen: "https://i.ibb.co/w0m1xjJ/gin-monkey47.png",
    precio: "6390",
    stock: 8,
  },
  {
    id: "9",
    nombre: "Gin Heraclito & Macedonio",
    imagen: "https://i.ibb.co/0J7Lw5j/gin-macedonio.png",
    precio: "1140",
    stock: 10,
  },
  {
    id: "10",
    nombre: "Gin Principe de los Apostoles",
    imagen: "https://i.ibb.co/P4GtDnY/gin-apostoles.png",
    precio: "1214",
    stock: 30,
  },
  {
    id: "11",
    nombre: "Gin Gordon's",
    imagen: "https://i.ibb.co/PYd49mB/gin-gordons.png",
    precio: "787",
    stock: 10,
  },
];

const ItemListContainer = () => {
  return (
    <>
      {productos.map((producto) => (
        <div className=" col-md-3 cardProductos" key={producto.id}>
          <img className="fotoProducto" src={producto.imagen} alt="" />
          <div className="contenedorDescripcion">
            <h5 className="tituloProducto">{producto.nombre}</h5>
            <p className="precioProducto">${producto.precio}</p>
            <div className="apartadoCantidad">
              <ItemCount stock={producto.stock} initial={1} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemListContainer;
