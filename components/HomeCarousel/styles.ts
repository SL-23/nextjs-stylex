import { text } from "@/app/globalTokens.stylex";
import stylex from "@stylexjs/stylex";

const one = stylex.keyframes({
  "20%": { opacity: 0 },
});

const two = stylex.keyframes({
  "0%": { opacity: 0 },
  "20%": { opacity: 0 },
  "60%": { opacity: 0 },
});

const three = stylex.keyframes({
  "0%": { opacity: 0 },
  "50%": { opacity: 0 },
  "70%": { opacity: 0 },
});

const four = stylex.keyframes({
  "0%": { opacity: 0 },
  "70%": { opacity: 0 },
});

const slideAnimations = [one, two, three, four];

const fontOneAnimation = stylex.keyframes({
  "0%": { opacity: 0 },
  "20%": { opacity: 1 },
  "50%": { opacity: 0 },
  "100%": { opacity: 0 },
});
const fontTwoAnimation = stylex.keyframes({
  "0%": { opacity: 0 },
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
    top: "8rem",
    left: "10%",
    width: "600px",
    height: "300px",
    objectFit: "cover",
  },
  fontOne: {
    position: "absolute",
    left: "2%",
    top: "25%",
    fontSize: text.h1,
    zIndex: 1,
    color: "black",
    animationName: fontOneAnimation,
  },
  fontTwo: {
    position: "absolute",
    fontSize: text.h1,
    top: "30%",
    left: "2%",
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
    position: "relative",
    display: "flex",
    left: "16rem",
    gap: "0.5rem",
    bottom: "1rem",
  },
});
