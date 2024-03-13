import { Link } from "react-router-dom";
import Delivery from '../../images/delivery.png'
import SpecialCards from "./specialCards";

function Specials() {
    return(
        <>
            <div className="specialsBanner">
                <h1>This Week's specials!</h1>
                <Link to={'/menu'} className="anchorButton">
                <button>Menu</button>
                </Link>
            </div>
            <SpecialCards><Link to={'/order'} id='specialOrder'>Order online <img src={Delivery} height={'30px'}></img></Link></SpecialCards>
        </>
    )
}

export default Specials;