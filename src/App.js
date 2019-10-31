import React, { useContext } from "react";
import "./App.css";
import Title from "./components/layouts/Title";
import InputForm from "./components/youtube/InputForm";
import MainVideoDetails from "./components/youtube/MainVideoDetails";
import RelatedVideosList from "./components/youtube/RelatedVideosList";
//import youtubeapi from "./components/youtube/YoutubeApi";
import YoutubeContext from "./context/youtube/youtubeContext";

//const KEY = "ANY_YOUTUBE_API_KEY";

const App = () => {
  const youtubeContext = useContext(YoutubeContext);
  const { videosList, displayedVideo, handleForm, onSelect } = youtubeContext;
  // state = {
  //   videosList: [],
  //   displayedVideo: null
  // };
  // handleForm = async searchData => {
  //   try {
  //     const youtubeResponse = await youtubeapi.get("/search", {
  //       params: {
  //         part: "snippet",
  //         maxResults: 10,
  //         key: KEY,
  //         q: searchData
  //       }
  //     });
  //     console.log(youtubeResponse.data.items);
  //     this.setState({ videosList: youtubeResponse.data.items, displayedVideo: youtubeResponse.data.items[0] });
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // onSelect = video => {
  //   this.setState({
  //     displayedVideo: video
  //   });
  // };

  //const { videosList, displayedVideo } = this.state;
  return (
    <div className="container">
      <Title />
      <InputForm handleForm={handleForm} />
      <div className="row">
        <div className="col-lg-8">
          <MainVideoDetails displayedVideo={displayedVideo} />
        </div>
        <div className="col-lg-4 ">
          <RelatedVideosList videosList={videosList} onSelect={onSelect} />
        </div>
      </div>
    </div>
  );
};

export default App;
