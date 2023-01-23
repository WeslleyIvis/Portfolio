import React from 'react';

const projects = [
  {
    name: 'Macro',
    descri:
      ' Fugiat, quaerat! Odit sit recusandae magnam corrupti itaque praesentium, natus unde provident?',
  },
  {
    name: 'Kirby Game',
    descri:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facere nam iusto ipsam hic, itaque repudiandae mollitia magnam, molestias aspernatur quaerat saepe sint nobis provident, iure aut ipsum perferendis impedit!',
  },
  {
    name: 'Aniamis Fantasticos',
    descri:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam itaque maxime nesciunt architecto officiis quod perferendis placeat enim, dolor blanditiis? Sunt fuga vel molestiae quis non cumque tenetur natus.',
  },
  {
    name: 'Calculator',
    descri:
      '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quia ipsum sequi blanditiis! Ut laudantium placeat quam, dolores tempore labore, laboriosam sequi veritatis architecto vel esse alias eligendi soluta consequatur?',
  },
  {
    name: 'Grid-Layout',
    descri:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam molestias porro consectetur officiis. Ab aperiam commodi tempore placeat, obcaecati soluta aspernatur rerum culpa sed ipsam quam suscipit nemo dignissimos!',
  },
];

const MainProjects = () => {
  const teste = React.useRef();
  const [content, setContent] = React.useState(0);

  return (
    <section className="flex-content ">
      <div className="mobile-overflow w-content-flex-item">
        <h3>Project</h3>
        <div className="projects">
          {projects.map((element, index) => {
            return (
              <div
                onClick={() => setContent(index)}
                key={element.name}
                className="project-elements"
              >
                <div className="projects-elements-img"></div>
                <div className="project-text-width">
                  <h4>{element.name}</h4>
                  <span className="max-height-span span">{element.descri}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-content-flex-item" ref={teste}>
        <h3>{projects[content].name}</h3>
        <p>{projects[content].descri}</p>
        <div className="project-img-right"></div>
        <div>
          <h4>{projects[content].name}</h4>
          <span>{projects[content].descri}</span>
        </div>
      </div>
    </section>
  );
};

export default MainProjects;
