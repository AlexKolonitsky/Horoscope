// @flow
import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DailyScreen from '../screens/DailyScreen';
import SignsMainScreen from '../screens/SignsMainScreen';
import CompatibilityMainScreen from '../screens/CompatibilityMainScreen';
import YearMainScreen from '../screens/YearMainScreen';
import ConstellationMainScreen from '../screens/ConstellationMainScreen';
import AboutScreen from '../screens/AboutScreen';

const DailyStack = createStackNavigator({
  Main: DailyScreen,
});

DailyStack.navigationOptions = {
  drawerLabel: 'Daily updates',
};

const SignsStack = createStackNavigator({
  Main: SignsMainScreen,
});

SignsStack.navigationOptions = {
  drawerLabel: 'Zodiac signs',
};

const CompatibilityStack = createStackNavigator({
  Main: CompatibilityMainScreen,
});

CompatibilityStack.navigationOptions = {
  drawerLabel: 'Compatibility',
};

const YearStack = createStackNavigator({
  Main: YearMainScreen,
});

YearStack.navigationOptions = {
  drawerLabel: 'Year horoscope',
};

const ConstellationStack = createStackNavigator({
  Main: ConstellationMainScreen,
});

ConstellationStack.navigationOptions = {
  drawerLabel: 'Constellation',
};

const AboutStack = createStackNavigator({
  Main: AboutScreen,
});

AboutStack.navigationOptions = {
  drawerLabel: 'About Us',
};

/*const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};*/

export default createDrawerNavigator({
  DailyStack,
  SignsStack,
  CompatibilityStack,
  YearStack,
  ConstellationStack,
  AboutStack,
/*  LinksStack,
  SettingsStack,*/
});
