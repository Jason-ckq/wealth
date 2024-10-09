import React from 'react';
import texture from '../../assets/xi.png';
import './style.less';
const Texture = () => {
  return (
    <>
      {new Array(8).fill(texture).map((src, i) => (
        <img className={`texture texture${i + 1}`} key={i} src={src} />
      ))}
    </>
  );
};

export default Texture;
