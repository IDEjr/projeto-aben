import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";

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

// embedId: ecjuRyHdpmM

const YoutubeEmbed = ({
  embedId,
  autoPlay,
  mute
}) => (
  <Box sx={style}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=${autoPlay ? 1 : 0}&mute=${mute ? 1 : 0}&showinfo=0&controls=0&modestbranding=1&rel=0&frameborder=0&loop=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Box>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;