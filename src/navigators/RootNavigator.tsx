import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import TabNavigator, {TabParamList} from './TabNavigator';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamsList = {
  TabStack: NavigatorScreenParams<TabParamList>;
  DetailScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();
const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{headerShown: false}}
        name="TabStack"
        component={TabNavigator}
      />
      <RootStack.Screen name="DetailScreen" component={DetailScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
