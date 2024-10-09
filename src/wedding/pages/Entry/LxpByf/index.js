import React, { useEffect } from 'react';
import Vertical from '../../Vertical';
import { v_groups, song } from './constant';

const LxpByf = () => {
  const couple = ['李旭鹏', '白彦飞'];
  const date = '2024.01.13';
  const songs = [song];
  return (
    <Vertical
      images={v_groups}
      party="新婚答谢宴"
      couple={couple}
      date={date}
      isMusic={songs}
    />
  );
};

export default LxpByf;
