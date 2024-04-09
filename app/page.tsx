"use client";
import stylex from "@stylexjs/stylex";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import React, { useState, useRef } from "react";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import TopNavigation from "@/components/TopNavigation/TopNavigation";
import Collections from "@/components/Collections/Collections";
import CopyrightBanner from "@/components/Copyright/CopyrightBanner";
import ArrowButton from "@/components/ArrowButton/ArrowButton";
import { spacing } from "./globalTokens.stylex";

const Home = () => {
  const collectionRef = useRef<HTMLDivElement | null>(null);
  const goToCollections = () => {
    collectionRef && collectionRef.current?.scrollIntoView();
  };
  return (
    <main {...stylex.props(styles.main)}>
      <TopNavigation />
      <div {...stylex.props(styles.container)}>
        <HomeCarousel />
        <div {...stylex.props(styles.goCollection)}>
          <ArrowButton direction="down" onClick={goToCollections} />
          <p>See selected collections</p>
        </div>
      </div>
      <CopyrightBanner />
      <Collections ref={collectionRef} />
    </main>
  );
};

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
  goCollection: {
    position: "absolute",
    fontFamily: "Raleway, sans-serif",
    textDecoration: "underline 3px",
    fontWeight: 200,
    top: "25rem",
    right: spacing.md,
    display: "flex",
    alignItems: "center",
    color: "black",
    gap: spacing.xxs,
    zIndex: 3,
  },
});

export default Home;
