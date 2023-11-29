import {Pressable, StyleSheet} from 'react-native';
import React, {ComponentProps} from 'react';
import theme from '../constants/theme';

interface ButtonProps extends ComponentProps<typeof Pressable> {
  size?: 'sm' | 'md' | 'lg' | 'mdIcon' | 'smIcon';
  bg?: string;
  fullWidth?: boolean;
}

const sizes = {
  sm: {
    borderRadius: 13,
    minHeight: 32,
    padding: 6,
  },
  mdIcon: {
    borderRadius: 13,
    minHeight: 45,
    padding: 14,
  },
  smIcon: {
    borderRadius: 10,
    minHeight: 20,
    padding: 8,
  },
  md: {
    borderRadius: 13,
    minHeight: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  lg: {
    borderRadius: 13,
    minHeight: 50,
    padding: 20,
  },
} as const;

export default function Button({
  children,
  size,
  bg,
  style,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const btnStyle = styles({size, fullWidth}).button;

  return (
    <Pressable
      {...props}
      style={[
        // @ts-ignore
        style ? style : {},
        // @ts-ignore
        btnStyle,
        {
          backgroundColor: bg ?? theme.colors.main,
        },
      ]}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create(
  ({fullWidth, size = 'md'}: Pick<ButtonProps, 'size' | 'fullWidth'>) => ({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      ...sizes[size],
      width: fullWidth ? '100%' : undefined,
    },
  }),
);
