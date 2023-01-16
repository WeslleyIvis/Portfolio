import React from 'react';
import macroImg from './img/macro.png';
import kirbyImg from './img/kirbyGame.png';
import calcImg from './img/calculator.png';
import sitejsImg from './img/sitejs.png';
import gridImg from './img/grid.png';

const element = [
  {
    title: 'Macro',
    img: macroImg,
    lang: ['Python'],
    link: 'https://github.com/WeslleyIvis/Macro',
  },
  {
    title: 'Kirby Game',
    img: kirbyImg,
    lang: ['JS', 'P5', 'CSS', 'HTML'],
    link: 'https://weslleyivis.github.io/P5_Game/',
  },
  {
    title: 'Calculator',
    img: calcImg,
    lang: ['JS', 'CSS', 'HTML'],
    link: 'https://weslleyivis.github.io/Calculator/',
  },
  {
    title: 'Site js',
    img: sitejsImg,
    lang: ['JS', 'HTML', 'CSS'],
    link: 'https://weslleyivis.github.io/SiteJS/',
  },
  {
    title: 'Grid-Layout',
    img: gridImg,
    lang: ['HTML', 'CSS'],
    link: 'https://weslleyivis.github.io/Grid-Layout/',
  },
];

const MainProjects = () => {
  return (
    <div className="main-projects">
      {element.map((element) => {
        return (
          <div key={element.title} className="bg-color-project">
            <div>
              {' '}
              <a href={element.link} target="blank">
                {' '}
                <img src={element.img} alt={element.title} />
              </a>
            </div>
            <div className="descrition-main-project">
              <h4 className="title-main-project">{element.title}</h4>
              <span>
                {element.lang.map((lang) => {
                  return <span key={lang}> | {lang}</span>;
                })}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainProjects;
