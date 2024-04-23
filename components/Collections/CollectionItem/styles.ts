import { spacing, text } from "@/app/globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    gap: spacing.xs,
    fontSize: text.h5,
    transition: "all 0.5s",
    transitionTimingFunction: "ease-in",
  },
  hideItem: {
    visibility: "hidden",
    transform: `translateY(2rem)`,
  },
  img: {
    width: {
      default: "15rem",
      "@media (max-width: 1024px)": "70%",
    },
    height: "auto",
  },
});
