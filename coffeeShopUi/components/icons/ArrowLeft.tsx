import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ArrowLeft = ({
  stroke = '#130F26',
  width = 14,
  height = 14,
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.5 19-7-7 7-7"
    />
  </Svg>
);
export default ArrowLeft;
