// @flow
import { createStackNavigator } from 'react-navigation';
import HelloScreen from '../screens/HelloScreen';
import GenderScreen from '../screens/GenderScreen';
import BirthTimeScreen from '../screens/BirthTimeScreen';

export default createStackNavigator({
  HelloScreen,
  GenderScreen,
  BirthTimeScreen,
});
