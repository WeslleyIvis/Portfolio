import React from 'react';
import MainProjects from './MainProjects';
import ReposAPI from './ReposAPI';

const Project = () => {
  const [project, setProject] = React.useState(false);
  const [buttonText, setButtonText] = React.useState('Projects');

  function toggleProject() {
    project
      ? setButtonText('Git all Repositories')
      : setButtonText('Main Projects');

    setProject(!project);
  }

  return (
    <div className="bg-color-black padding-top-150">
      <div>
        <h3 className="h3 line">Project</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          eaque eos doloremque.
        </p>
        <button onClick={toggleProject} className="button-contact">
          {buttonText}
        </button>

        <div>
          {project === false ? <MainProjects data={1} /> : <ReposAPI />}
        </div>
      </div>
    </div>
  );
};

export default Project;
