import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '@/screens/auth/login';

import {Navigation} from '@/constants/navigation';
import {MainBottomTab} from './tabs/MainBottomTab';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Navigation.Tab.MAIN}>
      <Stack.Screen
        name={Navigation.Screens.Auth.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={Navigation.Tab.MAIN}
        component={MainBottomTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
