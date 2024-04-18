"use client";
import { styles } from "./styles";
import stylex from "@stylexjs/stylex";
import Bird from "../../public/bird.png";
import Mountain from "../../public/mountain.png";
import Eagle from "../../public/eagle.png";
import Image from "next/image";
import FanFlower from "../../public/IMG_3746.png";
import React, { useEffect, useRef, useState } from "react";

const imgSrcArr = [Mountain, FanFlower, Bird, Eagle];

const textItems = [
  <>Seeing Chinese art collections</>,
  <>
    Classic Chinese painting: <i>ink and color</i> on paper
  </>,
];

const CountDot = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    {...stylex.props(styles.dot, active && styles.activeDot)}
  />
);

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayText, setDisplayText] = useState([true, false]);

  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.slidesContainer)}>
        <div key={activeIndex} {...stylex.props(styles.slideAnimation)}>
          <Image
            ref={imageRef}
            key={`img-${activeIndex}`}
            alt={`img-${activeIndex}`}
            src={imgSrcArr[activeIndex]}
            {...stylex.props(styles.slide)}
          />
        </div>
        {displayText[Math.floor(activeIndex / 2)] && (
          <p {...stylex.props(styles.fontOne)}>
            {textItems[Math.floor(activeIndex / 2)]}
          </p>
        )}
      </div>
      <div {...stylex.props(styles.dotsContainer)}>
        {imgSrcArr.map((item, index) => (
          <CountDot
            onClick={() => {
              setActiveIndex(index);
            }}
            key={index}
            active={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
