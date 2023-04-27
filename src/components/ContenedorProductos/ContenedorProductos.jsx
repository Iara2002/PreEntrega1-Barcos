import Producto from "../Producto/Producto"





const ContenedorProductos = () => {
    const props = {
        nombre:"Zapatillas Air Huarache",
        precio: 59000
        }
    return(
        <div>
            <Producto nombre="Zapatillas Nike Air Max 97 SE" precio={86999} />
            <Producto nombre="Zapatillas Nike Court Borough Low 2" precio={24000} />
            <Producto {...props} />
        </div>
    )
}
export default ContenedorProductos