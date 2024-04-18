import { spacing, text } from "@/app/globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: spacing.xxs,
    backgroundColor: colors.gray2,
    padding: "6rem 4rem",
  },
});
