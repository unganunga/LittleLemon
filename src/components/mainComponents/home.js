import Jumbotron from "./jumbotron";
import Specials from "./specials";
import Testimonials from "./customerSay";
import About from "./about";
import { useEffect, useRef, useState } from "react";
import { wait } from "@testing-library/user-event/dist/utils";

function Home(props) {

    const [hash, SetHash] = useState(null);
    const [freshMount, setFreshMount] = useState(true);

    if (window.location.hash != hash) SetHash(window.location.hash);

    async function scrollToAbout(hashElement) {
        const aboutElement = document.getElementById(hashElement);
        await wait(200);
        aboutElement.scrollIntoView({behavior: "smooth"});
    }

    useEffect(()  => {
        if(props.isNav == true || freshMount == true) {
            const hashElement = window.location.hash;
            if (hashElement == "" || freshMount == true) {
                window.scrollTo(0, 0);
            }
            if (hashElement != "") scrollToAbout(hashElement);
            props.setIsNav(false);
            if (freshMount == true) setFreshMount(false);
        }
    }, [props.isNav]);

    return (
        <div>
            <Jumbotron/>
            <Specials/>
            <Testimonials/>
            <div id="#about"></div>
            <About/>
        </div>
    )
}

export default Home;