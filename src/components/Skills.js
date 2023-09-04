import React from 'react';

const Skills = ({ data }) => {
    const [toggleBtn, setToggleBtn] = React.useState(0);

    const flexSkill = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
    };

    const tagSkill = {
        background: '#796aaa',
        padding: '.7em',
        borderRadius: '.7em',
        color: 'white',
        fontWeight: '500',
    };

    return (
        <div className="content-grid">
            <div style={{ maxWidth: '600px' }}>
                <h1 className="h1-sub-title">Skills & Experience</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur a nihil nam aliquam consectetur possimus architecto
                    nobis voluptatem placeat, nostrum reiciendis deserunt
                    facilis, totam voluptas! Vero sit ipsa ipsum soluta.
                </p>

                <h2>My Skills</h2>
                <ul style={flexSkill}>
                    {data
                        ? data[0].skill.map((element) => {
                              return (
                                  <li style={tagSkill} key={element}>
                                      {element}
                                  </li>
                              );
                          })
                        : null}
                </ul>

                <h2>Tools</h2>

                <ul style={flexSkill}>
                    {data
                        ? data[0].tools.map((element) => {
                              return (
                                  <li style={tagSkill} key={element}>
                                      {element}
                                  </li>
                              );
                          })
                        : null}
                </ul>
            </div>
            <div>
                <div className="buttons-toggle">
                    <button
                        className={
                            toggleBtn === 0
                                ? 'btn-skill btn-actived'
                                : 'btn-skill'
                        }
                        onClick={() => setToggleBtn(0)}
                    >
                        Experience{' '}
                    </button>
                    <button
                        className={
                            toggleBtn === 1
                                ? 'btn-skill btn-actived'
                                : 'btn-skill'
                        }
                        onClick={() => setToggleBtn(1)}
                    >
                        Education
                    </button>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}
                >
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
