import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./HeroSection.css";
import AboutUsHet from "../AboutUsHet/AboutUsHet";
import Inventories from "../InventoriesProducts/Inventories";
import { Button, Modal } from 'antd';
import Founder from "../Founders/Founders";
import HetLogo from "../NavigationBar/HetLogo.png"
import ImageGallery from "../ImgesGallery/ImagesGallery";
const HeroSection = () => {
    const [fontSize, setFontSize] = useState("4rem");
    const [isSticky, setIsSticky] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        if (!isModalOpen) {
            window.location.reload(); // Reload the page when the modal is closed initially
        } else {
            setIsModalOpen(true); // Set isModalOpen to true after the page reloads
        }
    }, [isModalOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const section = document.getElementById('HeroSection');
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const maxScroll = 500; // Adjust this value to control the scroll effect
            const newFontSize = Math.max(2, 5 - (scrollY / maxScroll) * 9); // Calculates the new font size

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
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.hash) {
                const sectionId = location.hash.substring(1); // Remove the '#' character
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) {
                    setTimeout(() => {
                        sectionElement.scrollIntoView({ behavior:'smooth' });
                    }, 1000); // Slightly longer delay to ensure the component is fully rendered
                }
            }
        };

        handleScroll();

        window.addEventListener('resize', handleScroll); // Listen for resize events

        return () => {
            window.removeEventListener('resize', handleScroll);
        };
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const parent1 = document.querySelector('.chacha');


            if (parent1) {
                const scrollY = window.scrollY;
                parent1.style.transform = `translateY(-${scrollY}px)`;

            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);







    return (
        <>
            <section id="HeroSection">
                <div className="overlayImageContainer">
                    <div className="blackOverlay">

                    </div>
                    <img src={HetLogo} alt="" className="homeScreenLogo" />
                </div>
                <div className={`MainTitle ${isSticky ? 'sticky' : ''}`}>
                    <img src={HetLogo} style={{transition:"0.3s ease-in-out"}} alt="" className="HetLogo" />
                    <h1 style={{ fontSize, paddingTop: "13px", paddingBottom: "13px", letterSpacing: "1px" }} className="mainTitleHeading">HET GRAPHICS</h1>

                </div>

                <section className="AboutUsContainer" id="AboutUsContainer">
                    <AboutUsHet />
                </section>
                <section className={isSticky ? 'sticky-section' : 'normal-section'}>
                    <ImageGallery />
                </section>
              
                <hr style={{ border: "1px solid #ffed00", opacity: "1", marginBottom: "4rem" }} />
                <section>
                    <Founder />
                </section>
                <hr className="FooterHr" />

            </section>
        </>
    );
};

export default HeroSection;
