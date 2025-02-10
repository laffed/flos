import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { useCallback } from 'react';

import { Screen } from '@app/components/Screen';


type Props = StaticScreenProps<undefined>;

export const StartView = (_props: Props) => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate('UserInfo');
  }, [navigation]);

  return (
    <Screen>
      <Button onPress={onPress} mode='elevated'>
        Press
      </Button>
    </Screen>
  );
};
