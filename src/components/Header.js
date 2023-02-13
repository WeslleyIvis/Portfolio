import React from 'react';
import Navbar from './Navbar';

const header = () => {
  return (
    <header>
      <Navbar></Navbar>
      <section className="header-content bg-color-header">
        <div className="header-name">
          <h1>Weslley Cutrim</h1>
          <h4>Web Developer | UX/UI designer</h4>
          <button className="button-contact">Contact</button>
        </div>
        <div className="mask-img">
          <div className="linear-gradient"></div>
          <img src="" alt="" className="img-header"></img>
        </div>
      </section>
    </header>
  );
};

export default header;
