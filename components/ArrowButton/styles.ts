import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  button: {
    borderRadius: "50%",
    paddingTop: "3px",
    width: 48,
    height: 48,
    border: 0,
    cursor: "pointer",
    top: "50%",
  },
  lightStyle: {
    background: "transparent",
    color: "#222222",
    border: "1px solid #5c5c5c",
  },
  darkStyle: {
    color: "white",
    background: "#222222",
  },
});
