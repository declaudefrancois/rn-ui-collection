import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ArrowDown = ({
  fill = '#fff',
  width = 14,
  height = 14,
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.083 4.958 7 9.042 2.917 4.958"
    />
  </Svg>
);
export default ArrowDown;
