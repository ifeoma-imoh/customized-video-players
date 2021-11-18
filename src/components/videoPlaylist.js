import "cloudinary-video-player";

function videoPlaylist(cld) {
  const player = cld.videoPlayer("playlist", {
    controls: true,
    bigPlayButton: true,
    playlistWidget: {
      direction: "horizontal",
      total: 6,
    },
    showJumpControls: true,
  });

  player.playlistByTag("myTag", {
    autoAdvance: false,
    repeat: true,
  });

  return;
}

export default videoPlaylist;
