import stylex from "@stylexjs/stylex";
import { styles } from "./styles";

const sections = ["Home", "About", "Gallery", "Contact us"];

const TopNavigation = () => {
  return (
    <div {...stylex.props(styles.root)}>
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
