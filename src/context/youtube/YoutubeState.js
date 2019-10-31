import React, { useReducer } from "react";
import YoutubeContext from "./youtubeContext";
import YoutubeReducer from "./youtubeReducer";
import youtubeapi from "../../components/youtube/YoutubeApi";

import { HANDLE_FORM, ON_SELECT } from "../types";
const KEY = "AIzaSyBcRug-I2unlgiLfJIAIz-tIAhii_FwYZA";

const YoutubeState = props => {
  const initialState = {
    videosList: [],
    displayedVideo: null
  };
  const [state, dispatch] = useReducer(YoutubeReducer, initialState);

  // Search Youtube videos
  const handleForm = async searchData => {
    const youtubeResponse = await youtubeapi.get("/search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: KEY,
        q: searchData
      }
    });
    dispatch({
      type: HANDLE_FORM,
      payload: youtubeResponse.data.items
    });
  };

  const onSelect = video => {
    dispatch({
      type: ON_SELECT,
      payload: video
    });
  };

  return (
    <YoutubeContext.Provider
      value={{
        videosList: state.videosList,
        displayedVideo: state.displayedVideo,
        handleForm,
        onSelect
      }}>
      {props.children}
    </YoutubeContext.Provider>
  );
};
export default YoutubeState;
