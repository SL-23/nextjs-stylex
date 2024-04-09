import { spacing, text } from "@/app/globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  root: {
    position: "fixed",
    top: 0,
    margin: "1rem",
    display: "flex",
    gap: spacing.md,
    transition: "all 0.5s",
    transitionTimingFunction: `cubic-bezier(0.645, 0.645, 0.355, 1)`,
  },

  hideRoot: {
    transform: `translateY(-200%)`,
  },
  section: {
    fontSize: text.h5,
    color: {
      default: "black",
      ":hover": "grey",
    },
    textDecoration: "none",
  },
});
