import React, { useEffect, useState } from 'react';
import { renderImage } from './Flip';
import { huan, xi } from '../../constant';
import './style.less';
import HorizontalHX from '../HorizontalHX';
const FlipImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    renderImage();
    setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div className={`flipImage ${isVisible && 'isVisible'}`}>
      <HorizontalHX />
      <section id="gallery" className="gallery">
        {/* 左边 */}
        {new Array(1).fill(1).map((item, index) => (
          <div key={`${item}${index}`} className="side horizontal flip-outer">
            <div className="flip-inner">
              <img className="front" />
              <img className="back" />
            </div>
          </div>
        ))}

        {/* 中间 */}
        <div className="center">
          {new Array(2).fill(2).map((item, index) => (
            <React.Fragment key={`${item}${index}`}>
              {index % 2 === 0 ? (
                <>
                  <div className="vertical top flip-outer">
                    <div className="flip-inner">
                      <img className="front" />
                      <img className="back" />
                    </div>
                  </div>
                  <div className="horizontal top flip-outer">
                    <div className="flip-inner">
                      <img className="front" />
                      <img className="back" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="horizontal bottom flip-outer">
                    <div className="flip-inner">
                      <img className="front" />
                      <img className="back" />
                    </div>
                  </div>
                  <div className="vertical bottom flip-outer">
                    <div className="flip-inner">
                      <img className="front" />
                      <img className="back" />
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 右边 */}
        {new Array(1).fill(3).map((item, index) => (
          <div key={`${item}${index}`} className="side horizontal flip-outer">
            <div className="flip-inner">
              <img className="front" />
              <img className="back" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FlipImage;
