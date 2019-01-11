// @flow
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

class BirthTimeScreen extends React.Component {
  setBirthTime = () => {
    const { navigation } = this.props;
    navigation.navigate('Main');
  };

  render() {
    return (
      <View>
        <Text>Birth time screen</Text>
        <Button
          onPress={this.setBirthTime}
          title="Skip"
        />
      </View>
    );
  }
}

export default BirthTimeScreen;
