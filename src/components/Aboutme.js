import verify from '../img/verificar.png';
import card from '../img/carta.png';

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
                        of working experience as a Web Developing and UI/UX
                        Designer
                    </span>
                </div>

                <div mobile="justify-self-c" style={{ maxWidth: '524px' }}>
                    <p className="text" style={{ fontSize: '18px' }}>
                        Sou apaixonado por aprender coisas novas, como aprender
                        uma nova tecnlogia ou aprender a tocar um estrumento
                        novo, são essas novas experiências que me fazem ser
                        alguém melhor a cada dia.
                    </p>

                    <ul
                        className="text"
                        style={
                            window.innerWidth > 768
                                ? { paddingTop: '50px' }
                                : { paddingTop: '20px' }
                        }
                    >
                        <li style={flexGap}>
                            <img style={arrowOk} src={verify} alt="" />{' '}
                            <p>Focado em meus objetivos.</p>
                        </li>
                        <li style={flexGap}>
                            {' '}
                            <img style={arrowOk} src={verify} alt="" />{' '}
                            <p>Aberto para novas experiências.</p>
                        </li>
                        <li style={flexGap}>
                            {' '}
                            <img style={arrowOk} src={verify} alt="" />
                            <p>Ser melhor que ontem.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'center',
                }}
            >
                <div className="elipse-window"></div>

                <span
                    style={{
                        display: 'flex',
                        gap: '10px',
                        margin: '0 auto',
                    }}
                >
                    <img src={card} alt="" />{' '}
                    <p style={{ alignSelf: 'center' }}>
                        weslley_reive@hotmail.com
                    </p>
                </span>
            </div>
        </section>
    );
};

export default Aboutme;
