import { styles } from "./styles";
import stylex from "@stylexjs/stylex";
import Bird from "../../public/bird.png";
import Flower from "../../public/flower.png";
import Mountain from "../../public/mountain.png";
import Eagle from "../../public/eagle.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const imgSrcArr = [Mountain, Flower, Bird, Eagle];

const textItems = (
  <>
    <p {...stylex.props(styles.slide, styles.fontOne)}>
      Seeing Chinese art collections
    </p>
    <p {...stylex.props(styles.slide, styles.fontTwo)}>
      Classic Chinese painting: <i>ink and color</i> on paper
    </p>
  </>
);

const carouselItems = (
  <>
    {imgSrcArr.map((img, i) => (
      <Image
        key={`img-${i}`}
        alt={`img-${i}`}
        src={img}
        {...stylex.props(styles.slide)}
      />
    ))}
  </>
);

const CountDot = ({ active }: { active: boolean }) => (
  <div {...stylex.props(styles.dot, active && styles.activeDot)} />
);

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemArr = React.Children.toArray(carouselItems.props.children);

  useEffect(() => {
    setInterval(() => {
      setActiveIndex(activeIndex > 3 ? 0 : activeIndex + 1);
    }, 6000);
  }, [activeIndex]);

  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.slidesContainer)}>
        <div key={activeIndex} {...stylex.props(styles.slideAnimation)}>
          {itemArr[activeIndex]}
        </div>
        <p {...stylex.props(styles.slide, styles.fontOne)}>
          Seeing Chinese art collections
        </p>
      </div>
      <div {...stylex.props(styles.dotsContainer)}>
        {itemArr.map((item, index) => (
          <CountDot key={index} active={index === activeIndex} />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
