import * as React from "react";
import Svg, { Path } from "react-native-svg";
const EnterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#557184"
      d="M9.707 4.293a1 1 0 0 0-1.414 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7Z"
    />
  </Svg>
);
export default EnterIcon;
