import React, { useEffect } from 'react';
import { huan, xi } from '../../constant';
import './style.less';
const VerticalHX = () => {
  return (
    <div className="vlogo">
      <img className="huan" src={huan} />
      <img className="xi" src={xi} />
    </div>
  );
};

export default VerticalHX;
