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

  return (
    <section className="flex-content ">
      <div className="mobile-overflow w-content-flex-item">
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
                  <div className="projects-elements-img"></div>
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
          <div>
            <h3>{data.dados[content].name}</h3>
            <span>{data.dados[content].descri}</span>
          </div>
        </div>
      ) : (
        <div>ERROR</div>
      )}
    </section>
  );
};

export default MainProjects;
