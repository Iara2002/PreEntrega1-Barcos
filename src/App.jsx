import './App.css';

import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';

import NavBar from './components/NavBar/NavBar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
   <>
   <NavBar />
   <ItemListContainer greeting="HOLA! Bienvenido a NIKE" />
   <ContenedorProductos />
   </>
  );
}

export default App;
