import React from 'react';

const Skills = () => {
    return (
        <div className="content-skills">
            <div>
                <h1>Skills & Experience</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur a nihil nam aliquam consectetur possimus architecto
                    nobis voluptatem placeat, nostrum reiciendis deserunt
                    facilis, totam voluptas! Vero sit ipsa ipsum soluta.
                </p>

                <h3>My Skills</h3>
                <ul>
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>CorelDraw</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                </ul>
            </div>
            <div>
                <div>
                    <button>A</button>
                    <button>B</button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div style={{ maxWidth: '150px' }}>
                        <h3>UI designer</h3>
                        <p>2022 - 2023</p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.{' '}
                        </p>
                    </div>
                    <div>
                        <h3>UI designer</h3>
                        <p>2022 - 2023</p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.{' '}
                        </p>
                    </div>
                    <div>
                        <h3>UI designer</h3>
                        <p>2022 - 2023</p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.{' '}
                        </p>
                    </div>
                    <div>
                        <h3>UI designer</h3>
                        <p>2022 - 2023</p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
