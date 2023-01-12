import React from 'react';
import { Octokit } from 'https://cdn.skypack.dev/@octokit/core';

const Projects = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const octokit = new Octokit({
      headers: {
        authorization: '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',
      },
    });

    octokit
      .request('GET /users/{username}/repos?created', {
        username: 'WeslleyIvis',
      })
      .then((r) => setData(r));
  }, []);

  console.log(data);

  if (data === null) return null;
  return (
    <div style={{ color: 'white', height: '500px' }}>
      {data !== null ? data : <div>Error</div>}
    </div>
  );
};

export default Projects;
