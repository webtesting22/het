import React, { useEffect, useState } from "react";
import "./Founder.css";
import { Row, Col } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Modal } from 'antd';

const Founder = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFounder, setSelectedFounder] = useState(null);

    const showModal = (founder) => {
        setSelectedFounder(founder);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Default animation duration in milliseconds
            easing: 'ease-in-out', // Default easing function for the animation
        });
    }, []);

    const FounderDetails = [
        {
            founderTitle: "Asit Shah",
            Descriptions: [
                "Mr. Asit Shah, a luminary in the realm of Out-of-Home (OOH) media, whose unwavering dedication and forward-thinking approach have reshaped the landscape of OOH advertising in the city of Ahmedabad. With a profound vision for the industry, Mr. Shah stands as the driving force behind 'Het Graphics,' dominating Ahmedabad's OOH sector for over 25 years. Specializing in cutting-edge media solutions, Het Graphics under his stewardship has pioneered innovative media vehicles such as bus shelters and gantries in the city of Ahmedabad, elevating advertising possibilities. He is the co-founder of 'Yellow Spot,' an enterprise under the umbrella of 'Het Graphics' and 'Khushi Advertising', a product of two leading outdoor companies which is now changing the landscape of Gujarat's OOH industry.",
                "Mr. Shah works at the forefront alongside the municipal corporation and fellow OOH vendors for the betterment of the OOH industry in Ahmedabad. He is renowned within the industry and among clients as a trusted guide on campaign strategizing, media selection, campaign design, all aimed at maximizing ROI and boosting brand recognition. His voluntary participation as an advisor stems from his deep-seated passion and two-decade long experience of outdoor advertising.",
                "Mr. Shah's entrepreneurial spirit extends beyond media, branching into real estate, finance, and metal, solidifying his status as a multifaceted leader in both business and innovation. In addition to his remarkable achievements in business, Mr. Shah exemplifies a profound commitment to philanthropy, actively engaging with numerous NGOs, charitable trusts, and similar organizations, embodying his belief in giving back to society. His unwavering dedication to both commerce and social responsibility solidifies his legacy as a visionary leader making impactful strides in multiple walks of life."
            ]
        },
        // Additional founder details can be added here
    ];

    return (
        <>
            <div id="Founders">
                <Modal title="Asit Shah" width={1000} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                    {selectedFounder && selectedFounder.Descriptions.map((desc, index) => (
                        <p key={index} style={{ marginBottom: "20px", fontSize: "16px" }}>{desc}</p>
                    ))}
                </Modal>

                <section className="FounderContainer container">
                    <Row>
                        <Col lg={12} md={24}>
                            <h4 className="FounderTitle">Meet Our Founder</h4>
                        </Col>
                        <Col lg={12} md={24}>
                            <div className="FoundersContainerCards">
                                {FounderDetails.map((item, index) => (
                                    <div key={index} className="FounderCard" >
                                        <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                                            <h4>{item.founderTitle}</h4>
                                            <i class='bx bxl-linkedin socialIcons' ></i>
                                        </div>
                                        <p>{truncateText(item.Descriptions[0], 30)}</p>
                                        <button className="viewMoreBtn" onClick={() => showModal(item)}>
                                            Read More
                                        </button>

                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        </>
    );
};

export default Founder;
