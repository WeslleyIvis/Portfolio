import React from 'react';

const Slider = ({ data }) => {
    let [slideWidth, setSlideWidth] = React.useState(null);
    const [activeNode, setActiveNode] = React.useState(1);
    const slider = React.useRef();

    const sliderEvent = (node, index) => {
        setSlideWidth(() => {
            slideWidth = node.width - node.x;
            slider.current.style.transform = `translate3d(${slideWidth}px, 0px, 0px)`;
        });

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
                                    onClick={(event) =>
                                        sliderEvent(event.target, index)
                                    }
                                    key={element.name}
                                    className={
                                        index === activeNode ? 'active' : ''
                                    }
                                >
                                    <img src={element.img} alt="" />
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
                    <img src={require('../img/arrow.png')} alt="arrow" />
                </button>
                <button
                    className="arrow-button"
                    onClick={() => rigthArrowEvent()}
                >
                    <img src={require('../img/arrow.png')} alt="arrow" />
                </button>
            </div>
        </section>
    );
};

export default Slider;
