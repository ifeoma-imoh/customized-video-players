import "cloudinary-video-player";
function interactivePlayer(cld) {
  var player = cld.videoPlayer("player", {
    bigPlayButton: true,
    interactionDisplay: {
      theme: {
        template: "shadowed",
      },
      layout: {
        enable: true,
        showAgain: true,
      },
    },
    controls: true,
    showJumpControls: true,
  });

  const sources = {
    top: "https://res.cloudinary.com/ifeomaimoh/video/upload/v1637162706/flower_left_zoom.mp4",
    middle:
      "https://res.cloudinary.com/ifeomaimoh/video/upload/v1637162660/flower_middle_zoom.mp4",
    bottom:
      "https://res.cloudinary.com/ifeomaimoh/video/upload/v1637162736/flower_right_zoom.mp4",
  };

  player.source("flower", {
    interactionAreas: {
      enable: true,
      template: "landscape",
      onClick: function (event) {
        var src = sources[event.item.id];
        event.zoom(src);
      },
    },
  });

  return;
}

export default interactivePlayer;
