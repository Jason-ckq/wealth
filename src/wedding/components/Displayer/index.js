import React, { useEffect, useState } from 'react';
import Carousel from './components/Carousel';
// import FlyHeart from './components/FlyHeart';
import FlipImage from './components/FlipImage';
import './style.less';

let timer,
  delay = 2 * 60 * 1000;
const Displayer = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    timer = setTimeout(function loop() {
      setDisplay(prev => !prev);
      timer = setTimeout(loop, delay);
    }, delay);
    return () => {
      clearTimeout(timer);
      timer = null;
    };
  }, []);

  return <>{display ? <Carousel /> : <FlipImage />}</>;
};

export default Displayer;
