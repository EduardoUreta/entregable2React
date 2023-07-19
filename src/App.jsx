import '../src/style/style.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './componentes/Header'
import { ItemListContainer } from './componentes/ItemListContainer'
import { CarouselComponent } from "./componentes/Carrusel"
import { Footer } from './componentes/Footer';
import { Acordion } from "./componentes/Acordion"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { ItemDetailContainer } from './componentes/ItemDetailContainer'
import { Error404 } from './componentes/Error404'


function App() {

  return (
    <BrowserRouter>
      <div>
        <Header/>
        <CarouselComponent/>
        <Routes>
          <Route path="/" element={<Acordion saludo={"Tienda Online de bebidas, alcohol, snacks, carnes, verduras y más.."}/>}></Route>
          <Route path="/productos" element={<ItemListContainer saludo={"Tienda Online de bebidas, alcohol, snacks, carnes, verduras y más.."}></ItemListContainer>}/>
          <Route path="/productos/:categoryID" element={<ItemListContainer/>}></Route>
          <Route exact path="/detail/:itemId" element={<ItemDetailContainer/>}></Route>
          <Route path="*" element={<Error404/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
