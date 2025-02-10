import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView, Platform, StyleSheet, ScrollView
} from 'react-native';
import {
  Button, TextInput, TextInputProps
} from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

import { UserInfoKey, useUserInfoState } from '@app/state';
import { Screen } from '@app/components/Screen';


type Props = StaticScreenProps<{
  title: string;
  userInfoKey: UserInfoKey
}>;

export const EditInfoFieldView = ({ route }: Props) => {
  const { userInfoKey, title } = route.params;
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { get, set } = useUserInfoState();

  const initialValue = get(userInfoKey);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      item: initialValue,
    },
  });

  const watched = watch('item');

  const disabled = useMemo(() => {
    return watched === '' || watched === initialValue;
  }, [watched, initialValue]);

  const onUpdate = handleSubmit((data) => {
    set(userInfoKey, data.item);
    navigation.goBack();
  });

  const [autoCapitalize, inputMode]: [TextInputProps['autoCapitalize'], TextInputProps['inputMode']] = useMemo(() => {
    switch (userInfoKey) {
      case 'firstName':
      case 'lastName':
        return ['words', 'text'];
      case 'email':
        return ['none', 'email'];
      case 'phoneNumber':
        return ['none', 'tel'];
      case 'tag':
      default:
        return [undefined, undefined];
    }
  }, [userInfoKey]);


  return (
    <Screen top={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
        style={styles.container}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.scroll}
        >
          <Controller
            control={control}
            name='item'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                inputMode={inputMode}
                autoCapitalize={autoCapitalize}
                autoFocus={true}
                label={title}
                mode='outlined'
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
              />

            )}
          />
        </ScrollView>
        <Button style={styles.button} disabled={disabled} onPress={onUpdate} mode='elevated'>{t('buttons.update')}</Button>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scroll: {
    flexGrow: 1,
  },
  button: {
    alignSelf: 'center',
    width: 300,
    marginBottom: 16,
  },
});
