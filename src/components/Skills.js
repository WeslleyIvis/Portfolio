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
                    Tenho experiência abrangente com desenvolvimento Front end,
                    consumir API's, CSS responsivo, Técnicas de SEO, JS Vannila,
                    padrões de Single Page Aplication "SPA".
                    <br />
                    Tenho conhecimento técnico em UX / UI designer, com
                    wireframes de baixa e alta fildelidade, prototipagem,
                    padrões de tipografica, espaçamento e cores.
                    <br />
                    Conhecimento com Back end com criação de API, padrões de
                    banco de dados como "ORM", "ODM".
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
                                      <div>
                                          <p style={{ fontWeight: '400' }}>
                                              {element.company} | {element.date}
                                          </p>
                                      </div>

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
