import React, { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import "./AboutUs.css"
import AnimatedImage1 from "./Images/HET Image.jpg"
import AnimatedImage2 from "./Images/Het.jpg"
import AnimatedImage3 from "./Images/Het1.png"
import AnimatedImage4 from "./Images/het2.png"
import AnimatedImage5 from "./Images/het3.png"
import AnimatedImage6 from "./Images/het4.png"
import AnimatedImage7 from "./Images/het5.png"
import AnimatedImage8 from "./Images/het7.png"
import AnimatedImage9 from "./Images/het8.png"
import AnimatedImage10 from "./Images/het9.png"
import AnimatedImage11 from "./Images/het10.png"
import AnimatedImage12 from "./Images/het11.png"
import AnimatedImage13 from "./Images/het12.png"
// import AnimatedImage14 from "./Images/het13.png"
import AnimatedImage14 from "./Images/het14.png"
import AnimatedImage15 from "./Images/het15.png"
import AnimatedImage16 from "./Images/het16.png"
import hoarding from "../AboutUsHet/Images/Hoarding.png"
// import 
import billboard from "./try.gif"
const AboutUsHet = () => {

    return (
        <>
            <div>
                <div className="aboutUsContainer">

                    <div className="about container" style={{ marginTop: "5rem" }}>

                        <Row>
                            {/* <hr style={{ border: "1px solid #ffed00", opacity: "1", width: "99%" ,position:"sticky"}} /> */}
                            <Col lg={12} md={24}>
                                <p data-aos="fade-up" data-aos-duration="1000">Het Graphics started its business in the outdoor media industry in the year 2000 and is known for its innovations and ideas in the industry. We began our journey by introducing Pole Kiosks in the city of Ahmedabad. Currently, we provide several billboard media options such as Gantries, Unipoles, large-format Hoardings, Cantilevers, Pole Kiosks and LEDs.
                                    With 99% of our media being backlit and 100% of them located in the most premium and high-traffic locations of Ahmedabad city, we are the leading outdoor media provider in Ahmedabad with 400+ media inventory options.
                                </p>
                                <br />
                            </Col>
                            <Col lg={12} md={24}>

                                <p data-aos="fade-up" data-aos-duration="1000">
                                    Our web of billboards is strategically spread throughout the Ahmedabad city and can be found in cluster-free zones with direct eye-level visibility making it inescapable to commuter’s attention.
                                    Currently, we deal with all our clientele through our subsidiary company Yellow Spot. YellowSpot emerged as a collaborative effort between Het Graphics and Khushi Advertising. Our strategic alliance brings together two industry leaders, establishing one of Gujarat's most formidable outdoor media house.<br />
                                </p>
                            </Col>
                        </Row>
                        {/* <hr style={{ border: "1px solid #ffed00", opacity: "1", marginBottom: "0rem", width: "99 %" }} /> */}
                    </div>

                    {/* <HetHome/> */}
                    <div className="ParaBackEdit " style={{ position: "relative" }}>
                        {/* <img src={hoarding} style={{    position: "absolute",opacity:"0.1",bottom:"0",width:"150px"}}/> */}
                        <div className="container">
                            <p data-aos="fade-up" data-aos-duration="1000">Find out more about us on: <div style={{ display: "inline-block", margin: "0" }}><a href="https://yellow-spot.vercel.app/" target="_blank" className="yellowSpotLink">YellowSpot</a></div>
                            </p>
                            <p data-aos="fade-up" data-aos-duration="1000" style={{ fontSize: "2.5rem" }}>And book your first inventory now!</p>
                        </div>

                    </div>
                    <br />
                </div>

            </div >
        </>
    )
}
export default AboutUsHet