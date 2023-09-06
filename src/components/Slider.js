import React from 'react';
import arrow from '../img/arrow.png';

const Slider = ({ data }, windowWidth) => {
    let [slideWidth, setSlideWidth] = React.useState(null);
    const [activeNode, setActiveNode] = React.useState(1);
    const slider = React.useRef();

    React.useEffect(() => {
        const handleResize = () => {
            sliderEvent(
                slider.current.childNodes[activeNode].firstChild,
                activeNode,
            );
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sliderEvent = (node, index) => {
        setSlideWidth(() => {
            if (index <= 1 && window.innerWidth > 1024) {
                // Não deixa padding-left para os primeiros cards
                slideWidth = 0;
            } else if (
                index >= slider.current.childNodes.length - 2 &&
                window.innerWidth > 1024
            ) {
                // Não deixa padding-right para os últimos cards
                slideWidth = node.width * 3 - slider.current.scrollWidth;
            } else {
                if (window.innerWidth <= 768) {
                    slideWidth = node.width - node.x - node.width + 40;
                } else if (window.innerWidth <= 1024) {
                    slideWidth = -node.x + 150;
                } else {
                    slideWidth =
                        node.width * 2 + window.innerWidth / node.x - node.x;
                }
            }
            slider.current.style.transform = `translate3d(${slideWidth}px, 0px, 0px)`;
        });

        console.dir(slider.current.scrollWidth);

        setActiveNode(index);
    };

    const leftArrowEvent = () => {
        if (activeNode > 0) {
            const index = activeNode - 1;
            sliderEvent(slider.current.childNodes[index].firstChild, index);
        }
    };

    const rigthArrowEvent = () => {
        if (activeNode < data.data.length - 1) {
            const index = activeNode + 1;
            sliderEvent(slider.current.childNodes[index].firstChild, index);
        }
    };

    const slideElipseEvent = (index) => {
        sliderEvent(slider.current.childNodes[index].firstChild, index);
    };

    return (
        <section className="grid-section">
            {data ? (
                <div className="slider-wrapper">
                    <ul className="slider" ref={slider}>
                        {data.data.map((element, index) => {
                            return (
                                <li
                                    key={element.name}
                                    className={
                                        index === activeNode ? 'active' : ''
                                    }
                                >
                                    <img
                                        onClick={(event) =>
                                            sliderEvent(event.target, index)
                                        }
                                        src={
                                            process.env.PUBLIC_URL + element.img
                                        }
                                        alt=""
                                    />
                                    <div
                                        className={
                                            index === activeNode
                                                ? 'd-block'
                                                : ''
                                        }
                                    >
                                        <h3
                                            style={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {element.name}
                                        </h3>
                                        <p
                                            style={{
                                                color: '#818181',
                                                fontSize: '12px',
                                                overflow: 'hidden',
                                                maxWidth: '400px',
                                            }}
                                        >
                                            {element.descrition}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : null}
            {data.data ? (
                <div className="slide-buttons">
                    <div>
                        {data.data.map((node, index) => {
                            return (
                                <button
                                    key={node.name}
                                    className="btn-index-slide"
                                    onClick={() => slideElipseEvent(index)}
                                    style={
                                        activeNode === index
                                            ? {
                                                  backgroundImage: `url('${
                                                      process.env.PUBLIC_URL +
                                                      node.img
                                                  }')`,
                                              }
                                            : {
                                                  backgroundImage: `url('${
                                                      process.env.PUBLIC_URL +
                                                      node.img
                                                  }')`,
                                                  opacity: '.6',
                                              }
                                    }
                                ></button>
                            );
                        })}
                    </div>
                </div>
            ) : null}
            <div className="btn-controller-slider">
                <button
                    className="arrow-button flip"
                    onClick={() => leftArrowEvent()}
                >
                    <img src={arrow} alt="arrow" />
                </button>
                <button
                    className="arrow-button"
                    onClick={() => rigthArrowEvent()}
                >
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
        </section>
    );
};

export default Slider;
