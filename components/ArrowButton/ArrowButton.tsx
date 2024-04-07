import EastIcon from "@mui/icons-material/East";
import SouthIcon from "@mui/icons-material/South";
import WestIcon from "@mui/icons-material/West";
import NorthIcon from "@mui/icons-material/North";
import { ReactNode } from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./styles";

type ArrowButtonDirection = "up" | "down" | "left" | "right";
interface ArrowButtonProps {
  dark?: boolean;
  direction: ArrowButtonDirection;
}
const iconMap: { [key in ArrowButtonDirection]: ReactNode } = {
  up: <NorthIcon />,
  down: <SouthIcon />,
  left: <WestIcon />,
  right: <EastIcon />,
};
const ArrowButton = (props: ArrowButtonProps) => {
  const { direction, dark } = props;
  return (
    <button
      {...stylex.props(
        styles.button,
        dark ? styles.darkStyle : styles.lightStyle
      )}
    >
      {iconMap[direction]}
    </button>
  );
};

export default ArrowButton;
