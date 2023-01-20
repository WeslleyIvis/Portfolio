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
      ' Fugiat, quaerat! Odit sit recusandae magnam corrupti itaque praesentium, natus unde provident?',
  },
  {
    name: 'Aniamis Fantasticos',
    descri:
      ' Fugiat, quaerat! Odit sit recusandae magnam corrupti itaque praesentium, natus unde provident?',
  },
  {
    name: 'Calculator',
    descri:
      ' Fugiat, quaerat! Odit sit recusandae magnam corrupti itaque praesentium, natus unde provident?',
  },
  {
    name: 'Grid-Layout',
    descri:
      ' Fugiat, quaerat! Odit sit recusandae magnam corrupti itaque praesentium, natus unde provident?',
  },
];

const MainProjects = () => {
  const [teste, setTeste] = React.useState(0);

  function somar(index) {
    setTeste(index);
    console.log(teste);
  }

  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div>
        <h3>
          The <br></br> Project
        </h3>
        <div>
          {projects.map((element, index) => {
            return (
              <div
                onClick={() => somar(index)}
                key={element.name}
                style={{
                  display: 'flex',
                  gap: '35px',
                  marginBottom: '20px',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    background: 'lightblue',
                  }}
                ></div>
                <div style={{ width: '300px' }}>
                  <h3>{element.name}</h3>
                  <span>{element.descri}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>{projects[teste].name}</h3>
      </div>
    </section>
  );
};

export default MainProjects;
