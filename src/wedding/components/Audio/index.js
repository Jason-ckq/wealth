import React, { useEffect, useRef, useState } from 'react';
import './style.less';
import { useSelector } from 'react-redux';

let audio = null,
  currentTrack = 0,
  playlist = [],
  playTrack;
const Audio = props => {
  const { songList } = props;

  const { isPlay } = useSelector(state => state.Wedding);

  playTrack = trackIndex => {
    if (trackIndex >= 0 && trackIndex < playlist.length) {
      currentTrack = trackIndex;
      audio.src = playlist[currentTrack].getAttribute('href');
      audio?.play();
    }
  };

  // 启动
  const playMusic = () => {
    // 获取歌曲清单
    playlist = document.getElementById('playlist').getElementsByTagName('a');
    currentTrack = 0;
    audio = document.getElementById('bgMusic');
    audio?.play();
    audio.addEventListener('ended', function() {
      // 播放下一首歌曲
      if (currentTrack === playlist.length - 1) {
        currentTrack = 0;
      } else {
        currentTrack++;
      }
      playTrack(currentTrack);
    });

    // 初始播放第一首歌曲
    playTrack(currentTrack);
  };

  const musicRef = useRef();

  useEffect(() => {
    if (musicRef && musicRef.current) {
      playMusic();
      document.querySelector('body').addEventListener(
        'click',
        function() {
          if (audio && !audio.paused) return;
          playTrack(currentTrack);
        },
        { once: true }
      );
    }
  }, [songList, musicRef]);

  return (
    <>
      <audio id="bgMusic" controls autoPlay />
      <ul id="playlist">
        {songList?.length ? (
          <li ref={musicRef}>
            {songList?.map((src, index) => (
              <a href={src} key={index}>
                歌曲{index + 1}
              </a>
            ))}
          </li>
        ) : null}
      </ul>
    </>
  );
};

export default Audio;
