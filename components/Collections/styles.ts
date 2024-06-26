import { spacing, text } from "@/app/globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  root: {
    padding: spacing.sm,
    backgroundColor: colors.gray7,
  },
  title: {
    fontSize: text.h4,
    color: "white",
    marginBottom: spacing.sm,
  },
  itemsContainer: {
    display: "flex",
    flexDirection: {
      default: "row",
      "@media (max-width: 1024px)": "column",
    },
    gap: {
      default: "unset",
      "@media (max-width: 1024px)": spacing.lg,
    },
    justifyContent: "space-around",
  },
});
