import React, { useEffect } from 'react';
import store from '../redux/store';
import reducer from './WeddingSlice.js';
import PlayPanel from './pages/PlayPanel/index.js';
import Vertical from './pages/Vertical/index.js';
import { Route, Routes } from 'react-router-dom';
import LxpByf from './pages/Entry/LxpByf/index.js';
import TgzZy from './pages/Entry/TgzZy/index.js';

store.injectReducer({ Wedding: reducer });

const Wedding = () => {
  useEffect(() => {
    document.documentElement.style.fontSize = '1.041667vw';
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PlayPanel />} />
      <Route path="lxp&byf" element={<LxpByf />} />
      <Route path="tgz&zy" element={<TgzZy />} />
    </Routes>
  );
};

export default Wedding;
