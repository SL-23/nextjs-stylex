import stylex from "@stylexjs/stylex";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import React, { useState, useRef } from "react";

export default function Home() {
  return (
    <main {...stylex.props(styles.main)}>
      <div {...stylex.props(styles.container)}>
        <ImageCarousel />
      </div>
    </main>
  );
}

const styles = stylex.create({
  container: {
    padding: 16,
    background: "white",
    borderRadius: 16,
    width: "80%",
    display: "flex",
    justifyContent: "center",
  },
  main: {
    display: "flex",
    justifyContent: "center",
  },
});
