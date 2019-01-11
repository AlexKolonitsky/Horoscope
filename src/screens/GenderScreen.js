// @flow
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

class GenderScreen extends React.Component {
  setGender = () => {
    const { navigation } = this.props;
    navigation.navigate('BirthTimeScreen');
  };

  render() {
    return (
      <View>
        <Text>Gender screen</Text>
        <Button
          onPress={this.setGender}
          title="Skip"
        />
      </View>
    );
  }
}

export default GenderScreen;
