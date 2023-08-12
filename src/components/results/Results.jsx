import React from "react";
import { VideoCard, ChannelCard } from "../";
import "./style.css";

const Results = ({ data }) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="container">
          {data.map((item, index) =>
            item.type == "video" ? (
              <VideoCard data={item} key={index} />
            ) : item.type == "channel" ? (
              <ChannelCard data={item} key={index} />
            ) : (
              console.log("no components to render")
            )
          )}
        </div>
      ) : (
        <div className="empty">
          <h2>No videos found</h2>
        </div>
      )}
    </>
  );
};

export default Results;
