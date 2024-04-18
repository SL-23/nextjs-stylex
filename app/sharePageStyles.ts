import stylex from "@stylexjs/stylex";
import { spacing } from "./globalTokens.stylex";

export const pageStyles = stylex.create({
  subPageRoot: {
    marginTop: "4rem",
    padding: spacing.xs,
  },
});
