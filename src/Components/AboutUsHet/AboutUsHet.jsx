import React, { useEffect } from "react";
import "./AboutUs.css"
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
                        <img src="https://images.unsplash.com/photo-1576864333214-b2cee50f8283?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="parallax-image" />
                        <img src="https://images.unsplash.com/photo-1557858310-9052820906f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="parallax-image" />
                        <img src="https://images.unsplash.com/photo-1616418625298-baef98bc34f8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="parallax-image" />
                        <img src="https://images.unsplash.com/photo-1635873432087-50eba4c4392d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="parallax-image" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUsHet