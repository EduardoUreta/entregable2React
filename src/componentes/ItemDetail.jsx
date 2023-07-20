import { Link } from "react-router-dom";
export const ItemDetail = ({item}) => {

    return (
            <div className="img-fluid card col-4 text-center m-auto">
                <img src={item.img} alt={item.nombre}/>
                <h1 className="text-bg-dark"><b>{item.nombre}</b></h1>
                <p><b>{item.descripcion}</b></p> 
                <p><b>Precio:</b><b className="text-warning"> ${item.precio}</b></p>
                <p className="capitalize">Categoría: {item.category}</p>
                <button className="btn btn-primary">Agregar</button>
                <Link to ="/productos">Volver atras</Link>
            </div>
    )
}