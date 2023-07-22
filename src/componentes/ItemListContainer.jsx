import { BotonBienvenida } from "./BotonBienvenida"

import { useProductos } from "../hooks/useProductos"
import { Link, NavLink } from "react-router-dom";

export const ItemListContainer = ({saludo}) => {

    const {productos, loading} = useProductos()

    return (
        <div className="catalogo-container">
            <h3 className="saludo">{saludo}</h3>
            <p></p>

            <BotonBienvenida/>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <br></br><h1 class="text-blue-900"><b>Filtra por categorias:</b></h1>
                    </div>
                </div>
                <div class="row bg-black text-light ">
                    <div class="col">
                        <NavLink to="/productos/bebidas" class="btn btn-info btn-block mb-2">Bebidas</NavLink>
                    </div>
                    <div class="col">
                        <NavLink to="/productos/alcohol" class="btn btn-dark btn-block mb-2">Alcohol</NavLink>
                    </div>
                    <div class="col">
                        <NavLink to="/productos/carniceria" class="btn btn-danger btn-block mb-2">Carnes</NavLink>
                    </div>
                    <div class="col">
                        <NavLink to="/productos/verduleria" class="btn btn-success btn-block mb-2">Verduras</NavLink>
                    </div>
                    <div class="col">
                        <NavLink to="/productos/snack" class="btn btn-warning btn-block mb-2">Snacks</NavLink>
                    </div>
                    <div class="col">
                        <NavLink to="/productos/lacteos" class="btn btn-warning btn-block mb-2">Lacteos</NavLink>
                    </div>
                </div>
            </div>

            <div className="row custom-font justify-content-around row-gap-4">
            {
                loading ? <h2>Cargando....</h2> :
                productos.map((prod) => (
                <div key={prod.id} className="col-sm-6 col-md-4 col-lg-3">
                    <img src={prod.img} className="img-fluid img-thumbnail"></img>
                    <h2 className="text-bg-dark">{prod.nombre}</h2>
                    <h6 className="text-bg-light">{prod.descripcion}</h6>
                    <h4 className="text-bg-light">${prod.precio}</h4>
                    <Link to={`/detail/${prod.id}`} className="btn btn-primary">Ver Mas</Link>
                </div>
                )
            )
            }
        </div>
        </div>
    )}