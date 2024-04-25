import { text } from "@/app/globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";

const fontOneAnimation = stylex.keyframes({
  "0%": {
    opacity: 1,
  },
  "85%": {
    opacity: 1,
    filter: `blur(30px)`,
  },
  "100%": {
    opacity: 0,
  },
});

const fadeInAnimation = stylex.keyframes({
  "0%": {
    opacity: 0,
    visibility: "hidden",
  },
  "5%": {
    opacity: 1,
    filter: `blur(50px)`,
  },
  "8%": {
    opacity: 1,
  },
});

export const styles = stylex.create({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  slidesContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  slide: {
    position: "absolute",
    top: "10vh",
    left: "4rem",
    maxWidth: "70vw",
    height: "40vh",
    objectFit: "contain",
    alignContent: "flex-start",
  },
  fontOne: {
    position: "absolute",
    left: "2%",
    top: "20%",
    fontSize: text.h1,
    zIndex: 1,
    animationName: fontOneAnimation,
    animationDuration: "4s",
    animationFillMode: "forwards",
  },

  slideAnimation: {
    animationName: fadeInAnimation,
    animationDuration: "2s",
    animationFillMode: "forwards",
    animationIterationCount: 1,
  },

  dotsContainer: {
    position: "relative",
    display: "flex",
    right: "2rem",
    gap: "0.5rem",
    top: "85%",
    zIndex: 4,
  },
  activeDot: {
    background: colors.gray6,
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "50%",
  },
  dot: {
    background: "black",
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "50%",
    cursor: "pointer",
  },
});
