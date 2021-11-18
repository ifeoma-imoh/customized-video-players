import React, { useEffect } from "react";
import { Cloudinary } from "cloudinary-core";
import interactivePlayer from "./interactive-player";
import videoPlaylist from "./videoPlaylist";

const cld = new Cloudinary({ cloud_name: "ifeomaimoh", secure: true });

const VideoPlayers = () => {
  useEffect(() => {
    interactivePlayer(cld);
    videoPlaylist(cld);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "800px",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="container"
    >
      <h2>Interactive Video Player</h2>
      <h3>Click on the video player to see the UI interactions.</h3>

      <div style={{ width: "600px", height: "400", margin: "20px" }}>
        <video
          id="player"
          controls
          muted
          className="cld-video-player cld-fluid cld-video-player-skin-dark"
        ></video>
      </div>
      <h2>Playlist Video Player</h2>
      <div style={{ width: "600px", height: "400" }} className="video-card">
        <video
          id="playlist"
          className="cld-video-player cld-fluid cld-video-player-skin-dark"
        ></video>
      </div>
    </div>
  );
};

export default VideoPlayers;
