import Nav from "./nav";
import Lemn from "../images/lemn.png"
import { Link } from "react-router-dom";



function Header() {
    return(
        <header className="head">
            <Link to={'/'}>
                <img src={Lemn} height={'70rem'} className="headImg"></img>
            </Link>
            <Nav/>
        </header>
    )
}

export default Header;

