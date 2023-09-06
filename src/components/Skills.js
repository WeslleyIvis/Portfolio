import React from 'react';

const Skills = ({ data, exp, education }) => {
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
            <div
                style={
                    window.innerWidth <= 768
                        ? { maxWidth: '100%' }
                        : { maxWidth: '600px' }
                }
            >
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
                <div className="exp-ed">
                    {toggleBtn === 0 && exp
                        ? exp.map((element, index) => {
                              return (
                                  <div key={element.title + index}>
                                      <h2>{element.title}</h2>
                                      <p>
                                          <p style={{ fontWeight: '400' }}>
                                              {element.company} | {element.date}
                                          </p>
                                      </p>

                                      <p style={{ fontSize: '16px' }}>
                                          {element.descrition}
                                      </p>
                                  </div>
                              );
                          })
                        : education.map((element, index) => {
                              return (
                                  <div
                                      style={{ padding: '15px 0' }}
                                      key={element.title + index}
                                  >
                                      <h3
                                          style={{
                                              fontSize:
                                                  'clamp(18px, 5vw, 20px)',
                                              fontWeight: '400',
                                          }}
                                      >
                                          {element.title}
                                      </h3>
                                      <span>
                                          <span>{element.company}</span>
                                          <p>{element.date}</p>
                                      </span>
                                  </div>
                              );
                          })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
