import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StaticParamList } from '@react-navigation/native';

import {
  StartView, UserInfoView, EditInfoFieldView
} from '@app/views';


export const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerBackButtonDisplayMode: 'minimal',
    headerShadowVisible: false,
  },
  screens: {
    Start: {
      screen: StartView,
      options: {
        headerShown: false,
      },
    },
    UserInfo: {
      screen: UserInfoView,
      options: {
        title: 'Contact information',
      },
    },
    EditInfoField: {
      screen: EditInfoFieldView,
      options: ({ route }) => {
        return {
          title: route.params.title,
        };
      },
    },
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- required
    interface RootParamList extends RootStackParamList { }
  }
}
