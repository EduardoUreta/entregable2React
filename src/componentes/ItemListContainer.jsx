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
            <div>
                <h1 className="text-bg-light">Filtra por categorias:</h1>
                <NavLink to="/productos/bebidas" className='text-black text-center mr-5'>Bebidas</NavLink>
                <NavLink to="/productos/alcohol" className='text-black text-center mr-5'>Alcohol</NavLink>
                <NavLink to="/productos/carniceria" className='text-black text-center mr-5'>Carnes</NavLink>
                <NavLink to="/productos/verduleria" className='text-black text-center mr-5'>Verduras</NavLink>
                <NavLink to="/productos/snack" className='text-black text-center mr-5'>Snacks</NavLink>
            </div>

        </div>
        </div>
    )}