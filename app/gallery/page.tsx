"use client";
import stylex from "@stylexjs/stylex";

const Gallery = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <h2>Gallery</h2>
    </div>
  );
};

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

export default Gallery;
