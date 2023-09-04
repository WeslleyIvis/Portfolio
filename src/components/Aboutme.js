import React from 'react';

const flexGap = {
    display: 'flex',
    gap: '25px',
    marginTop: '20px',
};

const arrowOk = {
    height: '24px',
    alignSelf: 'center',
};

const Aboutme = () => {
    return (
        <section className="content-grid">
            <div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 2fr',
                        paddingBottom: '45px',
                    }}
                >
                    <h1 className="year-number">2</h1>
                    <span
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: 'clamp(16px, 5vw, 30px)',
                            fontWeight: '300',
                            alignSelf: 'center',
                        }}
                    >
                        of working experience as a UI/UX Designer and Web
                        Developing
                    </span>
                </div>

                <div mobile="justify-self-c" style={{ maxWidth: '524px' }}>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur. Posuere nam eget
                        id rhoncus maecenas diam tellus. Nisl at nec viverra
                        tellus adipiscing ut convallis. Et nulla quam adipiscing
                        urna consequat nibh lectus nunc.
                    </p>

                    <ul className="text" style={{ paddingTop: '50px' }}>
                        <li style={flexGap}>
                            <img
                                style={arrowOk}
                                src={require('../img/verificar.png')}
                                alt=""
                            />{' '}
                            <p>Afordable Prices</p>
                        </li>
                        <li style={flexGap}>
                            {' '}
                            <img
                                style={arrowOk}
                                src={require('../img/verificar.png')}
                                alt=""
                            />{' '}
                            <p>Afordable Prices</p>
                        </li>
                        <li style={flexGap}>
                            {' '}
                            <img
                                style={arrowOk}
                                src={require('../img/verificar.png')}
                                alt=""
                            />
                            <p>Afordable Prices</p>
                        </li>
                    </ul>

                    <span
                        style={{
                            display: 'flex',
                            gap: '10px',
                            marginTop: '50px',
                        }}
                    >
                        <img
                            src={require('../img/correspondencia.png')}
                            alt=""
                        />{' '}
                        <p style={{ alignSelf: 'center' }}>
                            weslley_reive@hotmail.com
                        </p>
                    </span>
                </div>
            </div>

            <div>
                <div className="elipse-window"></div>
                <h2>Happy Clients</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Posuere nam eget id
                    rhoncus maecenas diam tellus.
                </p>
                <h2>Projects Completed</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Posuere nam eget id
                    rhoncus maecenas diam tellus.
                </p>
            </div>
        </section>
    );
};

export default Aboutme;
