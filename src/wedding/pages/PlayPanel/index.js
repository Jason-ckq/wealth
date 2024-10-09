import React from 'react';
import './style.less';
import Player from '../../components/Player';
import Displayer from '../../components/Displayer';
import Bubble from '../../components/Bubble';
import SphereImage from '../../components/SphereImage';
import Texture from '../../components/Texture';
const PlayPanel = () => {
  return (
    <div className="wrap">
      <Player />
      <Displayer />
      <Bubble />
      <SphereImage />
      <Texture />
    </div>
  );
};

export default PlayPanel;
