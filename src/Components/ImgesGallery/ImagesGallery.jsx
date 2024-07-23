import React, { useEffect, useRef } from "react";
import AnimatedImage1 from "../AboutUsHet/Images/Gantry1.jpg"
import AnimatedImage2 from "../AboutUsHet/Images/Gantry3.jpg"
import AnimatedImage3 from "../AboutUsHet/Images/Gantry5.jpg"
import AnimatedImage4 from "../AboutUsHet/Images/Gantry6.jpg"
import AnimatedImage5 from "../AboutUsHet/Images/Unipole2.jpg"
import AnimatedImage6 from "../AboutUsHet/Images/Cantilever2.jpg"
import AnimatedImage7 from "../AboutUsHet/Images/Hoarding1.jpg"
import AnimatedImage8 from "../AboutUsHet/Images/Hoarding4.jpg"
import { Image } from 'antd';
const ImageGallery = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const container = containerRef.current;
            if (container) {
                const translateValue = 1300 + scrollTop * -1; // Adjust the factor to control the speed
                container.style.transform = `translateX(${translateValue}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const images = [
        AnimatedImage1,
        AnimatedImage2,
        AnimatedImage3,
        AnimatedImage4,
        AnimatedImage5,
        AnimatedImage6,
        AnimatedImage7,
        AnimatedImage8,
        // AnimatedImage5,
        // AnimatedImage7,
        // AnimatedImage8,
        // AnimatedImage9,
        // AnimatedImage10,
        // AnimatedImage11,
        // AnimatedImage12,
        // AnimatedImage13,
        // AnimatedImage14,
        // AnimatedImage15
    ];
    return (
        <>
            <div className="container" style={{ width: "100%", overflow: "hidden", padding: "0rem", position: "sticky", top: "10%" }}>
                {/* <div id="BackgroundImage">
                        <img src={billboard} alt="" />
                    </div> */}
                <div className="images" ref={containerRef} style={{ transition: 'transform 0.1s' }} >
                    {images.map((src, index) => (
                        <img key={index} src={src} alt="" />
                    ))}
                </div>
            </div>
        </>
    )
}
export default ImageGallery