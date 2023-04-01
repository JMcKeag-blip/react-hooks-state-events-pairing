import video from "../data/video.js";
import ComButton from "./ComButton.js";
import VideoInfo from "./VideoInfo"
import Votes from "./Votes.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoInfo props={video}/>
      <Votes upvotes={video.upvotes} downvotes={video.downvotes}/>
      <ComButton props={video.comments}/>
    </div>
  );
}

export default App;
