import React from "react";
import "cloudinary-video-player/dist/cld-video-player.min.css";
import VideoPlayers from "./components/videoPlayer";

export default function App() {
  return (
    <div className="App">
      <VideoPlayers />
    </div>
  );
}
