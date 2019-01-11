// @flow
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import createStartWrapperWith from '../components/StartScreenWrapper';
import createStartCardWith from '../components/StartScreenCard';

class HelloScreen extends React.Component {
  setBirthDate = () => {
    const { navigation } = this.props;
    navigation.navigate('GenderScreen');
  };

  render() {
    const Card = createStartCardWith(
      <View>
        <Text>Card inner content</Text>
      </View>,
    );
    const HelloScreenWithWrapper = createStartWrapperWith(Card);
    return (
      <View>
        <HelloScreenWithWrapper />
      </View>
    );
  }
}

export default HelloScreen;
