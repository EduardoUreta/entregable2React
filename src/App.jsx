import { Header } from './componentes/Header'
import { ItemListContainer } from './componentes/ItemListContainer'
import { BotonBienvenida } from './componentes/BotonBienvenida'
import { CarouselComponent } from "./componentes/Carrusel"

import '../src/style/style.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { PokeApi } from './componentes/PokeApi'
import { PokeList } from './componentes/PokeList'
import { PokeCard } from './componentes/PokeCard'


import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { ItemDetailContainer } from './componentes/ItemDetailContainer'
import { Error404 } from './componentes/Error404'




function App() {

  return (

    <BrowserRouter>
    {/* Controlo la navegabilidad */}

      <div>
        <Header/>
        <CarouselComponent/>
        
        <Routes>
          <Route path="/"></Route>
          <Route path="/productos" element={<ItemListContainer saludo={"Tienda Online de bebidas, alcohol, snacks, carnes, verduras y más.."}></ItemListContainer>}/>
          <Route path="/productos/:categoryID" element={<ItemListContainer/>}></Route>
          <Route path="*" element={<Error404/>}></Route>


          {/* El : significa que es un valor dinámico */}

          <Route exact path="/detail/:itemId" element={<ItemDetailContainer/>}></Route>
          
        </Routes>


        {/* <PokeList/>
        <PokeCard/> */}


      </div>
    </BrowserRouter>
  )
}

export default App
