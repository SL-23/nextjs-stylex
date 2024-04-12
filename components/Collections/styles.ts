import { spacing, text } from "@/app/globalTokens.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  root: {
    height: "30rem",
    backgroundColor: colors.gray7,
  },
  title: {
    margin: "1rem",
    fontSize: text.h5,
    color: "white",
  },
});
