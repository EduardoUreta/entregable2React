import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';

// Para los enlaces de navegación
import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <Navbar expand="lg" className="bg-black custom-font">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img width="64" height="64" src="https://img.icons8.com/external-flat-icons-pack-pongsakorn-tan/64/external-alcohol-supermarket-flat-icons-pack-pongsakorn-tan.png" alt="external-alcohol-supermarket-flat-icons-pack-pongsakorn-tan" />
          <Navbar.Brand className='text-warning'>  Almacén Chileno</Navbar.Brand>
          <img width="50" height="50" src="https://img.icons8.com/external-flat-icons-pack-pongsakorn-tan/64/external-alcohol-supermarket-flat-icons-pack-pongsakorn-tan-2.png" alt="external-alcohol-supermarket-flat-icons-pack-pongsakorn-tan-2" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-warning' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" className='text-light text-center mr-2'>Inicio</NavLink>
            <NavLink to="/productos" className='text-light text-center mr-2'>Productos</NavLink>
            <NavLink to="/contacto" className='text-light text-center mr-2'>Contacto</NavLink>
            <NavLink to="/about" className='text-light text-center mr-2'>Sobre Mí</NavLink>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
