import React, {ComponentProps, useState} from 'react';
import Styledtext from './Styledtext';

export default function ExpandableText({
  maxLength,
  text,
  showMoreTextProps,
  textProps,
}: {
  maxLength: number;
  text: string;
  textProps: ComponentProps<typeof Styledtext>;
  showMoreTextProps: ComponentProps<typeof Styledtext>;
}) {
  const [showMore, setshowMore] = useState(false);

  const visibleText = showMore ? text : text.slice(0, maxLength) + '... ';
  const showMoreButton = text.length > maxLength;
  const moreBtnText = showMore ? 'Show less' : 'Show more';

  const toggleShowMore = () => {
    setshowMore(p => !p);
  };
  return (
    <Styledtext {...textProps}>
      {visibleText}

      {showMoreButton && (
        <Styledtext {...showMoreTextProps} onPress={toggleShowMore}>
          {moreBtnText}
        </Styledtext>
      )}
    </Styledtext>
  );
}
