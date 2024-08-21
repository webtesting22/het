import React,{useEffect,useState } from "react";
import "./Navigation.css"
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import HetLogo from "../NavigationBar/HetLogo.png"
const Navigation = () => {
   


    const Links = [
        {
            link: "About Us",
            id: "AboutUsContainer"
        },
        {
            link: "Gallery",
            id: "ImageGallery"
        },
      


    ]

    return (
        <>

            <section id="NavigationBar">
                <div className="navigation">
                    <div>
                        {/* <span>hello</span> */}
                        <a href="mailto:sales@yellowspot.in" style={{ color: "white", display: "flex" }}>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <i class='bx bxs-envelope'></i>&nbsp;sales@yellowspot.in</span> </a>&nbsp;&nbsp;

                        <a href="tel:+91 93242 44444" style={{ color: "white", display: "flex" }}>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <i class='bx bxs-phone-call'></i>&nbsp;+91 93242 44444 </span>
                        </a>

                    </div>
                    <div className="LogoContainer">
                    </div>
                    <div id="Navigationbtn">
                        <ul>
                            {Links.map((item, index) => (
                                <ScrollLink
                                    key={index}
                                    to={item.id}
                                    smooth={true}
                                    duration={500}
                                    offset={-170}
                                >
                                    <li>
                                        {item.link}
                                    </li>
                                </ScrollLink>
                            ))}
                            <a href="https://yellow-spot.vercel.app/" target="_blank"><button className="BtnStyle">YellowSpot</button></a>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Navigation;