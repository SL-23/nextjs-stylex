import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  button: {
    borderRadius: "50%",
    paddingTop: "3px",
    width: 48,
    height: 48,
    borderWidth: 0,
    cursor: "pointer",
    top: "50%",
  },
  lightStyle: {
    background: "transparent",
    color: "#222222",
    borderWidth: "1px",
    borderColor: colors.gray0,
    borderStyle: "solid",
  },
  darkStyle: {
    color: "white",
    background: "#222222",
  },
});
