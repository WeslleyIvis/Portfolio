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
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9100d753-02ac-4ed8-ac98-5e45d6deecad/derovqm-22d44156-0ff7-40ca-be3d-a9b3845fcc84.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMDBkNzUzLTAyYWMtNGVkOC1hYzk4LTVlNDVkNmRlZWNhZFwvZGVyb3ZxbS0yMmQ0NDE1Ni0wZmY3LTQwY2EtYmUzZC1hOWIzODQ1ZmNjODQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Je2BeQ9NjwnKs6N8TmZIlWKmUHHhCtcH6g_TWqFyFVM"
            alt=""
            className="img-header"
          ></img>
        </div>
      </section>
    </header>
  );
};

export default header;
