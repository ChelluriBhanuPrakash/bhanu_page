import React, { useState } from 'react'
import './Bhanu_page.css'
import software from '../../assets/software.png'
import hardware from '../../assets/hardware.png'
import bpo from '../../assets/bpo.png'
import aiml from '../../assets/aiml.png'
import datascience from '../../assets/datascience.png'
import blockchain from '../../assets/blockchain.png'
import gaming from '../../assets/gaming.png'
import computing from '../../assets/computing.png'
import reality from '../../assets/reality.png'
import security from '../../assets/cybersecurity.png'
import robotics from '../../assets/robotics.png'
import iot from '../../assets/iot.png'
import infra from '../../assets/itinfra.png'
import tech from '../../assets/techrd.png'

const Bhanu_page = () => {
    const [imagesVisible, setImagesVisible] = useState(false);

    const toggleImages = () => {
        setImagesVisible(!imagesVisible);
    };

    const [hoveredImageIndex, setHoveredImageIndex] = useState(-1);

    const handleImageHover = (index,image,backgroundImageClass) => {
        document.body.className = backgroundImageClass;
        setHoveredImageIndex(index,image);
    };

    const handleImageLeave = () => {
        document.body.className = '';
        setHoveredImageIndex(-1,'');
    };

    const numberClasses = (index) =>
        `number ${index === hoveredImageIndex ? 'number-hovered' : ''}`;

    return (
        <div>
            <div id="main">
                <div className='sides'>
                    <div className='side1'>
                        <center>
                            <h1>SECTORS WE ARE <br />WORKING ON</h1>
                        </center>
                        <div className='numbers grid-container'>
                            <div className={`num num1 grid-item ${numberClasses(0)}`}>
                                <h1>01</h1>
                                <p>Software</p>
                            </div>
                            <div className={`num num2 grid-item ${numberClasses(1)}`}>
                                <h1>02</h1>
                                <p>Hardware</p>
                            </div>
                            <div className={`num num3 grid-item  ${numberClasses(2)}`}>
                                <h1>03</h1>
                                <p>BPO</p>
                            </div>
                            <div className={`num num4 grid-item ${numberClasses(3)}`}>
                                <h1>04</h1>
                                <p>AI ML</p>
                            </div>
                            <div className={`num num5 grid-item ${numberClasses(4)}`}>
                                <h1>05</h1>
                                <p>Data Science</p>
                            </div>
                            <div className={`num num6 grid-item ${numberClasses(5)}`}>
                                <h1>06</h1>
                                <p>Block Chain</p>
                            </div>
                            <div className={`num num7 grid-item ${numberClasses(6)}`}>
                                <h1>07</h1>
                                <p>Gaming</p>
                            </div>
                            <div className={`num num8 grid-item ${numberClasses(7)}`}>
                                <h1>08</h1>
                                <p>Computing</p>
                            </div>
                            <div className={`num num9 grid-item ${numberClasses(8)}`}>
                                <h1>09</h1>
                                <p>Reality</p>
                            </div>
                            <div className={`num num10 grid-item ${numberClasses(9)}`}>
                                <h1>10</h1>
                                <p>Cyber Security</p>
                            </div>
                            <div className={`num num11 grid-item ${numberClasses(10)}`}>
                                <h1>11</h1>
                                <p>Robotics & <br />Automation</p>
                            </div>
                            <div className={`num num12 grid-item ${numberClasses(11)}`}>
                                <h1>12</h1>
                                <p>IOT</p>
                            </div>
                            <div className={`num num13 grid-item ${numberClasses(12)}`}>
                                <h1>13</h1>
                                <p>IT Infra</p>
                            </div>
                            <div className={`num num14 grid-item ${numberClasses(13)}`}>
                                <h1>14</h1>
                                <p>Tech R&D</p>
                            </div>
                        </div>
                    </div>

                    <div className='side2'>

                        <div className='circle'>
                            <div className='button'>
                                <button className="btn" onClick={toggleImages}>
                                    Click me
                                </button>
                            </div>
                            <center>
                                {imagesVisible && (
                                    <>
                                        <img
                                            src={software}
                                            alt="software icon"
                                            className={`software icon ${hoveredImageIndex === 0 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(0,software, 'software-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={hardware}
                                            alt="hardware icon"
                                            className={`hardware icon ${hoveredImageIndex === 1 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(1,hardware, 'hardware-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={bpo}
                                            alt="bpo icon"
                                            className={`bpo icon ${hoveredImageIndex === 2 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(2,bpo, 'bpo-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={aiml}
                                            alt="aiml icon"
                                            className={`aiml icon ${hoveredImageIndex === 3 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(3,aiml, 'aiml-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={datascience}
                                            alt="datascience icon"
                                            className={`datascience icon ${hoveredImageIndex === 4 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(4,datascience, 'datascience-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={blockchain}
                                            alt="blockchain icon"
                                            className={`blockchain icon ${hoveredImageIndex === 5 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(5,blockchain,'blockchain-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={gaming}
                                            alt="gaming icon"
                                            className={`gaming icon ${hoveredImageIndex === 6 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(6,gaming,'gaming-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={computing}
                                            alt="computing icon"
                                            className={`computing icon ${hoveredImageIndex === 7 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(7,computing,'computing-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={reality}
                                            alt="reality icon"
                                            className={`reality icon ${hoveredImageIndex === 8 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(8,reality,'reality-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={security}
                                            alt="security icon"
                                            className={`security icon ${hoveredImageIndex === 9 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(9,security,'security-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={robotics}
                                            alt="robotics icon"
                                            className={`robotics icon ${hoveredImageIndex === 10 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(10,robotics,'robotics-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={iot}
                                            alt="iot icon"
                                            className={`iot icon ${hoveredImageIndex === 11 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(11,iot,'iot-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={infra}
                                            alt="infra icon"
                                            className={`infra icon ${hoveredImageIndex === 12 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(12,infra,'infra-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                        <img
                                            src={tech}
                                            alt="tech icon"
                                            className={`tech icon ${hoveredImageIndex === 13 ? 'image-hovered' : ''}`}
                                            onMouseEnter={() => handleImageHover(13,tech,'tech-bg')}
                                            onMouseLeave={handleImageLeave}
                                        />
                                    </>
                                )}
                            </center>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bhanu_page
