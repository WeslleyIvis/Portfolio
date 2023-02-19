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
          <img
            src="https://images.pexels.com/photos/6307824/pexels-photo-6307824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </section>
    </header>
  );
};

export default header;
