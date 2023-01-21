import React from 'react';

const Aboutme = () => {
  function handleScroll({ target }) {
    console.log(target);
  }

  return (
    <section
      className="grid-column-repeat-2 bg-color-black padding-150 content-w-size"
      onClick={(props) => handleScroll(props)}
    >
      <div className="grid-width grid-j-self-end">
        <h3>About me</h3>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ad
          voluptates architecto aperiam sunt non, nostrum, deserunt odio velit
          rerum perferendis reprehenderit nam soluta maiores recusandae dolorum.
          Doloremque, quam iure.
        </span>
        <div className="about-img-left"></div>
      </div>
      <div className="grid-width about-right">
        <div className="about-img-right"></div>
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
