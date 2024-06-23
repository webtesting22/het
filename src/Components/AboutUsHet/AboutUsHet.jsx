import React, { useEffect } from "react";
import "./AboutUs.css"
const AboutUsHet = () => {
    useEffect(() => {
        const handleScroll = () => {
            const images = document.querySelectorAll(".parallax-image");
            const scrollY = window.scrollY;
            images.forEach((image, index) => {
                let factor = 0.1; // Default parallax factor
                if (index === 0 || index === 2) {
                    factor = 0.3; // Faster parallax for the first and third images
                }
                image.style.transform = `translateY(${scrollY * factor}px)`;
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
                </div>
                <div className="section-padding"></div>
                <div className="floatsImageContainer">
                    <div className="images">
                        <img src="https://images.unsplash.com/photo-1604344546765-2f707a31632e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="parallax-image" />
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