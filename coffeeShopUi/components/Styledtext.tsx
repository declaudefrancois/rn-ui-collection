import {StyleSheet, Text} from 'react-native';
import React, {ComponentProps, ComponentState, PropsWithChildren} from 'react';

interface StyledtextProps
  extends ComponentProps<typeof Text>,
    PropsWithChildren {
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  color?: string;
  size?: number;
  align?: 'left' | 'center' | 'right';
}

const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '600',
} as ComponentState;

export default function Styledtext({
  style,
  children,
  weight = 'regular',
  color = '#2F2D2C',
  size = 16,
  align = 'left',
  ...props
}: StyledtextProps) {
  const textStyles = [
    style ?? {},
    styles.text,
    {fontWeight: fontWeights[weight]!, color, fontSize: size, textAlign: align},
  ];

  return (
    <Text {...props} style={textStyles}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Sora',
  },
});
