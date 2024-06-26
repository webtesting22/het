import React, { useEffect, useRef } from "react";
import "./Inventories.css";
import 'aos/dist/aos.css';
import GantryImages from "./Images/gantry.jpeg"
import cantilever from "./Images/cantilever2.png"
import hoardings from "./Images/hoardings.jpeg"
import polekiosk from "./Images/polekiosk.jpeg"
import unipole from "./Images/unipole.jpeg"
import LED from "./Images/LED.png"
import { Image } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Inventories = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation in milliseconds
            easing: 'ease-in-out', // Easing function for the animation
            once: true // Whether the animation should only happen once
            // Add more options as needed
        });
    }, []);
    const BillBoardsContent = [
        {
            Image: GantryImages,
            Title: "Gantries",
            Description: ""
        },
        {
            Image: unipole,
            Title: "Unipoles",
            Description: ""
        },
        {
            Image: hoardings,
            Title: "Hoardings",
            Description: ""
        },
        {
            Image: cantilever,
            Title: "Cantilevers",
            Description: ""
        },
        {
            Image: polekiosk,
            Title: "Pole Kiosks",
            Description: ""
        },
        {
            Image: LED,
            Title: "LEDs",
            Description: ""
        },
    ]
    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll('.InventoriesTypesContainer').forEach(container => {
                const rect = container.getBoundingClientRect();
                const scrollPercent = ((window.innerHeight - rect.top) / window.innerHeight) * 100;
                let scale = 0.6 + ((scrollPercent / 100) * 0.2); // Scale from 60% to 80%

                // Limit scale to maximum of 80%
                scale = Math.min(scale, 0.8);

                container.querySelector('img').style.transform = `scale(${scale})`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section id="InventoriesContainer">
                {/* <div  style={{padding:"10px 0px"}}></div> */}
                <h1 id="InventoriesHeading" style={{marginTop:"-40px"}}>Inventories Types</h1>
                <div className="section-padding"></div>
                <hr  style={{border:"1px solid #ffed00", opacity:"1",margin:"0px"}}/>
                <div className="BillBoardsTypes">
                   
                    {/* <div className="dash">

                    </div> */}
                    {BillBoardsContent.map((item, index) => (
                        <div key={index} className="InventoriesTypesContainer">
                            <div className="InventoriesImageContainer">
                                {/* <div className="animated-box in"> */}
                                    <img src={item.Image} alt=""  />
                                {/* </div> */}

                            </div>
                            {/* <div class=""></div> */}
                            <h1>{item.Title}</h1>
                            {/* <div className="section-padding"></div> */}
                        </div>
                    ))}
                    {/* <div class="animated-box in">
                        <h1>Animated border</h1>
                        <p>Without fixed width or static background</p>
                    </div>                */}
                      
                </div>
                {/* <div className="section-padding"></div> */}
                {/* <div className="section-padding"></div> */}
                <hr  style={{border:"1px solid #ffed00", opacity:"1",margin:"0px"}}/>
                {/* <div className="container ">
                    <p></p>
                </div> */}
            </section>
        </>
    );
};

export default Inventories;
