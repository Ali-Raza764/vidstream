import React from "react";
import { useParams } from "react-router-dom";


const VideoPlayer = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="main">

        <div className="player-container">

          <div className="player-wraper">
            <video className="video" autoplay border="none" src=""></video>
          </div>

        </div>

        <div className="related-videos">
          
          <div className="related-video-item">
            Related video item
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default VideoPlayer;
