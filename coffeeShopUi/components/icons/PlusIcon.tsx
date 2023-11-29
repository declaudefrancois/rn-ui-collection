import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const PlusIcon = ({stroke = '#fff', ...props}: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 8h8M8 12V4"
    />
  </Svg>
);
export default PlusIcon;
