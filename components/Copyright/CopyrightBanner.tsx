import stylex from "@stylexjs/stylex";
import { styles } from "./styles";

const CopyrightBanner = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <p>Copyright 2024 [Stephanie L.]. All rights reserved. </p>
      <p>
        All images and artwork displayed on this website, unless otherwise
        indicated, are the intellectual property of Stephanie L.. These works
        are protected by copyright laws and international treaties. Unauthorized
        reproduction, distribution, or use of these works without the express
        written consent of Stephanie L. is strictly prohibited.
      </p>
    </div>
  );
};

export default CopyrightBanner;
