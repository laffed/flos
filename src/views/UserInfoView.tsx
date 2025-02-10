import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import {
  StyleSheet, TouchableOpacity, View
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Divider, Text } from 'react-native-paper';

import { UserInfoKey, useUserInfoState } from '@app/state';
import { Screen } from '@app/components/Screen';


type InfoItem = {
  infoKey: UserInfoKey;
  editable: boolean;
}
const USER_INFO_KEYS: InfoItem[] = [
  {
    infoKey: 'tag',
    editable: false,
  },
  {
    infoKey: 'firstName',
    editable: true,
  },
  {
    infoKey: 'lastName',
    editable: true,
  },
  {
    infoKey: 'email',
    editable: true,
  },
  {
    infoKey: 'phoneNumber',
    editable: true,
  }
];

type Props = StaticScreenProps<undefined>
export const UserInfoView = (_props: Props) => {

  const renderItem = useCallback((item: InfoItem) => {
    return (
      <InfoItem key={item.infoKey} {...item} />
    );
  }, []);

  return (
    <Screen top={false}>
      <Divider bold />
      {USER_INFO_KEYS.map(renderItem)}
    </Screen>
  );
};

const InfoItem = ({ infoKey, editable }: InfoItem) => {
  const { t } = useTranslation();
  const { get } = useUserInfoState();
  const { navigate } = useNavigation();

  const title = useMemo(() => t(`userInfo.${infoKey}`), [t, infoKey]);

  const onPress = useCallback(() => {
    navigate('EditInfoField', {
      title,
      userInfoKey: infoKey,
    });
  }, [infoKey, navigate, title]);

  return (
    <TouchableOpacity onPress={onPress} disabled={!editable}>
      <View style={styles.itemRow}>
        <Text variant='titleMedium'>{title}</Text>
        <Text variant='titleMedium'>{get(infoKey)}</Text>
      </View>
      <Divider bold />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    paddingHorizontal: 8,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
