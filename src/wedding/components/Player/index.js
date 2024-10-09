import React, { useEffect, useState, useRef } from 'react';
import './style.less';
import { useDispatch, useSelector } from 'react-redux';
import album from './assets/album.png';
import stick from './assets/stick.png';
import repeat from './assets/repeat.svg';
import prev from './assets/prev.svg';
import play from './assets/play.svg';
import pause from './assets/pause.svg';
import next from './assets/next.svg';
import songs from './assets/songs.svg';
import love from './assets/love.svg';
import download from './assets/download.svg';
import comment from './assets/comment.svg';
import other from './assets/other.svg';
import sing from './assets/sing.svg';
import { doChangePlay } from '../../WeddingSlice';
import Audio from '../Audio';
import { defaultSong } from '../../pages/Vertical/constant';

const Player = () => {
  const { isPlay } = useSelector(state => state.Wedding);

  const dispatch = useDispatch();
  const handleToggle = () => dispatch(doChangePlay(!isPlay));
  const lyric = useRef(null);
  const lyricList = useRef(null);
  const [isLoop, setIsLoop] = useState(false);

  // 判断是不是开始滚动
  const doLoopLyric = () => {
    if (lyric && lyric.current) {
      const { clientHeight } = lyric.current;
      if (lyricList.current?.clientHeight > clientHeight) {
        setIsLoop(true);
      } else {
        setIsLoop(false);
      }
    }
  };

  useEffect(() => {
    if (isPlay) {
      doLoopLyric();
    } else {
      setIsLoop(false);
    }
  }, [isPlay]);

  useEffect(() => {
    setTimeout(() => {
      !isPlay && dispatch(doChangePlay(true));
    }, 5 * 1000);
  }, []);

  const isMusic = [defaultSong];

  return (
    <div className="music">
      <div className="diskwrap">
        <img src={stick} className={`stick ${!isPlay ? 'stickPlay' : ''}`} />
        <div
          className="turntable"
          style={{ animationPlayState: isPlay ? 'running' : 'paused' }}
        >
          <div className="disk">
            <img src={album} className="album" />
          </div>
        </div>
      </div>
      {/* 内容区域 */}
      <div className="lyricWrap">
        <div className="name">新婚答谢宴</div>
        <div className="author">
          王玉珏<span>&</span>李智
        </div>
        <div className="date">2023.03.12</div>

        {false && (
          <div className="lyricContent" ref={lyric}>
            <div
              className="lyricPanel"
              style={{ animationPlayState: isLoop ? 'running' : 'paused' }}
            >
              <div className="lyricList" ref={lyricList}>
                <div className="lyric">WestLife</div>
                <div className="lyric">通常用来形容某个事物或情境变得轻松</div>
                <div className="lyric">顺利或下降趋势明显</div>
                <div className="lyric">
                  这个成语的寓意是比喻事物在发展过程中趋于顺利或顺风顺水
                </div>
                <div className="lyric">就像骑在驴背上下坡一样轻松。</div>
              </div>
              <div className="lyricList">
                <div className="lyric">WestLife</div>
                <div className="lyric">通常用来形容某个事物或情境变得轻松</div>
                <div className="lyric">顺利或下降趋势明显</div>
                <div className="lyric">
                  这个成语的寓意是比喻事物在发展过程中趋于顺利或顺风顺水
                </div>
                <div className="lyric">就像骑在驴背上下坡一样轻松。</div>
              </div>
            </div>
          </div>
        )}

        <div className="timeLine">
          <span className="time">05:20</span>
          <span className="progress">
            <div className={`done ${isPlay ? 'active' : null} `} />
          </span>
          <span className="time">13:14</span>
        </div>

        {/*  播放区域 */}
        <div className="playWrap">
          <img src={repeat} />
          <img src={prev} />
          {
            <img
              className={`${isPlay ? 'pause' : null} `}
              src={isPlay ? pause : play}
              onClick={handleToggle}
            />
          }
          <img src={next} />
          <img src={songs} />
        </div>
        {/* <div className="addition">
          <img src={love} />
          <img src={download} />
          <img src={sing} />
          <img src={comment} />
          <img src={other} />
        </div> */}
      </div>
      {/* 音频 */}
      {isMusic && isPlay && <Audio songList={isMusic} />}
    </div>
  );
};

export default Player;
