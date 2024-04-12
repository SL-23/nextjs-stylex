"use client";
import stylex from "@stylexjs/stylex";
import { styles } from "./styles";
import { useEffect, useRef, useState } from "react";

const sections = ["Home", "About", "Gallery", "Contact us"];

const TopNavigation = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > 70) setVisible(false);
      else setVisible(true);
    });
  }, []);

  return (
    <div
      ref={rootRef}
      {...stylex.props(styles.root, !visible && styles.hideRoot)}
    >
      {sections.map((title) => (
        <a
          {...stylex.props(styles.section)}
          key={title}
          href={title === "Home" ? "." : `/${title.toLowerCase()}`}
        >
          {title}
        </a>
      ))}
    </div>
  );
};

export default TopNavigation;
