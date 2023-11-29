import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const StarIcon = ({
  fill = '#FBBE21',
  width = 10,
  height = 11,
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={fill}
      d="m5.72 1.963.734 1.466c.1.204.367.4.592.438l1.329.22c.85.142 1.05.759.437 1.367L7.78 6.488a.905.905 0 0 0-.217.754l.296 1.279c.234 1.012-.304 1.404-1.2.875l-1.246-.738a.9.9 0 0 0-.825 0l-1.245.738c-.892.529-1.434.133-1.2-.875l.295-1.28a.905.905 0 0 0-.216-.753L1.187 5.454C.58 4.846.775 4.23 1.625 4.088l1.33-.221a.907.907 0 0 0 .587-.438l.733-1.466c.4-.796 1.05-.796 1.446 0Z"
    />
  </Svg>
);
export default StarIcon;
