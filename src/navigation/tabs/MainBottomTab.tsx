import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SettingScreen from '@/screens/main/setting';
import {Navigation} from '@/constants/navigation';
import {HomeStackGroups} from '../stacks/HomeStackGroup';

const Tab = createBottomTabNavigator();

export function MainBottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Navigation.Stack.HOME}
        component={HomeStackGroups}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={Navigation.Screens.Main.SETTING}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
}
