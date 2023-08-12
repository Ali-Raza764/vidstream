import "./style.css";

const VideoCard = ({
  data: {
    channelThumbnail,
    channelTitle,
    publishedText,
    thumbnail,
    title,
    viewCount,
    lengthText,
    videoId
  },
}) => {
  function abbreviateNumber(number) {
    const suffixes = ["", "K", "M", "B", "T"];
    const num = parseInt(number.viewCount);
    if (Number.isNaN(num)) {
      console.log(num);
      return "0";
    }
    if (num < 1000) {
      return number;
    }
    const suffixIndex = Math.floor(Math.log10(num) / 3);
    let abbreviatedNumber = (num / Math.pow(1000, suffixIndex)).toFixed(1);
    if (abbreviatedNumber.endsWith(".0")) {
      abbreviatedNumber = abbreviatedNumber.slice(0, -2);
    }
    return abbreviatedNumber + suffixes[suffixIndex];
  }

  let views = abbreviateNumber({ viewCount });

  return (
    <>
      <div className="vid-item">
        <div className="vid-thumbnail">
          <img src={thumbnail[0].url} alt="" />
          {/* <span className="vid-duration">{lengthText}</span> */}
        </div>
        <div className="vid-details-container">
          <img
            src={channelThumbnail[0].url}
            className="vid-channel-img"
            alt="title"
          />
          <div className="vid-details">
            <div className="vid-name">{title}</div>

            <p className="vid-channel-name">{channelTitle}</p>
            <div className="vid-info">
              <span className="vid-count">{views} views</span>
              <span className="separator" />
              <p className="vid-time-ago">{publishedText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
