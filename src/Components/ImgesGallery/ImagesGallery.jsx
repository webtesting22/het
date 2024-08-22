import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import AnimatedImage1 from "../AboutUsHet/Images/Gantry1.jpg"
import AnimatedImage2 from "../AboutUsHet/Images/Gantry3.jpg"
import AnimatedImage3 from "../AboutUsHet/Images/Gantry5.jpg"
import AnimatedImage4 from "../AboutUsHet/Images/Gantry6.jpg"
import AnimatedImage41 from "../AboutUsHet/Images/Gantry61.jpg"
import AnimatedImage5 from "../AboutUsHet/Images/Unipole2.jpg"
import AnimatedImage6 from "../AboutUsHet/Images/Cantilever2.jpg"
import AnimatedImage7 from "../AboutUsHet/Images/Hoarding1.jpg"
import AnimatedImage8 from "../AboutUsHet/Images/Hoarding4.jpg"
import AnimatedImage81 from "../AboutUsHet/Images/Hoarding41.jpg";
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./ImageGallery.css"
import { motion, useScroll } from "framer-motion"
import { scroll } from "framer-motion/dom";

import 'aos/dist/aos.css';

const ImageGallery = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref });

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

        AnimatedImage8,
        AnimatedImage7,
        AnimatedImage6,
        // <ul className="chooseUsList" >
        //     <li>Eye-level visibility</li>
        //     <li>Road-center placement</li>
        //     <li>Back-lit media</li>
        //     <li>Innovative designs</li>
        //     <li>Prime locations only</li>
        //     <li>High traffic areas</li>
        //     <li>Entire city coverage</li>
        //     <li>Bigger and better</li>
        // </ul>,
    ];
    const imageText = [
        {
            text: "Bigger And Better",
        },
        {
            text: "Road-Center Placement",
        },
        {
            text: "Eye-Level Visibility",
        },
        {
            text: "Innovative Designs",
        },
        {
            text: "High Traffic Areas",
        },
        {
            text: "Backlit Media"
        },
        {
            text: "Prime Locations Only"
        },
        {
            text: "Entire City Coverage",
        },
        {
            text: "Why Choose Us",
        }
    ]
    const combinedImages = images.map((image, index) => ({
        link: image,
        text: imageText[index]?.text,
    }));

    return (
        <>

            <div className="swiper-container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={AnimatedImage1} />
                        <p className="swiper-text">Bigger And Better</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AnimatedImage2} />
                        <p className="swiper-text">Road-Center Placement</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AnimatedImage3} />
                        <p className="swiper-text">Eye-Level Visibility</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AnimatedImage41} />
                        <p className="swiper-text">Innovative Designs</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AnimatedImage5} />
                        <p className="swiper-text">High Traffic Areas</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AnimatedImage81} />
                        <p className="swiper-text">Backlit Media</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AnimatedImage7} />
                        <p className="swiper-text">Prime Locations Only</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AnimatedImage6} />
                        <p className="swiper-text">Entire City Coverage</p>
                    </SwiperSlide>

                </Swiper>
            </div>
            {/* <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            /> */}
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="indicator"
                    style={{ pathLength: scrollYProgress }}
                />
            </svg>
            <div className="imgcontainer container" style={{ width: "100%", overflow: "hidden", padding: "0rem", position: "sticky", top: "20%", }} ref={ref}>
                {/* <p className="chooseHeading">WHY CHOOSE US</p> */}
                <div className="images" ref={containerRef} style={{ transition: 'transform 0.1s' }} >
                    {/* {images.map((src, index) => (

                        <img key={index} src={src} alt="" />
                        
                    ))} */}
                    {combinedImages.map((item, index) => (
                        <div key={index}>
                            {/* <img src={image.link} alt={`Image ${index + 1}`} /> */}
                            {React.isValidElement(item.link) ? (
                                // If the item is a React element, render it directly
                                item.link
                            ) : (
                                // Otherwise, render it as an image
                                <img src={item.link} alt={`Image ${index + 1}`} />
                            )}
                            <div className="imageTextContainer" >
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}

                    <div className="listContainer"  >

                        <ul className="chooseUsList" >
                            <div>
                                <p className="chooseHeading">Why Choose Us?</p>
                            </div>
                            <br />
                            <li data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="200"
                                data-aos-duration="2000"
                                data-aos-offset="0">Eye-Level Visibility</li>
                            <li data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-duration="2000"
                                data-aos-delay="400"
                                data-aos-offset="0">Road-Center Placement</li>
                            <li data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="600"
                                data-aos-duration="2000"
                                data-aos-offset="0">Back-Lit Media</li>
                            <li data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="800"
                                data-aos-duration="2000"
                                data-aos-offset="0">Innovative Designs</li>
                            <li data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="1000"
                                data-aos-duration="2000"
                                data-aos-offset="0">Prime Locations Only</li>
                            <li data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="1200"
                                data-aos-duration="2000"
                                data-aos-offset="0">High Traffic Areas</li>
                            <li data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="1400"
                                data-aos-duration="2000"
                                data-aos-offset="0">Entire City Coverage</li>
                            <li data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="1600"
                                data-aos-duration="2000"
                                data-aos-offset="0">Bigger And Better</li>

                        </ul>
                        {/* <p className="imageTextContainer" data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-duration="2000"
                                data-aos-delay="3000"
                                data-aos-offset="0">Why Choose Us</p> */}

                    </div>
                </div>


            </div>


        </>
    )
}
export default ImageGallery