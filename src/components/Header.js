import React from 'react';
import Navbar from './Navbar';

const header = () => {
  return (
    <header className="content-w-size">
      <Navbar></Navbar>
      <section className="header-content bg-color-black">
        <div className="header-name">
          <h1 className="h1">Weslley Cutrim</h1>
          <h4>Web Developer | UX/UI designer</h4>
          <button className="button-contact">Contact</button>
        </div>
        <div className="mask-img">
          <div className="linear-gradient"></div>
          <img
            src="https://i.imgur.com/8QUudmJ.gif"
            alt=""
            className="img-header"
          ></img>
        </div>
      </section>
    </header>
  );
};

export default header;
