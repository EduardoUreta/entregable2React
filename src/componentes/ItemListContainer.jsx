import { useEffect, useState } from "react";
import { BotonBienvenida } from "./BotonBienvenida"


import { pedirDatos } from "../helpers/pedirDatos"
import { useProductos } from "../hooks/useProductos"
import { Link } from "react-router-dom";

export const ItemListContainer = ({saludo}) => {

    const {productos, loading} = useProductos()

    return (
        <div className="catalogo-container">
            <h3 className="saludo">{saludo}</h3>
            <p></p>

            <BotonBienvenida/>

            <div className="row custom-font justify-content-around ">
            {
                loading ? <h2>Cargando....</h2> :
                productos.map((prod) => (
                <div key={prod.id} className="col-sm-6 col-md-4 col-lg-3">
                    <img src={prod.img} className="img-fluid img-thumbnail"></img>
                    <h2 className="text-bg-dark">{prod.nombre}</h2>
                    <h6>{prod.descripcion}</h6>
                    <h4 className="text-body-emphasis">${prod.precio}</h4>
                    <Link to={`/detail/${prod.id}`} className="btn btn-primary">Ver Mas</Link>
                </div>
                )
            )
            }
        </div>
        </div>
    )}