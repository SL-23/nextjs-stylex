import { styles } from "./styles";
import stylex from "@stylexjs/stylex";
import Bird from "../../public/bird.png";
import Flower from "../../public/flower.png";
import Mountain from "../../public/mountain.png";
import Eagle from "../../public/eagle.png";
import Image from "next/image";

const imgSrcArr = [Mountain, Flower, Bird, Eagle];

const CountDot = () => <div {...stylex.props(styles.dot)} />;

const HomeCarousel = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.carouselContainer)}>
        <div {...stylex.props(styles.slidesContainer)}>
          {imgSrcArr.map((img, i) => (
            <Image
              key={`img-${i}`}
              alt={`img-${i}`}
              src={img}
              {...stylex.props(
                styles.slide,
                styles.animationBase,
                styles.slideAnimation(i)
              )}
            />
          ))}
        </div>
        <div {...stylex.props(styles.fontOne, styles.animationBase)}>
          <p>Seeing Chinese art collections</p>
        </div>
        <div {...stylex.props(styles.fontTwo, styles.animationBase)}>
          <p>Classic Chinese painting: ink and color on paper</p>
        </div>
      </div>
      <div {...stylex.props(styles.dotsContainer)}>
        <CountDot />
        <CountDot />
        <CountDot />
        <CountDot />
      </div>
    </div>
  );
};

export default HomeCarousel;
