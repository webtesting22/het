import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import AboutUsHet from "../AboutUsHet/AboutUsHet";
import Inventories from "../InventoriesProducts/Inventories";
const HeroSection = () => {
    const [fontSize, setFontSize] = useState("7rem");
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const section = document.getElementById('HeroSection');
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const maxScroll = 500; // Adjust this value to control the scroll effect
            const newFontSize = Math.max(2, 7 - (scrollY / maxScroll) * 9); // Calculates the new font size

            setFontSize(`${newFontSize}rem`);

            // Determine if the heading should remain sticky
            if (scrollY >= sectionTop + window.innerHeight / 2 && scrollY < sectionTop + sectionHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section id="HeroSection">
                <div className="overlayImageContainer">
                    <div className="blackOverlay">

                    </div>
                </div>
                <div className={`MainTitle ${isSticky ? 'sticky' : ''}`}>
                    <h1 style={{ fontSize, letterSpacing: "-2px", paddingTop: "10px" }}>HET GRAPHICS</h1>
                </div>
                {/* <div className="section-padding"></div> */}
                <section className="AboutUsContainer">
                    <AboutUsHet />
                </section>
                <div className="section-padding"></div>
                <section id="HetGraphicsInventories">
                    <Inventories />
                </section>
                {/* <div style={{ height: "200vh", width: "100%" }}></div> */}
            </section>
        </>
    );
};

export default HeroSection;
