import React, { useState } from "react";
import p1 from '../../75.jpg'
import p2 from '../../7.5.jpg'
import p3 from '../../65.jpg'
import p4 from '../../70.jpg'
import { Carousel } from "react-bootstrap";


function SectionThree(){

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return <>
    <section id="students" className="section-three-container">
        <div>
          <div className="section-three-first">
            <span className="shadow-5">
              O'quvchilarimiz
            </span> 
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="ms-3 bi bi-mortarboard" viewBox="0 0 16 16">
                      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
            </svg>
            </div>
        </div>
        <Carousel className="carosel" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="result-box">
                <div className="sections">
                    <div className="fullname">Shohjahon Valiyev</div>
                    <div className="sec">Listening: 7.5</div>
                    <div className="sec">Reading: 7</div>
                    <div className="sec">Writing: 7</div>
                    <div className="sec">Speaking: 7.5</div>
                    <div className="text-info over">Overall: 7.5</div>
                </div>
                <div className="res-img">
                  <img className="d-block w-100" src={p1} alt="Second slide"/>
                </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
               <div className="result-box">
               <div className="sections">
                    <div className="fullname">Azizbek Akhmatjonov</div>
                    <div className="sec">Listening: 7.5</div>
                    <div className="sec">Reading: 8</div>
                    <div className="sec">Writing: 6.5</div>
                    <div className="sec">Speaking: 7</div>
                    <div className="text-info over">Overall: 7.5</div>
                </div>
                <div className="res-img">
                  <img className="d-block w-100" src={p2} alt="Second slide"/>
                </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="result-box">
                <div className="sections">
                    <div className="fullname">Shuxrat Xusanov</div>
                    <div className="sec">Listening: 7</div>
                    <div className="sec">Reading: 6.5</div>
                    <div className="sec">Writing: 6</div>
                    <div className="sec">Speaking: 7</div>
                    <div className="text-info over">Overall: 6.5</div>
                </div>
                <div className="res-img">
                  <img className="d-block w-100" src={p3} alt="Third slide"/> 
                </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="result-box">
               <div className="sections">
                    <div className="fullname">Zakhrokhon Temirova</div>
                    <div className="sec">Listening: 8</div>
                    <div className="sec">Reading: 7.5</div>
                    <div className="sec">Writing: 6</div>
                    <div className="sec">Speaking: 6</div>
                    <div className="text-info over">Overall: 7</div>
                </div>
                <div className="res-img">
                  <img className="d-block w-100" src={p4} alt="Third slide" />
                </div>
            </div>
          </Carousel.Item>
        </Carousel>
    </section>
    </>
}

export default SectionThree;