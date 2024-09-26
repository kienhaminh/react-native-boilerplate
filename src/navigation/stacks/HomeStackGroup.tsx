import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navigation} from '@/constants/navigation';
import HomeScreen from '@/screens/main/home';
import DetailScreen from '@/screens/main/detail';

const Stack = createNativeStackNavigator();

export const HomeStackGroups = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Navigation.Screens.Main.HOME} component={HomeScreen} />
      <Stack.Screen
        name={Navigation.Screens.Main.DETAIL}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};
