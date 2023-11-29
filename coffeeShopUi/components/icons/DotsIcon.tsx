import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const DotsIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="gray"
      fillRule="evenodd"
      d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2ZM8.4 10.8H6v2.4h2.4v-2.4Zm9.6 0h-2.4v2.4H18v-2.4Zm-7.2 0h2.4v2.4h-2.4v-2.4Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default DotsIcon;
