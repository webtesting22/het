import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./HeroSection.css";
import AboutUsHet from "../AboutUsHet/AboutUsHet";
import Inventories from "../InventoriesProducts/Inventories";
import { Button, Modal } from 'antd';
// import Image1 from "./MPC_0472.jpg"
// import Image2 from "./bg1.png"
import Image1 from "./BGfirst.jpg";
// import Image2 from "./BG2.jpg";
import Image3 from "../Homepage/BG31.jpg";
import Founder from "../Founders/Founders";
import HetLogo from "../NavigationBar/HetLogo.png"
import ImageGallery from "../ImgesGallery/ImagesGallery";
import { motion, useScroll } from "framer-motion"

const images = [
    Image1,Image3,
];
const HeroSection = () => {
    
    const [currentImage, setCurrentImage] = useState(0);

    const [fontSize, setFontSize] = useState("4rem");
    const [isSticky, setIsSticky] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        if (!isModalOpen) {
            window.location.reload(); 
        } else {
            setIsModalOpen(true); 
        }
    }, [isModalOpen]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); 

        return () => clearInterval(intervalId);
    }, []);

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
                        sectionElement.scrollIntoView({ behavior: 'smooth' });
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
            <section id="HeroSection" >
               
                <div className="overlayImageContainer" style={{ backgroundImage: `url(${images[currentImage]})` }}>

                    <div className="blackOverlay">

                    </div>
                    <img src={HetLogo} alt="" className="homeScreenLogo" />
                </div>
                <div className={`MainTitle ${isSticky ? 'sticky' : ''}`}>
                    <img src={HetLogo} alt="" className="HetLogoopacity" />
                    <h1 style={{ fontSize, }} className="mainTitleHeading">HET GRAPHICS</h1>

                </div>

                <section className="AboutUsContainer" id="AboutUsContainer">
                    <AboutUsHet />
                </section>
                <section className={isSticky ? 'sticky-section' : 'normal-section'} id="ImageGallery">
              
                    <ImageGallery />

                </section>

                <hr style={{ border: "1px solid #ffed00", opacity: "1", marginBottom: "0rem" }} />
                <section>
                    <Founder />
                </section>
                <hr className="FooterHr" />

            </section>
        </>
    );
};

export default HeroSection;
