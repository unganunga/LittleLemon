import OwnersA from '../../images/Mario and Adrian A.jpg'
import OwnersB from '../../images/Mario and Adrian b.jpg'


function About() {
    return (
        <div className="aboutBackground">
            <div className="aboutContainer">
                <div className='aboutText'>
                    <h1>About us</h1>
                    <p>
                        Little Lemon is a charming neigbourhood bistro that serves simple
                        food and classic cocktails in a lively but casual environment. 
                        The restaurant features a locally-sourced menu with daily specials.
                    </p>
                </div>
                <div className='aboutCollageContainer'>
                    <div className='aboutImgContainer' id='about1'>
                        <img src={OwnersA} height='350px' className='ownerA'/>
                    </div>
                    <div className='aboutImgContainer' id='about2'>
                        <img src={OwnersB} height='350px' className='ownerB'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;