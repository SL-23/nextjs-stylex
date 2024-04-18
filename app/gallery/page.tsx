import { pageStyles } from "../sharePageStyles";
import stylex from "@stylexjs/stylex";

const GalleryPage = () => {
  return (
    <div {...stylex.props(pageStyles.subPageRoot, styles.root)}>
      <h2>GalleryPage</h2>
    </div>
  );
};

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

export default GalleryPage;
