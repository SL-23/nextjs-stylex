import stylex from "@stylexjs/stylex";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import React, { useState, useRef } from "react";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";

export default function Home() {
  return (
    <main {...stylex.props(styles.main)}>
      <div {...stylex.props(styles.container)}>
        {/* <ImageCarousel /> */}
        <HomeCarousel />
      </div>
    </main>
  );
}

const styles = stylex.create({
  container: {
    padding: 16,
    background: "white",
    borderRadius: 16,
    width: "100%",
    height: "400px",
    display: "flex",
    justifyContent: "center",
  },
  main: {
    display: "flex",
    justifyContent: "center",
  },
});
