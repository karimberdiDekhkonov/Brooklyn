import React from "react";
import './Main.scss'
import guys from '../../guys.png'
import { Link } from "react-scroll";

function SectionOne(){

    return <section className="section-one">
        <div className="sec-one-left ">
            <div className="primary-text">BROOKLYN Academy <span className="text-warning">.</span></div>   
            <div className="secondary-text">BIZ NAFAQAT INGLIZ TILINI O'RGATAMIZ, BALKI INSONLAR HAYOTINI O'ZGARTIRAMIZ!</div>   
            <div className="thirdary-text">Ikki yil ichida <span className="text-warning fw-bolder">500</span> dan ortiq talabalar bizni tanladi va <span className="text-warning fw-bolder">90%</span> zi o'z tanlovlaridan qoniqdi</div>   
            <Link className="fourth-text" to="students" spy={true} smooth={true} offset={-180} duration={500}>
                <button className="btn res-btn">
                    <span className="me-2">Natijalar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                    </svg>
                </button>
            </Link>       
        </div>
        <div className="sec-one-right">
            <img className="bg-light" src={guys} alt="guys" />
        </div>
    </section>
}

export default SectionOne;