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
            {/* <div className="container hetContent">
                <p>
                    Het Graphics started its business in the outdoor media industry in the year 2000 and is known for its innovations and ideas in the industry. We started our journey by introducing Pole Kiosks in the city of Ahmedabad. Currently, we provide several billboard media options such as Gantries, Unipoles, large-format Hoardings, Cantilevers, Pole Kiosks and LEDs.
                </p>
                <br /><br />
                <p>
                    With 99% of our media being backlit and 100% of them located in the most premium and high-traffic locations of Ahmedabad city, we are the leading outdoor media provider with 400+ media inventory options. Our web of billboards is spread throughout Ahmedabad city. Our media inventory can be found in cluster-free zones and is visible at direct eye level making it inescapable to notice while commuting.
                </p>
            </div> */}
            <section id="InventoriesContainer">
                <h1 id="InventoriesHeading" data-aos="fade-up">Inventories Types</h1>
                <div className="section-padding"></div>
                <div className="BillBoardsTypes">
                    <div className="dash">

                    </div>
                    {BillBoardsContent.map((item, index) => (
                        <div key={index} className="InventoriesTypesContainer">
                            <div className="InventoriesImageContainer">
                                <Image src={item.Image} alt="" />
                            </div>
                            <h1>{item.Title}</h1>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Inventories;
