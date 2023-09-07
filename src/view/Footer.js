import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-content">
            <div className="footer-items ">
                <div>
                    <h3>Contact me</h3>
                    <p style={{ color: 'white' }}>weslley_reive@hotmail.com</p>
                </div>
                <div>
                    <h3>Redes Sociais</h3>
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/weslley-cutrim-2b829815a/"
                                target="black"
                            >
                                Linkdin
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/wesllley_reive/">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/WeslleyIvis"
                                target="black"
                            >
                                GitHub
                            </a>{' '}
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
