import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Button from './Button';
import Styledtext from './Styledtext';
import theme from '../constants/theme';

interface TabsProps extends React.ComponentProps<typeof View> {
  activeTab?: number;
  items: {
    id: number;
    title: string;
  }[];
  onTabPress: (id: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  activeColorText?: string;
  inactiveColorText?: string;
  tabItemStyle?: React.ComponentProps<typeof Button>['style'];
  tabItemActiveStyle?: React.ComponentProps<typeof Button>['style'];
  containerScrollPadding?: boolean;
}
export default function Tabs({
  items,
  onTabPress,
  activeTab,
  activeColor = theme.colors.main,
  inactiveColor = '#fff',
  activeColorText = '#fff',
  inactiveColorText,
  tabItemActiveStyle,
  tabItemStyle,
  containerScrollPadding = true,
  style = {},
  ...props
}: TabsProps) {
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        styles.containerScroll,
        containerScrollPadding ? {paddingRight: 20, paddingLeft: 25} : {},
      ]}>
      <View style={[style, styles.container]} {...props}>
        {items.map(item => {
          const isActive = activeTab === item.id;
          return (
            <Button
              onPress={() => onTabPress(item.id)}
              key={item.title}
              size="md"
              bg={isActive ? activeColor : inactiveColor}
              style={isActive ? tabItemActiveStyle : tabItemStyle}>
              <Styledtext
                color={isActive ? activeColorText : inactiveColorText}
                weight={isActive ? 'extraBold' : 'regular'}>
                {item.title}
              </Styledtext>
            </Button>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  containerScroll: {
    minWidth: '100%',
  },
});
