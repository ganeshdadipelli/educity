/* eslint-disable no-unused-vars */
import React from 'react';
import './VideoPlayer.css'
import video from '../../assets/WhatsApp Video 2023-10-13 at 17.42.43_a9e8749e.mp4'
const VideoPlayer = () => {
  return (
    <div className='videoplayer'>
      <video src={video} autoPlay muted controls />
    </div>
  );
}

export default VideoPlayer;
