import { spacing, text } from "@/app/globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: spacing.xxs,
    height: "20rem",
    backgroundColor: colors.gray2,
    padding: "10rem 4rem",
    color: "black",
  },
});
