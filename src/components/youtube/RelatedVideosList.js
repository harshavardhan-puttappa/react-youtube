import React from "react";
import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideosList = ({ videosList, onSelect }) => {
  return (
    <div>
    <br/>
      {videosList.map((video, id) => (
        <RelatedVideoItem key={id} video={video} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default RelatedVideosList;
