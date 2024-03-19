import { useEffect } from "react";
import {Link} from "react-router-dom";


function Nav(props) {

    const setIsNav = props.setIsNav

    const burgerStyle = {
        width: "35px",
        height: "5px",
        margin: "6px 0",
        zIndex: "1"
    }

    const dropDownStyle = {
        position: "absolute",
        right: "15px",
        top: "80px",
        backgroundColor: "rgb(240, 240, 240)",
        zIndex: "1",
        width: "10rem",
        height: "13rem",
        display: "block",
        borderRadius: "10px",
        textAlign: "left"
    }

    const dropDownItemStyle = {
        position: "relative",
        left: "35px",
        top: "10px",
        lineHeight: "30px",
    }

    useEffect(() => {
        document.addEventListener("click", e => {
            const isDropDown = e.target.matches(".burger")
            if (!isDropDown && e.target.closest("#NavDropDown") != null) return
            if (!isDropDown && e.target.closest("#NavDropDown") === null) {
                document.getElementById("NavDropDown").classList.remove("active")
                return
            }

            let currentDropdown
            if (isDropDown) {
                currentDropdown = document.getElementById("NavDropDown")
                currentDropdown.classList.toggle("active")
            }
            return () => {
                document.removeEventListener('click');
              };
        })
    }, [])

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
            <div className="burger" style={{width: "40px", zIndex: "2"}}>
                <div className="burger" style={burgerStyle}></div>
                <div className="burger" style={burgerStyle}></div>
                <div className="burger" style={burgerStyle}></div>
            </div>
            <div id="NavDropDown" style = {dropDownStyle}>
                <div><Link to={'/'} style={dropDownItemStyle} onClick={() => setIsNav(true)}>Home</Link></div>
                <div><Link to={'/#about'} style={dropDownItemStyle} onClick={ () => setIsNav(true)}>About</Link></div>
                <div><Link to={'/menu'} style={dropDownItemStyle}>Menu</Link></div>
                <div><Link to={'/reservations'} style={dropDownItemStyle}>Reservations</Link></div>
                <div><Link to={'/order'} style={dropDownItemStyle}>Order online</Link></div>
                <div><Link to={'/login'} style={dropDownItemStyle}>Staff login</Link></div>
            </div>
        </nav>
    )
}


export default Nav;