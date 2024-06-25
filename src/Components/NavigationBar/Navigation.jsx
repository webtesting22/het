import React from "react";
import "./Navigation.css"
const Navigation = () => {

    const Links = [
        {
            link: "AboutUs",
        },
        {
            link: "Work"
        },
        {
            link: "Gallery"
        },
        {
            link: "ContactUs"
        },

    ]

    return (
        <>

            <section id="NavigationBar">
                <div className="navigation">
                    <div>
                        <span>hello</span>
                        <span>email</span>
                    </div>
                    <div></div>
                    <div>
                        <ul>
                            {Links.map((item, index) => (
                                <li key={index}>
                                    {item.link}
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Navigation;