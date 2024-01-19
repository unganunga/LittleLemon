import Jumbotron from "./jumbotron";
import Specials from "./specials";
import Testimonials from "./customerSay";
import About from "./about";

function Home() {
    return (
        <div>
            <Jumbotron/>
            <Specials/>
            <Testimonials/>
            <About/>
        </div>
    )
}

export default Home;