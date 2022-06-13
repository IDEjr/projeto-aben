import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

const PlayerStateEnum = {
  Started: -1,
  Ended: 0,
  Playing: 1,
  Paused: 2,
  Buffering: 3,
  Cued: 5,
}

const style = {
  overflow: "hidden",
  pb: "56.25%",
  position: "relative",
  height: 0,
  "& iframe": {
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
  }
}

const playerVars = {
  controls: 0,
  modestbranding: 1,
  rel: 0,
}

const YoutubeVideo = ({
  id
}) => {
  const [player, setPlayer] = useState(null);

  const onPlayerReady = useCallback(event => {
    event.target.playVideo();
    event.target.mute();
    event.target.seekTo(85);
  }, []);

  const onPlayerStateChange = useCallback(event => {
    if (event.data === PlayerStateEnum.Ended) {
      event.target.playVideo();
    }
  }, []);

  const loadVideo = useCallback(() => {
    setPlayer(new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      },
      playerVars,
    }));
  }, [id, onPlayerReady, onPlayerStateChange]);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";

      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      loadVideo();
    }
  }, [loadVideo]);

  return (
    <Box sx={style}>
      <div id={`youtube-player-${id}`} />
    </Box>
  )
}

YoutubeVideo.propTypes = {
  id: PropTypes.number.isRequired
};

export default YoutubeVideo;
