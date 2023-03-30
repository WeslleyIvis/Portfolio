import React from 'react';
import Navbar from './Navbar';

const header = () => {
  return (
    <header>
      <Navbar></Navbar>
      <section className="header-content bg-color-header flex-content">
        <div className="header-name">
          <h1>Weslley Cutrim</h1>
          <p>Web Developer | UX/UI designer</p>
          <button className="button-contact">Contact</button>
        </div>
        <div className="bg-image">
          <img src={require('./comp-project/img/eu.jpg')} alt="" />
        </div>
      </section>
    </header>
  );
};

export default header;
