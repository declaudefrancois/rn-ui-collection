import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ArrowRight = ({
  stroke = '#2F2D2C',
  width = 20,
  height = 20,
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.083 4.167 12.917 10l-5.834 5.833"
    />
  </Svg>
);
export default ArrowRight;
