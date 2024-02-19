import {Link} from "react-router-dom";


function Nav() {
    return(
        <nav className="navHead">
            <ul className="navList">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/menu'}>Menu</Link></li>
                <li><Link to={'/reservations'}>Reservations</Link></li>
                <li><Link to={'/order'}>Order online</Link></li>
                <li><Link to={'/login'}>Staff login</Link></li>
            </ul>
        </nav>
    )
}


export default Nav;