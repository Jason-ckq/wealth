import React, { useEffect } from 'react';
import * as $ from 'jquery';
import './style.less';
const Fire = () => {
  const Carousel = () => {
    let idIndex = 0;
    const bodyWidth = $('body')[0].offsetWidth;
    const bodyHeight = $('body')[0].offsetHeight;
    const colorArr1 = [
      '#c1232b',
      '#b5c334',
      '#fcce10',
      '#e87c25',
      '#fe8463',
      '#9bca63',
      '#fad860',
    ];
    const colorArr2 = [
      '#f3a43b',
      '#60c0dd',
      '#d7504b',
      '#c6e579',
      '#f4e001',
      '#f0805a',
      '#26c0c0',
      '#c1232b',
      '#b5c334',
      '#fcce10',
      '#e87c25',
      '#fe8463',
      '#9bca63',
      '#fad860',
    ];

    setInterval(function () {
      const left = randomNum(
        parseInt(bodyWidth * 0.1),
        parseInt(bodyWidth * 0.9),
      );
      const top = randomNum(
        parseInt(bodyHeight * 0.1),
        parseInt(bodyHeight / 3 - bodyHeight * 0.1),
      );

      drawFire(left, top);

      setTimeout(function () {
        drawFireworks(left, top);
        removeUl(idIndex);
      }, 1000);

      setChange(idIndex);
      removeFire(idIndex);

      idIndex++;
    }, 300);

    function drawFire(left, top) {
      let div = "<div id='" + idIndex + "_fire' class='fire'></div>";
      $('body').append(div);
      $('#' + idIndex + '_fire').css({ left: bodyWidth / 2 });
      $('#' + idIndex + '_fire').animate({ left: left, top: top }, 1000);
    }

    function drawFireworks(left, top) {
      let color1 = colorArr1[randomNum(7) - 1];
      let color2 = colorArr2[randomNum(7) - 1];
      let ul = '';
      let li1 = '';
      let li2 = '';

      for (let i = 0; i < 12; i++) {
        li1 +=
          "<li id='" +
          idIndex +
          '_1_' +
          i +
          "' class='li1' style='background:" +
          color1 +
          "'></li>";
        li2 +=
          "<li id='" +
          idIndex +
          '_2_' +
          i +
          "' class='li2' style='background:" +
          color2 +
          "'></li>";
      }
      ul = "<ul id='" + idIndex + "'>" + li1 + li2 + '</ul>';
      $('body').append(ul);

      for (let i = 0; i < 12; i++) {
        $('#' + idIndex + '_1_' + i).addClass('change1');
        $('#' + idIndex + '_2_' + i).addClass('change1');
      }

      $('#' + idIndex).css({ left: left, top: top });

      $('.li1').each(function (index) {
        $(this).css({
          transform: 'rotateZ(' + 30 * index + 'deg) translateX(20px)',
        });
      });
      $('.li2').each(function (index) {
        $(this).css({
          transform: 'rotateZ(' + 30 * index + 'deg) translateX(40px)',
        });
      });
    }

    function setChange(id) {
      setTimeout(function () {
        for (let i = 0; i < 12; i++) {
          $('#' + id + '_1_' + i).removeClass('change1');
          $('#' + id + '_2_' + i).removeClass('change1');
          $('#' + id + '_1_' + i).addClass('change2');
          $('#' + id + '_2_' + i).addClass('change2');
        }
      }, 1000);
    }

    function removeFire(id) {
      setTimeout(function () {
        $('#' + id + '_fire').remove();
      }, 1000);
    }

    function removeUl(id) {
      setTimeout(function () {
        $('#' + id).remove();
      }, 1000);
    }

    //生成从minNum到maxNum的随机数
    function randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
          return 0;
      }
    }
  };

  useEffect(() => {
    Carousel();
  }, []);

  return (
    <>
      <canvas id="canvas" />
    </>
  );
};

export default Fire;
