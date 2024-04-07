import { styles } from "./styles";
import stylex from "@stylexjs/stylex";
import ArrowButton from "../ArrowButton/ArrowButton";

const imgSrcArr = [
  "https://i2.au.reastatic.net/1000x750-format=webp/da12b23865d29cacd2316c0846d07a16943953e0944da3200c6910d26cf8ace7/image.jpg",
  "https://i2.au.reastatic.net/1648x1248-resize,extend,r=33,g=40,b=46/e636cd86ffc84ff9de224b344d6b94162239e3e7d23891c0c67d126c80ca122b/image.jpg",
  "https://i2.au.reastatic.net/1648x1248-resize,extend,r=33,g=40,b=46/41317ea9a063f69bf8d00b259a6f3e9d3e178a65c52b00e4d52551917763ea24/image.jpg",
  "https://i2.au.reastatic.net/1648x1248-resize,extend,r=33,g=40,b=46/30f8d3d0f0715124a956246f89679345f488f06bba3322511c14cb13ac8fe0d1/image.jpg",
];

const CountDot = () => <div {...stylex.props(styles.dot)} />;

const HomeCarousel = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.carouselContainer)}>
        <div {...stylex.props(styles.slidesContainer)}>
          {imgSrcArr.map((img, i) => (
            <img
              {...stylex.props(
                styles.slide,
                styles.animationBase,
                styles.slideAnimation(i)
              )}
              alt={`img-${i}`}
              src={img}
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
