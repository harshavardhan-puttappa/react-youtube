import React from "react";

const RelatedVideoItem = ({ video, onSelect, id }) => {
  return (
    <div className="row" style={{ cursor: "pointer" }} onClick={() => onSelect(video)}>
      <div className="col-lg-5">
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
      </div>
      <div className="col-lg-7">
        <p>
          <small>
            <b>Author: </b>
            {video.snippet.channelTitle}
          </small>
        </p>
        <p>
          <small>
            <b>Title:</b> {video.snippet.title}
          </small>
        </p>
      </div>
    </div>
  );
};

export default RelatedVideoItem;
