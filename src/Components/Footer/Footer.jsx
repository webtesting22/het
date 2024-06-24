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
                {/* <div className="SocialIcons">
                    <div>
                        <div>Instagram <i class='bx bx-right-arrow-alt'></i></div>
                        <div>Google <i class='bx bx-right-arrow-alt'></i></div>
                        <div>Facebook <i class='bx bx-right-arrow-alt'></i></div>
                    </div>
                </div> */}
                <div>
                    <h1 data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0">HET GRAPHICS</h1>
                    <div className="copyrightText">
                        <p>©2024. <a href="https://www.outleadsolutions.com/">&nbsp;Outlead Solutions</a><i class='bx bx-right-arrow-alt'></i></p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer