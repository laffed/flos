import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { Screen } from '@app/components/Screen';
import { Color } from '@app/styles';


type Props = StaticScreenProps<undefined>;

export const StartView = (_props: Props) => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  const onPress = useCallback(() => {
    navigation.navigate('UserInfo');
  }, [navigation]);

  return (
    <Screen style={styles.container}>
      <View style={styles.copyContainer}>
        <View style={styles.highlight}>

          <Text style={styles.title} variant='displayMedium'>
            {t('startView.title')}
          </Text>
        </View>
        <Text style={styles.description} variant='bodyLarge'>
          {t('startView.description')}
        </Text>
      </View>
      <Button style={styles.button} onPress={onPress} mode='elevated'>
        {t('buttons.continue')}
      </Button>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  copyContainer: {
    paddingHorizontal: 16,
    marginBottom: 64,
  },
  highlight: {
    alignSelf: 'flex-start',
    padding: 4,
    backgroundColor: Color.highlightGreen,
    transform: [{
      rotate: '2deg',
    }],
    marginBottom: 16,
  },
  title: {
    transform: [{
      rotate: '-2deg',
    }],
  },
  description: {

  },
  button: {
    alignSelf: 'center',
    width: 300,
    marginBottom: 16,
  },
});
