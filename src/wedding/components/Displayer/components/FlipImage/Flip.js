// https://codepen.io/DanGasson/pen/eYGgxMx

import { v_group1, v_group2, h_group1, h_group2 } from '../../constant';

export const renderImage = function () {
  const delay = 2500; //演示
  const gridItems = Array.prototype.slice.call(
    document.getElementsByClassName('flip-inner'),
  );
  // 存储图片信息
  const activeImages = [];
  // 竖版照片
  const vImages = [...v_group1, ...v_group2];
  // 横版照片
  const hImages = [...h_group1, ...h_group2];
  let flipImagesFunc;

  const initImages = () => {
    // 获取竖版的
    const verticalElements = gridItems.filter((gi) =>
      gi.parentElement.classList.contains('vertical'),
    );
    // 获取水平版的
    const horizontalElements = gridItems.filter((gi) =>
      gi.parentElement.classList.contains('horizontal'),
    );

    // 竖版的图片整理
    const vImageCopy = [...vImages];

    for (let el of verticalElements) {
      for (let img of el.getElementsByTagName('img')) {
        const currentUrl = getRandomArrayItem(vImageCopy);
        const index = vImageCopy.indexOf(currentUrl);
        img.src = currentUrl;
        vImageCopy.splice(index, 1); //删除已经用了的图片
        activeImages.push(currentUrl); // 存储当前要使用的图片
      }
    }

    // 水平版的图片整理
    const hImageCopy = [...hImages];
    for (let el of horizontalElements) {
      for (let img of el.getElementsByTagName('img')) {
        const currentUrl = getRandomArrayItem(hImageCopy);
        const index = hImageCopy.indexOf(currentUrl);
        img.src = currentUrl;
        hImageCopy.splice(index, 1);
        activeImages.push(currentUrl);
      }
    }
  };

  const flipImage = () => {
    // 获取随机渲染Dom信息
    let gridItem = getRandomArrayItem(gridItems);

    var imgs;
    if (gridItem.dataset.rotated === 'true') {
      gridItem.style.transform = 'none';
      gridItem.dataset.rotated = 'false';
      imgs = gridItem.getElementsByClassName('back');
    } else {
      gridItem.style.transform = 'rotateY(180deg)';
      gridItem.dataset.rotated = 'true';
      imgs = gridItem.getElementsByClassName('front');
    }

    const isVertical = gridItem.parentNode.classList.contains('vertical');
    const newUrl = getNewBird(isVertical); //获取新的图片地址
    const oldUrl = '/.' + imgs[0].src?.slice(imgs[0].src?.indexOf('/assets/')); // 获取上一次的图片信息
    imgs[0].src = newUrl;
    const prevIndex = activeImages.indexOf(oldUrl);
    if (prevIndex !== -1) activeImages[prevIndex] = newUrl;
  };

  // 横板、竖版图片筛选
  const getNewBird = (isVertical) => {
    let images = isVertical ? vImages : hImages;
    const filterImage = images.filter((i) => !activeImages.includes(i));
    return getRandomArrayItem(filterImage); // 随机获取没有激活的图片
  };

  // 获取随机图片信息
  const getRandomArrayItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      window.clearInterval(flipImagesFunc);
    } else {
      flipImagesFunc = window.setInterval(flipImage, delay);
    }
  });

  initImages();

  flipImagesFunc = setInterval(flipImage, delay);
};
