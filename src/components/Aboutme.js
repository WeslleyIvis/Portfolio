import React from 'react';

const Aboutme = () => {
  function LinearGradientImage(props) {
    // Function que renderiza uma image com Linear gradient, com posição absoluta
    return (
      <div
        style={{
          position: 'absolute',
          width: props.width,
          height: props.height,
          top: props.top,
          left: props.left,
          zIndex: '2',
        }}
      >
        <div
          style={{
            backgroundImage: `url('${props.bgImage}')`,
            height: '100%',
            width: '100%',
            backgroundSize: 'cover',
            position: 'absolute',
            backgroundPosition: props.imgPosition,
          }}
        ></div>
        <div
          style={{
            backgroundImage:
              'radial-gradient(rgba(190, 196, 196, 0.123) 0%, transparent 0%, rgba(17, 17, 17, 1) 70%)',
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        ></div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }} className="about-content">
      <LinearGradientImage
        width="700px"
        height="600px"
        top="10%"
        left="10%"
        bgImage="https://64.media.tumblr.com/ebf790562c0d96efdd8915a978a73f9b/ff4a6b2f72fd28e0-8d/s1280x1920/aeddac6c26a384c4efa4a7de308582dd9ebc8b33.gif"
        imgPosition="50%"
      />
      <div className="about-text-position">
        <h3 className="h3">About Me</h3>
        <p className="text-color">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          eaque minus, sapiente error soluta architecto amet recusandae corporis
          tenetur laudantium! Iusto similique qui voluptas corporis, praesentium
          eum recusandae ab autem.
        </p>
        <p style={{ color: 'orange' }}>
          OBS: ESTE SITE ESTA EM DESENVOLVIMENTO
        </p>
        <ul>
          <li>
            <a href="f"> Linkdin</a>
            <a href="f"> GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutme;
