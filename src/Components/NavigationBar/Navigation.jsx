import React from "react";
import "./Navigation.css"
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
const Navigation = () => {

    const Links = [
        {
            link: "AboutUs",
            id: "AboutUsContainer"
        },
        {
            link: "Gallery",
            id: "GalleryContainer"
        },
        // {
        //     link: "Inventories",
        //     id: "HetGraphicsInventories"
        // }


    ]

    return (
        <>

            <section id="NavigationBar">
                <div className="navigation">
                    <div>
                        {/* <span>hello</span> */}
                        <a href="mailto:sales@yellowspot.in" style={{ color: "white" }}><span>sales@yellowspot.in</span></a>
                    </div>
                    <div></div>
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