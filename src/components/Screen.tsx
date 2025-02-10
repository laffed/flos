import {
  StyleProp, StyleSheet, ViewStyle
} from 'react-native';
import { PropsWithChildren, useMemo } from 'react';
import { SafeAreaView, Edges } from 'react-native-safe-area-context';

import { Color } from '@app/styles';


type Props = PropsWithChildren<{
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;
  style?: StyleProp<ViewStyle>;
}>;
export const Screen = ({
  children,
  top = true,
  bottom = true,
  right = true,
  left = true,
  style: propStyles,
}: Props) => {

  const mergedStyles = StyleSheet.compose(
    styles.screen,
    propStyles
  );

  const edges = useMemo(() => {
    return [
      ...(top ? ['top'] : []),
      ...(bottom ? ['bottom'] : []),
      ...(right ? ['right'] : []),
      ...(left ? ['left'] : [])
    ] as Edges;
  }, [top, bottom, right, left]);

  return (
    <SafeAreaView edges={edges} style={mergedStyles}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 8,
    flex: 1,
    backgroundColor: Color.white,
  },
});
