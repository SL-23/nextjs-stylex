"use client";
import stylex from "@stylexjs/stylex";
import { styles } from "./styles";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CollectionItemProps {
  title: string;
  imgSrc: StaticImport;
}

const CollectionItem = (props: CollectionItemProps) => {
  const { title, imgSrc } = props;
  const imgRef = useRef<HTMLImageElement>();
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImageLoad = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ): void => {
    const target = event.target as HTMLImageElement;
    if (target.complete && target.style.visibility !== "hidden") {
      setImgLoaded(true);
    }
  };
  return (
    <div {...stylex.props(styles.itemContainer, !imgLoaded && styles.hideItem)}>
      <p>{title}</p>
      <Image
        onLoad={handleImageLoad}
        {...stylex.props(styles.img)}
        alt={title}
        src={imgSrc}
      />
    </div>
  );
};
export default CollectionItem;
