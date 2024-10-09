import React, { useState } from 'react';
import heart from './assets/heart.png';
import { v_group1 } from '../../constant';
import './style.less';
const [v_1, v_2, v_3, v_4, v_5, v_6, v_7] = v_group1;
import { useSelector } from 'react-redux';
import VerticalHX from '../VertivalHX';

const FlyHeart = () => {
  const { isVisible } = useSelector((state) => state.Wedding);

  const [images] = useState([
    [v_1, v_2, v_3, v_4],
    [v_5, v_6, v_7, v_1],
    [v_4, v_4, v_6, v_7],
  ]);

  return (
    <div className={`flyHeart ${isVisible && 'isVisible'}`}>
      <VerticalHX />
      <div className="box">
        <img src={heart} className="heart" />
        {images?.map((cols, index) => (
          <div className="col" key={index}>
            {cols.map((src, i) =>
              src ? (
                <img src={src} key={`${index}${i}`} className="colItem" />
              ) : (
                <div className="colItem" key={`${index}${i}`} />
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlyHeart;
