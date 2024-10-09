import React from 'react';
import Vertical from '../../Vertical';
import { v_groups } from './constant';

const TgzZy = () => {
  const couple = ['谭贵中', '朱莹'];
  const date = '2024.01.07';
  const fontSet = {
    fontFamily: 'MaShanZhengRegular',
    radius: 680,
    imgWidth: 240,
    imgHeight: 320,
  };
  return (
    <Vertical
      images={v_groups}
      party="回门答谢宴"
      fontSet={fontSet}
      couple={couple}
      date={date}
    />
  );
};

export default TgzZy;
