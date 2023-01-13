import React from 'react';
import Navbar from './Navbar';

const header = () => {
  return (
    <header className="content-w-size">
      <Navbar></Navbar>
      <section className="header-content bg-color-black">
        <div className="header-name">
          <h1 className="h1">Weslley Cutrim</h1>
          <p>Web Developer | UX/UI designer</p>
          <button className="button-contact">Contact</button>
        </div>
        <div className="mask-img">
          <div className="linear-gradient"></div>
          <div className="img-header"></div>
        </div>
      </section>
    </header>
  );
};

export default header;
