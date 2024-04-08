import stylex from "@stylexjs/stylex";
import { styles } from "./styles";
import React from "react";

const Collections = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <div ref={ref} {...stylex.props(styles.root)}>
      <p {...stylex.props(styles.title)}>Collections</p>
    </div>
  );
});
export default Collections;
