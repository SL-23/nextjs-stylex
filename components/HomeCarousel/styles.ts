import stylex from "@stylexjs/stylex";

const imgSrcArr = [
  "https://i2.au.reastatic.net/1000x750-format=webp/da12b23865d29cacd2316c0846d07a16943953e0944da3200c6910d26cf8ace7/image.jpg",
  "https://i2.au.reastatic.net/1648x1248-resize,extend,r=33,g=40,b=46/e636cd86ffc84ff9de224b344d6b94162239e3e7d23891c0c67d126c80ca122b/image.jpg",
  "https://i2.au.reastatic.net/1648x1248-resize,extend,r=33,g=40,b=46/41317ea9a063f69bf8d00b259a6f3e9d3e178a65c52b00e4d52551917763ea24/image.jpg",
  "https://i2.au.reastatic.net/1648x1248-resize,extend,r=33,g=40,b=46/30f8d3d0f0715124a956246f89679345f488f06bba3322511c14cb13ac8fe0d1/image.jpg",
];

const one = stylex.keyframes({
  "0%": { opacity: 1 },
  "20%": { opacity: 0 },
});

const two = stylex.keyframes({
  "0%": { opacity: 0 },
  "20%": { opacity: 0 },
  "50%": { opacity: 1 },
  "60%": { opacity: 0 },
});

const three = stylex.keyframes({
  "0%": { opacity: 0 },
  "50%": { opacity: 0 },
  "60%": { opacity: 1 },
  "70%": { opacity: 0 },
});

const four = stylex.keyframes({
  "0%": { opacity: 0 },
  "70%": { opacity: 0 },
  "90%": { opacity: 1 },
});

const slideAnimations = [one, two, three, four];

const fontOneAnimation = stylex.keyframes({
  "0%": { opacity: 0 },
  "20%": { opacity: 1 },
  "50%": { opacity: 0 },
});
const fontTwoAnimation = stylex.keyframes({
  "50%": { opacity: 0 },
  "70%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const styles = stylex.create({
  root: {
    display: "flex",
    alignItems: "flex-end",
  },
  animationBase: {
    animationDuration: "15s",
    animationIterationCount: "infinite",
  },
  carouselContainer: {},

  slidesContainer: {
    display: "block",
  },
  slide: {
    position: "absolute",
    top: "10%",
    left: "10%",
    width: "600px",
    height: "300px",
    objectFit: "cover",
  },
  fontOne: {
    position: "absolute",
    left: "12%",
    top: "30%",
    zIndex: 1,
    color: "black",
    animationName: fontOneAnimation,
  },
  fontTwo: {
    position: "absolute",
    top: "40%",
    left: "12%",
    zIndex: 1,
    color: "black",
    animationName: fontTwoAnimation,
  },
  slideAnimation: (i) => ({
    animationName: slideAnimations[i],
  }),
  dot: {
    background: "black",
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "50%",
  },
  dotsContainer: {
    display: "flex",
    gap: "0.5rem",
    position: "absolute",
    right: "10%",
  },
});
