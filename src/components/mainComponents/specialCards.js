import Card from "./card";
import Salad from '../../images/greek salad.jpg'
import Bruchetta from '../../images/bruchetta.svg'
import Cake from '../../images/lemon dessert.jpg'

function SpecialCards({ children }) {
    return(
        <div className="specialsContainer">
        <Card>
            <div className="cardImgContainer"><img src={Salad} height={'400px'}/></div>
            <div className="titlePrice">
                <h1 className="cardH1">Greek salad</h1>
                <p className="cardP">$12.99</p>
            </div>
            <p className="cardP">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <div className="delivery">
                {children}
            </div>
        </Card>
        <Card>
            <div className="cardImgContainer"><img src={Bruchetta} height={'400px'}/></div>
                <div className="titlePrice">
                    <h1 className="cardH1">Bruchetta</h1>
                    <p className="cardP">$5.99</p>
                </div>
                <p className="cardP">Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <div className="delivery">
                    {children}
                </div>
        </Card>
        <Card>
            <div className="cardImgContainer"><img src={Cake} height={'400px'}/></div>
                <div className="titlePrice">
                    <h1 className="cardH1">Lemon Dessert</h1>
                    <p className="cardP">$5.00</p>
                </div>
                <p className="cardP">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <div className="delivery">
                    {children}
                </div>
        </Card>

    </div>
    );
}

export default SpecialCards;