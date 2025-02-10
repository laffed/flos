import { StyleSheet } from 'react-native';
import { PropsWithChildren, useMemo } from 'react';
import { SafeAreaView, Edges } from 'react-native-safe-area-context';

import { Color } from '@app/styles';


type Props = PropsWithChildren<{
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;
}>;
export const Screen = ({
  children,
  top = true,
  bottom = true,
  right = true,
  left = true,
}: Props) => {

  const edges = useMemo(() => {
    return [
      ...(top ? ['top'] : []),
      ...(bottom ? ['bottom'] : []),
      ...(right ? ['right'] : []),
      ...(left ? ['left'] : [])
    ] as Edges;
  }, [top, bottom, right, left]);

  return (
    <SafeAreaView edges={edges} style={styles.screen}>
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
  navbar: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  skeleton: {
    width: 40,
  },
});
