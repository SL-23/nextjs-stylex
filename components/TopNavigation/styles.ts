import { spacing, text } from "@/app/globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  root: {
    margin: "1rem",
    display: "flex",
    gap: spacing.md,
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
