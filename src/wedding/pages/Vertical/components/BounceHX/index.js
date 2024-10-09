import React from 'react';
import { useSelector } from 'react-redux';
import './style.less';
import { minHuan, minXi, maxHuan, maxXi, midHuan, midXi } from './constant';
const BounceHX = () => {
  const { isVisible } = useSelector((state) => state.Wedding);

  return (
    <div className={`bounceHX ${isVisible && 'isVisible'}`}>
      <img src={maxHuan} className="huan" />
      <img src={maxXi} className="xi" />
      {/* <img src={minHuan} className="huan" /> */}
      {/* <img src={minXi} className="xi" /> */}
    </div>
  );
};

export default BounceHX;
