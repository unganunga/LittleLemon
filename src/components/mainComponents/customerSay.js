import User from '../../images/user.jpg'

function Testimonials() {
    return(
        <div className="reviewBackground">
            <div className="reviewContainer">
            <h1>Testimonials</h1>
                <div className="reviewCardContainer">
                    <div className="reviewCard">
                        <h1 className='cardH1'>Jarred</h1>
                        <img src={User} height='100px'/>
                        <p className='cardP'>5/5</p>
                        <p className='cardP'>"amazing food!"</p>
                    </div>
                    <div className="reviewCard">
                        <h1 className='cardH1'>Garry</h1>
                        <img src={User} height='100px'/>
                        <p className='cardP'>4/5</p>
                        <p className='cardP'>"Very friendly staff"</p>
                    </div>
                    <div className="reviewCard">
                        <h1 className='cardH1'>Anne</h1>
                        <img src={User} height='100px'/>
                        <p className='cardP'>5/5</p>
                        <p className='cardP'>"Will definetly be back"</p>
                    </div>
                    <div className="reviewCard">
                        <h1 className='cardH1'>Hagrid</h1>
                        <img src={User} height='100px'/>
                        <p className='cardP'>5/5</p>
                        <p className='cardP'>"Delicious!"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;