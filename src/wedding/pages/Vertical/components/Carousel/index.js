import React, { useEffect, useState } from 'react';
import { v_group1 } from '../../constant';
import './style.less';
import loadImage from './setup';

let timer = null,
  delay = 1 * 60 * 1000,
  loopIndex = 0;

const Carousel = (props) => {
  const { images, party = '', couple, date, fontSet = null } = props;
  const [curImg, setCurImg] = useState(images[loopIndex]);
  // 启动
  const setup = function () {
    if (images?.length <= 1) return;
    timer = setInterval(() => {
      loopIndex += 1;
      if (loopIndex >= images?.length) loopIndex = 0;
      setTimeout(() => {
        setCurImg(images[loopIndex]);
        loadImage();
      }, 200);
    }, delay);
  };

  useEffect(() => {
    setup();
    loadImage();
    return () => {
      clearInterval(timer);
      timer = null;
    };
  }, []);

  useEffect(() => {
    loadImage(fontSet?.radius, fontSet?.imgWidth, fontSet?.imgHeight);
  }, []);
  return (
    <div className="content">
      <div className="carousel">
        <div id="drag-container">
          <div id="spin-container">
            {curImg?.map((src, index) => (
              <img key={index} src={src} />
            ))}
          </div>
        </div>
        <div id="ground"></div>
      </div>
      <div className="word" style={{ fontFamily: fontSet?.fontFamily }}>
        {party?.split('')?.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
      <div className="happy">happy&ensp;wedding</div>
      <div className="summery">
        <div className="name">
          {couple[0]}&ensp;<span>&</span> {couple[1]}
        </div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
};

export default Carousel;
