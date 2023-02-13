import React from 'react';

const Aboutme = () => {
  function handleScroll({ target }) {
    console.log(target);
  }

  return (
    <section
      className="flex-content about-content padding-150 content-w-size"
      onClick={(props) => handleScroll(props)}
    >
      <div className="w-content-flex-item">
        <h2>Sobre mim</h2>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ad
          voluptates architecto aperiam sunt non, nostrum, deserunt odio velit
          rerum perferendis reprehenderit nam soluta maiores recusandae dolorum.
          Doloremque, quam iure.
        </span>
        <div className="about-img-left">
          <img
            src="https://images.pexels.com/photos/11887826/pexels-photo-11887826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="w-content-flex-item about-right">
        <div className="about-img-right">
          <img
            src="https://images.pexels.com/photos/15169963/pexels-photo-15169963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          aperiam rerum totam consequatur quisquam, architecto eaque quia maxime
          illo voluptate dignissimos, amet explicabo, eius aspernatur quam?
          Quisquam illum asperiores id!
        </span>
      </div>
    </section>
  );
};

export default Aboutme;
