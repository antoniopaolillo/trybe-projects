import React from 'react';
import YouTube from 'react-youtube';
import '../styles/DetailsVideo.css';
import findData from '../services/findData';

function DetailsVideo() {
  const firstData = JSON.parse(localStorage.foodData);
  const data = findData(firstData);
  if (data.strYoutube) {
    const id = data.strYoutube.split('=')[1];
    return (
      <div>
        <p className="instructions-title">Video</p>
        <YouTube className="video-details" videoId={id} />
      </div>
    );
  }
  return <div>No video</div>;
}

export default DetailsVideo;
