import stylex from "@stylexjs/stylex";
import { pageStyles } from "../sharePageStyles";

const ContactUsPage = () => {
  return (
    <div {...stylex.props(pageStyles.subPageRoot, styles.root)}>
      <h2>ContactUsPage</h2>
    </div>
  );
};

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

export default ContactUsPage;
