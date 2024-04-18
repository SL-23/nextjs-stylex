import { spacing, text } from "@/app/globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  root: {
    background: colors.gray6,
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontSize: text.p,
    justifyContent: "space-between",
    padding: spacing.sm,
    gap: spacing.sm,
  },

  link: {
    textDecoration: "none",
    color: {
      default: "white",
      ":hover": colors.gray2,
    },
  },
  copyright: {
    color: colors.gray3,
    alignSelf: "flex-end",
    fontSize: text.xs,
    fontFamily: "Raleway, sans-serif",
  },
  icons: {
    marginTop: spacing.xs,
    display: "flex",
    justifyContent: "center",
    gap: spacing.xs,
  },
});
