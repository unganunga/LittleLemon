import { useState } from "react";
import {Link} from "react-router-dom";


function Nav(props) {

    const setIsNav = props.setIsNav

    return(
        <nav className="navHead">
            <ul className="navList">
                <li><Link to={'/'} onClick={() => setIsNav(true)}>Home</Link></li>
                <li><Link to={'/#about'} onClick={ () => setIsNav(true)}>About</Link></li>
                <li><Link to={'/menu'}>Menu</Link></li>
                <li><Link to={'/reservations'}>Reservations</Link></li>
                <li><Link to={'/order'}>Order online</Link></li>
                <li><Link to={'/login'}>Staff login</Link></li>
            </ul>
        </nav>
    )
}


export default Nav;