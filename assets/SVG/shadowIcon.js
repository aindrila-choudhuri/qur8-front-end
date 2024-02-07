import * as React from "react";
import Svg, { G, Ellipse, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ShadowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={89}
    height={22}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Ellipse
        cx={44.5}
        cy={11}
        fill="#606060"
        fillOpacity={0.54}
        rx={36.5}
        ry={3}
      />
    </G>
    <Defs />
  </Svg>
);
export default ShadowIcon;
