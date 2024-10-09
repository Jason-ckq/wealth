import React, { useEffect } from 'react';
import { minxi } from '../../constant';
import './style.less';
const Texture = () => {
  return (
    <>
      {new Array(8).fill(1).map((item, index) => (
        <img className={`xi 'xi${index + 1}'`} src={minxi} key={index} />
      ))}
    </>
  );
};

export default Texture;
