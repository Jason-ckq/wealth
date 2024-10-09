import { isArray, isString } from 'lodash';

// 生成随机的 R、G、B 分量颜色值
export const randomHexColor = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // 将 R、G、B 分量转换为16进制字符串
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
};

/**
 * 节流函数
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
// export const throttle = (fn, delay = 1000) => {
//   let prev = +new Date();
//   return function () {
//     let now = +new Date();
//     if (now - prev >= delay) {
//       fn.call(null, ...arguments);
//       prev = now;
//     }
//   };
// };

export const throttle = (fn, delay = 1000) => {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.call(null, ...arguments);
      clearTimeout(timer);
      timer = null;
    }, delay);
  };
};

//  去除对象中的空值和未定义值
export const GetUsefulParams = (formParams) => {
  const filterParams = {};
  Object.keys(formParams).length &&
    Object.keys(formParams).forEach((key) => {
      const value = formParams[key];
      if (value !== '' && value !== undefined && value !== null) {
        if (typeof value === 'string') {
          if (value.trim() !== '') {
            filterParams[key] = value.trim();
          }
        } else if (isArray(value)) {
          const newVal = value
            .map((item) => {
              if (isString(item)) {
                return item.trim();
              }
              return item;
            })
            .filter((item) => item !== '');
          filterParams[key] = newVal;
        } else {
          filterParams[key] = value;
        }
      }
    });
  return filterParams;
};
