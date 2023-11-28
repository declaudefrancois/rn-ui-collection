import {Pressable, StyleSheet} from 'react-native';
import React, {ComponentProps} from 'react';
import theme from '../constants/theme';

interface ButtonProps extends ComponentProps<typeof Pressable> {
  size?: 'sm' | 'md' | 'lg';
  bg?: string;
  fullWidth?: boolean;
}

const sizes = {
  sm: {
    height: 40,
    padding: 8,
  },
  md: {
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  lg: {
    height: 60,
    padding: 21,
  },
} as const;

export default function Button({
  children,
  size,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const style = styles({size, fullWidth}).button;

  return (
    <Pressable
      style={() => ({
        ...style,
        backgroundColor: theme.colors.main,
      })}
      {...props}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create(
  ({fullWidth, size = 'md'}: Pick<ButtonProps, 'size' | 'fullWidth'>) => ({
    button: {
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      ...sizes[size],
      width: fullWidth ? '100%' : undefined,
    },
  }),
);
