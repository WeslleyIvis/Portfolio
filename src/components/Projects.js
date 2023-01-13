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
        ? setSliceData(data.data.slice(0, 6))
        : setSliceData(null);
    }
  }, [data]);

  if (data === null) return null;

  return (
    <div
      style={{ color: 'white' }}
      className="bg-color-black content-h-size1200px"
    >
      <section className="margin-component section-project ">
        {' '}
        <h3 className="h3 line">Project</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          eaque eos doloremque.
        </p>
        {data.status === 200 ? (
          <div>
            {sliceData ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                }}
              >
                {sliceData.map((element) => {
                  return <div key={element.id}>{element.id}</div>;
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
