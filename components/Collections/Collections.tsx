import stylex from "@stylexjs/stylex";
import { styles } from "./styles";
import React from "react";
import CollectionItem from "./CollectionItem/CollectionItem";
import MandarinDucks from "../../public/mandarin ducks.png";
import Calligraphy from "../../public/calligraphy.png";
import Trees from "../../public/trees.png";
import Lake from "../../public/lake.png";

const collectionItems = [
  {
    title: "The trees",
    src: Trees,
  },
  {
    title: "Crisp air in mountains and lakes",
    src: Lake,
  },
  {
    title: "Mandarin ducks",
    src: MandarinDucks,
  },
  {
    title: "Calligraphy in running script",
    src: Calligraphy,
  },
];

const Collections = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <div ref={ref} {...stylex.props(styles.root)}>
      <p {...stylex.props(styles.title)}>Collections</p>
      <div {...stylex.props(styles.itemsContainer)}>
        {collectionItems.map((item) => (
          <CollectionItem
            key={item.title}
            title={item.title}
            imgSrc={item.src}
          />
        ))}
      </div>
    </div>
  );
});
export default Collections;
