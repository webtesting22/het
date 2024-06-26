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
import AnimatedImage9 from "./Images/het8.png"
import AnimatedImage10 from "./Images/het9.png"
import AnimatedImage11 from "./Images/het10.png"
import billboard from "./billboard gif (4).gif"
// import 
// import billboard from "./try.gif"
const AboutUsHet = () => {
    useEffect(() => {
        const isPC = () => {
            return window.innerWidth >= 1024; // Assuming PC screens are wider than 1024px
        };

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

        if (isPC()) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (isPC()) {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);
    return (
        <>
            <div>
                <div className="aboutUsContainer">
                    <div className="container">

                        
                        <p>Het Graphics, Ahmedabad's leading outdoor media provider since 2000, offers innovative billboard solutions in premium, high-traffic locations.</p>
                        <br />
                        <p>
                            Het Graphics started its business in the outdoor media industry in the year 2000 and is known for its innovations and ideas in the industry. We started our journey by introducing Pole Kiosks in the city of Ahmedabad. Currently, we provide several billboard media options such as Gantries, Unipoles, large-format Hoardings, Cantilevers, Pole Kiosks and LEDs.</p>
                        <br />
                        <p> With 99% of our media being backlit and 100% of them located in the most premium and high-traffic locations of Ahmedabad city, we are the leading outdoor media provider with 400+ media inventory options. Our web of billboards is spread throughout Ahmedabad city. Our media inventory can be found in cluster-free zones and is visible at direct eye level making it inescapable to notice while commuting.</p>
                        <br />
                        <p>  Het Graphics has been successfully providing a one-stop solution in outdoor advertising to all its local, national and international clientele. With our strong media planning team, we have accomplished multiple successful outdoor campaigns throughout the state of Gujarat.</p>
                        <br />
                        <p>   Currently, we deal with all our clientele through our subsidiary company Yellow Spot. YellowSpot emerged as a collaborative effort between Het Graphics and Khushi Advertising. Our strategic alliance brings together two industry leaders, establishing one of Gujarat's most formidable outdoor media houses. Find out more about us on Yellow Spot (link).</p>


                        <br />
                        <br />
                    </div>
                    <div className="ParaBackEdit">
                        <p>Find out more about our subsidiary company and book your first inventory now!</p>
                        <div className="BtnContainer">
                            <a href="https://yellow-spot.vercel.app/" target="_blank"><button className="BtnStyle">YellowSpot</button></a>
                            {/* <button className="BtnStyle_transparent">More About Company <i class='bx bx-right-arrow-alt'></i></button> */}
                        </div>
                    </div>

                </div>
                <div className="container" >
                    <div id="BackgroundImage">
                        <img src={billboard} alt="" />
                    </div>
                    <div className="section-padding"></div>
                    <div className="floatsImageContainer" id="GalleryContainer">
                        <div className="images">
                            <img src={AnimatedImage1} alt="" className="parallax-image" />
                            <img src={AnimatedImage2} alt="" className="parallax-image" />
                            <img src={AnimatedImage3} alt="" className="parallax-image" />
                            <img src={AnimatedImage4} alt="" className="parallax-image" />
                            <img src={AnimatedImage5} alt="" className="parallax-image" />
                            <img src={AnimatedImage6} alt="" className="parallax-image" />
                            <img src={AnimatedImage7} alt="" className="parallax-image" />
                            <img src={AnimatedImage8} alt="" className="parallax-image" />
                            <img src={AnimatedImage9} alt="" className="parallax-image" />
                            <img src={AnimatedImage10} alt="" className="parallax-image" />
                            <img src={AnimatedImage11} alt="" className="parallax-image" />
                            {/* <img src={AnimatedImage1} alt="" className="parallax-image" /> */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default AboutUsHet