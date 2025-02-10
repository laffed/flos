import { useTranslation } from 'react-i18next';
import {
  StyleSheet, Text, View
} from 'react-native';


export const App = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('hello-world')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
