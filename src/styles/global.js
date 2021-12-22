
const scrollBar = {
  "::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },

  /* Track */
  "::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },

  /* Handle */
  "::-webkit-scrollbar-thumb": {
    background: "#117FF2",
  },

  /* Handle on hover */
  "::-webkit-scrollbar-thumb:hover": {
    background: "#1684F7",
  },
};


const globalCss = {
  ...scrollBar,
  ":root": {
    "--swiper-navigation-color": "rgba(255, 255, 255, 0.575)"
  },
}

export default scrollBar;
