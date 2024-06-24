import React,{useEffect} from "react";
import "./Founder.css"
import { Row, Col } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Founder = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Default animation duration in milliseconds
            easing: 'ease-in-out', // Default easing function for the animation
        });
    }, []);
    const FounderDetails = [
        {
            founderTitle: "Asit Shah",
        },
        // {
        //     founderTitle: "Pranay Shah",
        // },

    ]

    return (
        <>
            <section className="FounderContainer container">
                <Row>
                    <Col lg={12} md={24}>
                        <h4 className="FounderTitle">Meet <br /> Founder</h4>
                    </Col>
                    <Col lg={12} md={24}>
                        <div className="FoundersContainerCards">
                            {FounderDetails.map((item, index) => (
                                <div key={index} className="FounderCard"       data-aos="fade-up"
                                data-aos-duration={(index + 1) * 800}>
                                    <h4>{item.founderTitle}</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, explicabo.</p>
                                    <button className="viewMoreBtn">
                                        Connect
                                    </button>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}
export default Founder;