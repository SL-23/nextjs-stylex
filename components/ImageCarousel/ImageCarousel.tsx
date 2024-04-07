import { styles } from "./styles";
import stylex from "@stylexjs/stylex";
import ArrowButton from "../ArrowButton/ArrowButton";

const imgSrcArr = [
  "https://i2.au.reastatic.net/1000x750-format=webp/da12b23865d29cacd2316c0846d07a16943953e0944da3200c6910d26cf8ace7/image.jpg",
  "https://i2.au.reastatic.net/1648x1248-resize,extend,r=33,g=40,b=46/e636cd86ffc84ff9de224b344d6b94162239e3e7d23891c0c67d126c80ca122b/image.jpg",
  "https://i2.au.reastatic.net/1648x1248-resize,extend,r=33,g=40,b=46/41317ea9a063f69bf8d00b259a6f3e9d3e178a65c52b00e4d52551917763ea24/image.jpg",
  "https://i2.au.reastatic.net/1648x1248-resize,extend,r=33,g=40,b=46/30f8d3d0f0715124a956246f89679345f488f06bba3322511c14cb13ac8fe0d1/image.jpg",
];

const ImageCarousel = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <ArrowButton direction="left" />
        <ArrowButton direction="right" dark />
      </div>
      <div {...stylex.props(styles.carouselRoot)}>
        <ul {...stylex.props(styles.ulContainer)}>
          {imgSrcArr.map((item, index) => {
            return (
              <li key={index} {...stylex.props(styles.liContainer)}>
                <img {...stylex.props(styles.img)} alt={item} src={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ImageCarousel;
