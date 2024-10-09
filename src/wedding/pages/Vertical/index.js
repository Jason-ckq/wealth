import React, { useEffect } from 'react';
import './style.less';
import { defaultSong } from './constant';
import Carousel from './components/Carousel';
import Texture from '../../components/Texture';
import Fire from './components/Fire';
import { useDispatch } from 'react-redux';
import { doChangeVisible } from '../../WeddingSlice';
import Audio from '../../components/Audio';
import BounceHX from './components/BounceHX';
import SphereImage from '../../components/SphereImage';
// 竖版

// fbb968
const Vertical = (props) => {
  const {
    images,
    party,
    couple,
    date,
    isMusic = [defaultSong],
    fontSet,
  } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(doChangeVisible()), 400);
  }, []);
  return (
    <div className="nativeWrap">
      <BounceHX />
      <Carousel
        images={images}
        fontSet={fontSet}
        party={party}
        couple={couple}
        date={date}
      />
      <Texture />
      <Fire />
      <SphereImage />
      {isMusic && <Audio songList={isMusic} />}
    </div>
  );
};

export default Vertical;
