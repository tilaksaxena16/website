import React from "react";
import web from "../Images/Working.svg";
import { Commonpage } from "./Commonpage";

const Home = () => {

    return (
        <>
            <Commonpage
                name="Grow your business with"
                imgsrc={web}
                visit="/services"
                btname="Get Started" />
        </>
    );
};

export { Home };