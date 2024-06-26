import React from "react";
import "./Navigation.css"
const Navigation = () => {

    const Links = [
        {
            link: "AboutUs",
        },
        {
            link: "Gallery"
        },
        {
            link: "Inventories"
        },
      

    ]

    return (
        <>

            <section id="NavigationBar">
                <div className="navigation">
                    <div>
                        {/* <span>hello</span> */}
                        <a href="mailto:sales@yellowspot.in" style={{color:"white"}}><span>sales@yellowspot.in</span></a>
                    </div>
                    <div></div>
                    <div id="Navigationbtn">
                        <ul>
                            {Links.map((item, index) => (
                                <li key={index}>
                                    {item.link}
                                </li>
                            ))}
                            <a href="https://yellow-spot.vercel.app/" target="_blank"><button className="BtnStyle">YelloSpot</button></a>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Navigation;