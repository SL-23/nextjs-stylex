import stylex from "@stylexjs/stylex";
import { styles } from "./styles";

const Collections = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <p {...stylex.props(styles.title)}>Collections</p>
    </div>
  );
};
export default Collections;
