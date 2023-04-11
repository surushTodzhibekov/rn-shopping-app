import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';

export type TabParamList = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <Entypo name="home" {...props} />;
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon(props) {
            return <FontAwesome name="shopping-cart" {...props} />;
          },
        }}
        component={Example}
      />
      <Tab.Screen
        name="Payment"
        options={{
          tabBarIcon(props) {
            return <Ionicons name="wallet" {...props} />;
          },
        }}
        component={Example}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon(props) {
            return <Ionicons name="person" {...props} />;
          },
        }}
        component={Example}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const Example = () => {
  return <FontAwesome name="rocket" size={30} color="#900" />;
};
