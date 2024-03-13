import SpecialCards from "./specialCards";
import { Link } from "react-router-dom";
import Delivery from '../../images/delivery.png';
import { useEffect } from "react";
import MenuItems from "./MenuItems";

function Menu() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div style={{backgroundColor: 'rgb(73, 94, 87)', height: '150px', display: 'flex', justifyContent: 'center', marginBottom: "30px"}}>
                <h1 style={{fontWeight: 'bold', color: 'rgb(237, 239, 238)'}}>Our menu</h1>
            </div>
            <div className="specialsBanner">
                <h1>This Week's specials!</h1>
            </div>
            <SpecialCards><Link to={'/order'} id='specialOrder'>Order online <img src={Delivery} height={'30px'}></img></Link></SpecialCards>
            <div className="specialsBanner" style={{marginTop: "50px"}}>
                <h1>Main menu</h1>
            </div>
            <div className="menuContainer" style={{marginBottom: "30px"}}>
                <MenuItems><Link to={'/order'} id='specialOrder'>Order online <img src={Delivery} height={'30px'}></img></Link></MenuItems>
            </div>
        </div>
    )
}

export default Menu;