import { StaticScreenProps } from '@react-navigation/native';

import { Screen } from '@app/components/Screen';
import { UserInfoKey } from '@app/state';


type Props = StaticScreenProps<{
  title: string;
  userInfoKey: UserInfoKey
}>;

export const EditInfoFieldView = ({ route }: Props) => {

  return (
    <Screen />
  );
};
