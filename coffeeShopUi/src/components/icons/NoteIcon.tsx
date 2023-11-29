import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const NoteIcon = (props: SvgProps) => (
  <Svg width={14} height={15} fill="none" {...props}>
    <Path
      stroke="#303336"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.168 9.964H4.956M9.168 7.522H4.956M6.563 5.085H4.956"
    />
    <Path
      stroke="#303336"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9.28 2.104-4.485.002c-1.61.01-2.607 1.07-2.607 2.685v5.365c0 1.624 1.004 2.687 2.628 2.687l4.486-.002c1.61-.01 2.607-1.07 2.607-2.685V4.79c0-1.624-1.005-2.687-2.629-2.687Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default NoteIcon;
