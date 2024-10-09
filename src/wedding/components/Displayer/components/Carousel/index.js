import React, { useEffect, useState } from 'react';
import './style.less';
import loadImage from './carousel';
import { useSelector } from 'react-redux';
import { v_group } from '../../constant';
import VerticalHX from '../VertivalHX';

let timer = null,
  delay = 1 * 60 * 1000,
  loopIndex = 0;
const Carousel = () => {
  const { isPlay } = useSelector(state => state.Wedding);
  const [images, setImage] = useState(v_group[loopIndex]);
  // 启动
  const setup = function() {
    if (v_group.length <= 1) return;
    timer = setInterval(() => {
      loopIndex += 1;
      if (loopIndex >= v_group.length) loopIndex = 0;
      setImage(v_group[loopIndex]);
    }, delay);
  };

  useEffect(() => {
    if (isPlay) {
      setup();
      loadImage();
    }
    return () => {
      clearInterval(timer);
      timer = null;
    };
  }, [isPlay]);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div className={`carouselContent ${isVisible && 'isVisible'}`}>
      <VerticalHX />
      <div className="carousel">
        <div id="drag-container">
          <div id="spin-container">
            {images?.length ? (
              <>
                {images?.map((src, index) => (
                  <img src={src} key={index} />
                ))}
              </>
            ) : null}
          </div>
        </div>
        <div id="ground"></div>
      </div>
    </div>
  );
};

export default Carousel;
