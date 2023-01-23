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
            src="https://cdna.artstation.com/p/assets/images/images/036/271/504/original/bizarre-beasties-desert.gif?1617197298"
            alt=""
            className="img-header"
          ></img>
        </div>
      </section>
    </header>
  );
};

export default header;
