import { Link } from "react-router-dom";

function Jumbotron() {
    return(
        <div className='Jumbotron'>
            <div className="jumboContainer">
                <div className="jumboText">
                    <h1>Little Lemon</h1>
                    <h2>Melbourne</h2>
                    <p>We are a family owned Mediterranean restaurant,
                         focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to={'/reservations'} ><button>Book a Table</button></Link>
                </div>
                <div className='jumboImgBox'>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;