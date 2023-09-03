import React from 'react';

const Slider = ({ data }) => {
    let [slideWidth, setSlideWidth] = React.useState(null);
    const [activeNode, setActiveNode] = React.useState(1);
    const slider = React.useRef();

    const sliderEvent = (node, index) => {
        console.dir(node);
        console.log(window.screen);
        console.log({ cliX: node.clientX, targetX: node.target.x });

        setSlideWidth(() => {
            slideWidth = node.target.width - node.target.x;
            slider.current.style.transform = `translate3d(${slideWidth}px, 0px, 0px)`;
            console.log(slideWidth);
        });

        setActiveNode(index);
    };

    return (
        <section className="grid-section">
            {data && data ? (
                <div className="slider-wrapper">
                    <ul className="slider" ref={slider}>
                        {data.map((element, index) => {
                            return (
                                <li
                                    onClick={(event) =>
                                        sliderEvent(event, index)
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
            {data ? (
                <div style={{ paddingBottom: '180px' }}>
                    <div>
                        {data.map((node) => {
                            return (
                                <span key={node.name} value="">
                                    O
                                </span>
                            );
                        })}
                        <button>SETA </button>
                        <button>SETA</button>
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default Slider;
