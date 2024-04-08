import stylex from "@stylexjs/stylex";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import React, { useState, useRef } from "react";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import TopNavigation from "@/components/TopNavigation/TopNavigation";

export default function Home() {
  return (
    <main {...stylex.props(styles.main)}>
      <TopNavigation />
      <div {...stylex.props(styles.container)}>
        <HomeCarousel />
      </div>
    </main>
  );
}

const styles = stylex.create({
  container: {
    width: "100%",
    height: "480px",
    display: "flex",
    justifyContent: "center",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});
