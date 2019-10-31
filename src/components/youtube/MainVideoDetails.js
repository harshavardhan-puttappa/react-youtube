import React, { Fragment } from "react";
import Iframe from "react-iframe";

const MainVideoDetails = ({ displayedVideo }) => {
  if (!displayedVideo)
    return (
      <div>
        <br />
        <p className="lead">No Videos..Search for some!!</p>
      </div>
    );

  const url = `https://www.youtube.com/embed/${displayedVideo.id.videoId}`; //* YouTube source for the video

  return (
    <Fragment>
      <br />
      <div>
        <Iframe url={url} width="100%" height="450px" id="main" className="myClassname" display="initial" position="relative" />
      </div>
      <div className="card">
        <p>
          <strong>Author: </strong>
          {displayedVideo.snippet.channelTitle}
        </p>
        <p>
          <strong>Title: </strong> {displayedVideo.snippet.title}
        </p>
        {displayedVideo.snippet.description && (
          <p>
            <strong>Description:</strong> {displayedVideo.snippet.description}
          </p>
        )}
      </div>
    </Fragment>
  );
};

export default MainVideoDetails;
