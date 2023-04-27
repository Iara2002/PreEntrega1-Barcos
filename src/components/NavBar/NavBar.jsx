import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    const imgLogo = "https://www.lifestylesports.com/on/demandware.static/-/Library-Sites-LSSSharedLibrary/default/dw472dd7b2/updated-logo/carousel-logos-black-Nike.png";
    return (
   <header>
     <img className='imgLogo' src={imgLogo} alt="Logo de Tienda" />
        <nav>
            <ul>
                <li>Mujer</li>
                <li>Hombre</li>
                <li>Niños</li>
                <li>Destacados</li>
            </ul>
        </nav>

        <CartWidget />

    </header>
    )
}
export default NavBar