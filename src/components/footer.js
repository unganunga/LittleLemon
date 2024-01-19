import Lemon from '../images/footLogo.png'
import {Link} from "react-router-dom";

function Footer() {
    return(
        <footer>
            <div className='footerContainer'>
                <img src={Lemon}></img>
                <nav >
                    <ul className='footerNavList'>
                        <h3>Navigation:</h3>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/menu'}>Menu</Link></li>
                        <li><Link to={'/reservations'}>Reservations</Link></li>
                        <li><Link to={'/order'}>Order online</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul className='footerNavList'>
                        <h3>Contact us</h3>
                        <li>Adress</li>
                        <li>Phone</li>
                        <li>Email</li>
                    </ul>
                </nav>
                <nav>
                    <ul className='footerNavList'>
                        <h3>Social media links</h3>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                </ul>
                </nav>
            </div>
        </footer>
    )
}


export default Footer;