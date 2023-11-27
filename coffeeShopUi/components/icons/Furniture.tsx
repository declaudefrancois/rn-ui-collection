import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.333 5.417h-5M5 5.417H1.667M8.333 8.333a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833ZM18.333 14.583H15M6.667 14.583h-5M11.667 17.5a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833Z"
    />
  </Svg>
);
export default SvgComponent;
