import React from 'react';
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core';

const Projects = () => {
  const [data, setData] = React.useState(null);
  const [sliceData, setSliceData] = React.useState(null);

  React.useEffect(() => {
    const octokit = new Octokit();

    octokit
      .request('GET /users/{username}/repos?sort?pushed', {
        username: 'WeslleyIvis',
      })
      .then((r) => setData(r))
      .catch((erro) => {
        setData(erro);
        console.error(erro);
      });
  }, []);

  React.useEffect(() => {
    if (data !== null) {
      data.status === 200
        ? setSliceData(data.data.slice(0, data.data.length))
        : setSliceData(null);
    }
  }, [data]);

  if (data === null) return null;
  return (
    <div>
      <section className="margin-component margin-top-project-api ">
        {data.status === 200 ? (
          <div>
            {sliceData ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0 10px',
                }}
              >
                {sliceData.map((element) => {
                  return (
                    <section className="project-block-api" key={element.id}>
                      <strong style={{ color: 'orange' }}>
                        {element.name.toUpperCase()}
                      </strong>
                      <span>
                        URL:{' '}
                        <a href={element.html_url} target="blank">
                          {element.html_url}
                        </a>
                      </span>
                      <span>
                        Data de criação:{' '}
                        {Intl.DateTimeFormat('pt-br').format(
                          new Date(element.created_at),
                        )}
                      </span>
                    </section>
                  );
                })}
              </div>
            ) : (
              <div>Not Found</div>
            )}
          </div>
        ) : (
          <div>Error</div>
        )}
      </section>
    </div>
  );
};

export default Projects;
