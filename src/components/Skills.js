import React from 'react';

const Skills = () => {
  const [data, setData] = React.useState(null);

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
    <section className="content-w-size skills-content padding-150">
      <div className="skills">
        <div className="title-skills">
          <h2>Skills</h2>
          <span>I have experience with these techonologies</span>
        </div>
        {data !== null ? (
          <div className="skills-items">
            {data.skills.map((element) => {
              return (
                <div key={element.name}>
                  {<h3>{element.name}</h3>}
                  <ul style={{ paddingLeft: '10px' }}>
                    {element.skill.map((element) => {
                      return <li key={element}>{element}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export default Skills;
