import stylex from "@stylexjs/stylex";
import { styles } from "./styles";
import { Divider } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <>
        <a {...stylex.props(styles.link)} href="/contact-us">
          Buying
        </a>
        <a {...stylex.props(styles.link)} href="/contact-us">
          Contact us
        </a>
      </>
      <hr />
      <div {...stylex.props(styles.copyright)}>
        <p>© Stephanie L. 2024</p>
        <div {...stylex.props(styles.icons)}>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
