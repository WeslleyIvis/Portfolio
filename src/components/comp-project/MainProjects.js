import React from 'react';

const MainProjects = () => {
  const teste = React.useRef();
  const [data, setData] = React.useState(null);
  const [content, setContent] = React.useState(0);

  const getData = (setState) => {
    fetch('data.json', {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((r) => r.json())
      .then((json) => setState(json));
  };

  React.useEffect(() => {
    getData(setData);
  }, []);

  console.log(data);

  return (
    <section className="flex-content content-w-size">
      <div className="project-overflow">
        <h2>Project</h2>
        <div className="projects">
          {data !== null || undefined ? (
            data.dados.map((element, index) => {
              return (
                <div
                  onClick={() => setContent(index)}
                  key={element.name}
                  className="project-elements"
                >
                  <div className="projects-elements-img">
                    <img src={require(`${element.logo}`)} alt="" />
                  </div>
                  <div className="project-text-width">
                    <h3>{element.name}</h3>
                    <span className="max-height-span span">
                      {element.descri}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Error</div>
          )}
        </div>
      </div>

      {data !== null || undefined ? (
        <div className="w-content-flex-item" ref={teste}>
          <h2>{data.dados[content].name}</h2>
          <p>{data.dados[content].descri}</p>
          <div className="project-img-right"></div>

          <div className="skills-project">
            <h3>Skills do projeto</h3>
            <ul>
              {data.dados[content].tec.map((element) => {
                return <li key={element}>{element}</li>;
              })}
            </ul>
            <div className="img-routes">
              <a
                target="_blank"
                rel="noreferrer"
                href={data.dados[content].url_git}
              >
                <img src={require('./img/logos/github.png')} alt="github" />
              </a>
              {data.dados[content].git_pages ? (
                <a href={data.dados[content].git_pages}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/619/619054.png"
                    alt="foguete"
                  />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div>ERROR</div>
      )}
    </section>
  );
};

export default MainProjects;
