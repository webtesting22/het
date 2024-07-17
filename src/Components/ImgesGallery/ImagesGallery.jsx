import React, { useEffect, useRef } from "react";
import AnimatedImage1 from "../AboutUsHet/Images/HET Image.jpg"
import AnimatedImage2 from "../AboutUsHet/Images/Het.jpg"
import AnimatedImage3 from "../AboutUsHet/Images/Het1.png"
import AnimatedImage4 from "../AboutUsHet/Images/het2.png"
import AnimatedImage5 from "../AboutUsHet/Images/het3.png"
import AnimatedImage6 from "../AboutUsHet/Images/het4.png"
import AnimatedImage7 from "../AboutUsHet/Images/het5.png"
import AnimatedImage8 from "../AboutUsHet/Images/het7.png"
import AnimatedImage9 from "../AboutUsHet/Images/het8.png"
import AnimatedImage10 from "../AboutUsHet/Images/het9.png"
import AnimatedImage11 from "../AboutUsHet/Images/het10.png"
import AnimatedImage12 from "../AboutUsHet/Images/het11.png"
import AnimatedImage13 from "../AboutUsHet/Images/het12.png"
// import AnimatedImage14 from "../AboutUsHet/Images/het13.png"
import AnimatedImage14 from "../AboutUsHet/Images/het14.png"
import AnimatedImage15 from "../AboutUsHet/Images/het15.png"
import AnimatedImage16 from "../AboutUsHet/Images/het16.png"
import { Image } from 'antd';
const ImageGallery = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const container = containerRef.current;
            if (container) {
                const translateValue =1300 + scrollTop * -1; // Adjust the factor to control the speed
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
        AnimatedImage4,
        AnimatedImage6,
        AnimatedImage2,
        AnimatedImage3,
        AnimatedImage5,
        AnimatedImage7,
        AnimatedImage8,
        AnimatedImage9,
        AnimatedImage10,
        AnimatedImage11,
        AnimatedImage12,
        AnimatedImage13,
        AnimatedImage14,
        AnimatedImage15
    ];
    return (
        <>
            <div className="container" style={{ width: "100%", overflow: "hidden",padding:"0rem",position:"sticky",top:"10%" }}>
                {/* <div id="BackgroundImage">
                        <img src={billboard} alt="" />
                    </div> */}
                <div className="images" ref={containerRef} style={{transition: 'transform 0.1s'}} >
                    {images.map((src, index) => (
                        <img key={index} src={src} alt="" />
                    ))}
                </div>
            </div>
        </>
    )
}
export default ImageGallery