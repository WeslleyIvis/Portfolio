import React from 'react';
import Aboutme from './Aboutme';
import Projects from './comp-project/Project';

const Main = () => {
  return (
    <main className="content-w-size">
      <Aboutme />
      <Projects />
    </main>
  );
};

export default Main;
