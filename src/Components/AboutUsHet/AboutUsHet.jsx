import React, { useEffect } from "react";
import "./AboutUs.css"
import AnimatedImage1 from "./Images/HET Image.jpg"
import AnimatedImage2 from "./Images/Het.jpg"
import AnimatedImage3 from "./Images/Het1.png"
import AnimatedImage4 from "./Images/het2.png"
import AnimatedImage5 from "./Images/het3.png"
import AnimatedImage6 from "./Images/het4.png"
import AnimatedImage7 from "./Images/het5.png"
import AnimatedImage8 from "./Images/het7.png"

const AboutUsHet = () => {
    useEffect(() => {
        const handleScroll = () => {
            const images = document.querySelectorAll(".parallax-image");
            const headings = document.querySelectorAll(".heading");
            const scrollY = window.scrollY;
            images.forEach((image, index) => {
                let factor = 0.1; // Default parallax factor
                if (index === 0 || index === 2) {
                    factor = 0.3; // Faster parallax for the first and third images
                }
                image.style.transform = `translateY(${scrollY * factor}px)`;
            });
            headings.forEach((heading, index) => {
                const offset = window.innerHeight * (index + 1) - scrollY - 200;
                if (offset > 0 && offset < window.innerHeight) {
                    heading.style.transform = `translateX(${200 - offset}px)`;
                } else {
                    heading.style.transform = `translateX(200px)`; // Reset to start position
                }
            });

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className="container" >
                <div className="aboutUsContainer">
                    <p>Het Graphics, Ahmedabad's leading outdoor media provider since 2000, offers innovative billboard solutions in premium, high-traffic locations.</p>
                    <br />
                    <p>Find out more about us let's Connect YelloSpot</p>
                    <div className="BtnContainer">
                        <a href="https://yellow-spot.vercel.app/" target="_blank"><button className="BtnStyle">Connect</button></a>
                        {/* <button className="BtnStyle_transparent">More About Company <i class='bx bx-right-arrow-alt'></i></button> */}
                    </div>
                </div>
                <div className="section-padding"></div>
                <div className="floatsImageContainer">
                    <div className="images">
                        <img src={AnimatedImage1} alt="" className="parallax-image" />
                        <img src={AnimatedImage2} alt="" className="parallax-image" />
                        <img src={AnimatedImage3} alt="" className="parallax-image" />
                        <img src={AnimatedImage4} alt="" className="parallax-image" />
                        <img src={AnimatedImage5} alt="" className="parallax-image" />
                        <img src={AnimatedImage6} alt="" className="parallax-image" />
                        <img src={AnimatedImage7} alt="" className="parallax-image" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUsHet