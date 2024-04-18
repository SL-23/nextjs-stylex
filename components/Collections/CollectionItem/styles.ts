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
    fontSize: text.p,
  },
  img: {
    width: "15rem",
    height: "auto",
  },
});
