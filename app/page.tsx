"use client";
import stylex from "@stylexjs/stylex";
import React, { useRef } from "react";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import Collections from "@/components/Collections/Collections";
import CopyrightBanner from "@/components/Copyright/CopyrightBanner";
import ArrowButton from "@/components/ArrowButton/ArrowButton";
import { spacing } from "./globalTokens.stylex";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  const collectionRef = useRef<HTMLDivElement | null>(null);
  const goToCollections = () => {
    collectionRef && collectionRef.current?.scrollIntoView();
  };
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.container)}>
        <HomeCarousel />
        <div {...stylex.props(styles.goCollection)}>
          <ArrowButton direction="down" onClick={goToCollections} />
          <p>See selected collections</p>
        </div>
      </div>
      <CopyrightBanner />
      <Collections ref={collectionRef} />
      <Footer />
    </div>
  );
};

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "40rem",
    display: "flex",
    justifyContent: "center",
  },
  goCollection: {
    position: "absolute",
    fontFamily: "Raleway, sans-serif",
    textDecoration: "underline 3px",
    fontWeight: 200,
    top: "36rem",
    right: spacing.md,
    display: "flex",
    alignItems: "center",
    gap: spacing.xxs,
    zIndex: 3,
  },
});

export default Home;
