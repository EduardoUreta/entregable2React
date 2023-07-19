import carritoCompras from '../assets/carrito.png'

export const CartWidget = () =>{
    return(

        <div className='div-carrito'>
            <img className='carrito' src={carritoCompras} alt="" />
            <p>1</p>
        </div>

    )
}
