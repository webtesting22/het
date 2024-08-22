import React, { useEffect } from "react";
import "./Footer.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 300, // Duration of the animation in milliseconds
            easing: 'ease-in-out', // Easing function for the animation
            once: true // Whether the animation should only happen once
            // Add more options as needed
        });
    }, []);
    return (
        <>
            <section id="Footer">
                <div className="SocialIcons">
                    <div>
                        <a href="https://www.instagram.com/yellowspot.in/" target="_blank">
                        {/* <div>Instagram <i class='bx bx-right-arrow-alt'></i></div> */}
                        <div><i class='bx bxl-instagram'></i></div>
                        </a>
                        <a href="https://www.linkedin.com/company/yellowspotindia/about/" target="_blank">
                        {/* <div>Linkedin <i class='bx bx-right-arrow-alt'></i></div> */}
                        <div><i class='bx bxl-linkedin-square' ></i></div>
                        </a>
                        <a href="https://www.facebook.com/p/Yellow-Spot-100083305608740/" target="_blank">
                        {/* <div>Facebook <i class='bx bx-right-arrow-alt'></i></div> */}
                        <div><i class='bx bxl-facebook-circle' ></i></div>
                        </a>
                    </div>
                    <div id="ContactInfo">
                        <a href="mailto:sales@yellowspot.in" style={{ color: "white", display: "flex" }}>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <i class='bx bxs-envelope'></i>&nbsp;sales@yellowspot.in,</span> </a>&nbsp;&nbsp;

                        <a href="tel:+91 93242 44444" style={{ color: "white", display: "flex" }}>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <i class='bx bxs-phone-call'></i>&nbsp;+91 93242 44444 </span>
                        </a>
                    </div>
                </div>
                <div>
                    <h1 data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"
                        
                    >HET GRAPHICS</h1>
                    <div className="copyrightText">
                        <p>©2024. <a href="https://www.outleadsolutions.com/" target="_blank">&nbsp;Outlead Solutions</a><i class='bx bx-right-arrow-alt'></i></p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer