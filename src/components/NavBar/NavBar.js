import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="navBar">
            <Link to='/'>
            <h3>KALEM</h3>
            </Link>            
            <div className="categories">
                <NavLink to={'/category/diplomaturas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><p>Diplomaturas</p></NavLink>
                <NavLink to={'/category/grupos'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><p>Grupos</p></NavLink>
                <NavLink to={'/category/talleres'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><p>Talleres</p></NavLink>
            </div>
        </nav>
    )
}

export default NavBar;