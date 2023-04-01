import React from "react";
import { Container } from "react-bootstrap";
import './Main.scss'
import './MainPhone.scss'
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

function Main(){
    return <>
        <Container className="main-cantainer d-flex flex-column">
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
        </Container>
    </>
}

export default Main;