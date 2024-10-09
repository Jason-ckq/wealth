import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import { Provider } from 'react-redux';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
moment.locale('zh-cn');
import store from './redux/store';
import './style';

// 入口模块
import Wedding from './wedding';
// 容器
const container = document.querySelector('#app');
// 启动
const bootstrap = () => {
  try {
    createRoot(container).render(
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/wedding" />} />
              <Route path="/wedding/*" element={<Wedding />} />
            </Routes>
          </HashRouter>
        </Provider>
      </ConfigProvider>,
    );
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
