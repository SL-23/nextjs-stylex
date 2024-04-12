import { text } from "@/app/globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";

const fontOneAnimation = stylex.keyframes({
  "0%": {
    opacity: 0,
  },
  "2%": {
    opacity: 1,
    filter: `blur(30px)`,
  },
  "5%": {
    opacity: 1,
  },
  "10%": {
    opacity: 0,
  },
});

const fadeInAnimation = stylex.keyframes({
  "0%": {
    opacity: 0,
  },
  "10%": {
    opacity: 1,
    filter: `blur(50px)`,
  },
  "20%": {
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
    top: "8rem",
    left: "4rem",
    width: "600px",
    height: "350px",
    objectFit: "cover",
  },
  fontOne: {
    position: "absolute",
    left: "2%",
    top: "25%",
    fontSize: text.h1,
    zIndex: 1,
    animationName: fontOneAnimation,
    animationDuration: "6s",
    animationFillMode: "forwards",
    animationIterationCount: 1,
  },
  fontTwo: {
    position: "absolute",
    fontSize: text.h1,
    top: "30%",
    left: "2%",
    zIndex: 1,

    animationName: fadeInAnimation,
    animationFillMode: "forwards",
    animationIterationCount: 1,
    animationDelay: "2s",
  },
  slideAnimation: {
    animationName: fadeInAnimation,
    animationDuration: "6s",
    animationFillMode: "forwards",
    animationIterationCount: 1,
  },

  dotsContainer: {
    position: "relative",
    display: "flex",
    right: "2rem",
    gap: "0.5rem",
    top: "90%",
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
  },
});
