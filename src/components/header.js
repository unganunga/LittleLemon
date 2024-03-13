import Nav from "./nav";
import Lemn from "../images/lemn.png"
import { Link } from "react-router-dom";



function Header(props) {
    return(
        <header className="head">
            <Link to={'/'} onClick={() => props.setIsNav(true)}>
                <img src={Lemn} height={'70rem'} className="headImg"></img>
            </Link>
            <Nav setIsNav = {props.setIsNav}/>
        </header>
    )
}

export default Header;

