import stylex from "@stylexjs/stylex";
import { styles } from "./styles";
import React, { ReactNode } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CollectionItemProps {
  title: string;
  imgSrc: StaticImport;
}

const CollectionItem = (props: CollectionItemProps) => {
  const { title, imgSrc } = props;
  return (
    <div {...stylex.props(styles.itemContainer)}>
      <p>{title}</p>
      <Image {...stylex.props(styles.img)} alt={title} src={imgSrc} />
    </div>
  );
};
export default CollectionItem;
