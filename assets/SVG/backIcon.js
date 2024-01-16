import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#557184"
      fillRule="evenodd"
      d="M12.354 3.646a.5.5 0 0 1 0 .708L5.207 11.5H20a.5.5 0 0 1 0 1H5.207l7.147 7.146a.5.5 0 0 1-.708.708l-8-8a.5.5 0 0 1 0-.708l8-8a.5.5 0 0 1 .708 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BackIcon;
