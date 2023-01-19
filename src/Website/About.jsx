import React from "react";
import webnew from "../Images/off.png";
import { Commonpage } from "./Commonpage";

const About = () => {

    return (
        <>
            <Commonpage
                name="Welcome to About page"
                imgsrc={webnew}
                visit="/contact"
                btname="Contact Now" />
        </>
    );
};

export { About };