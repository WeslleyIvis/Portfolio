import React from 'react';
//import Navbar from './Navbar';

const header = () => {
  return (
    <header>
      <section className="header-content flex-content">
        <div className="header-name">
          <h1>Weslley Cutrim</h1>
          <p>Web Developer | UX/UI designer</p>
          <div className="redes">
            <a
              href="https://github.com/WeslleyIvis"
              target={'_blank'}
              rel="noreferrer"
            >
              <img
                src={require('./comp-project/img/logos/githubwith.png')}
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/weslley-cutrim-2b829815a/"
              target={'_blank'}
              rel="noreferrer"
            >
              <img
                src={require('./comp-project/img/logos/linkedinwith.png')}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="bg-image">
          <img alt="" />
        </div>
      </section>
    </header>
  );
};

export default header;
