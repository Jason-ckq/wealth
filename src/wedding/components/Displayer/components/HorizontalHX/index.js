import React, { useEffect } from 'react';
import { huan, xi } from '../../constant';
import './style.less';
const HorizontalHX = () => {
  return (
    <div className="hlogo">
      <img className="huan" src={huan} />
      <img className="xi" src={xi} />
    </div>
  );
};

export default HorizontalHX;
