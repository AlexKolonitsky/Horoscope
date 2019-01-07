// @flow
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

class DailyScreen extends React.Component {
  toggleDrawer = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  render() {
    return (
      <View>
        <Button
          onPress={this.toggleDrawer}
          title="Toggle drawer"
        />
        <Text>Daily screen</Text>
      </View>
    );
  }
}

export default DailyScreen;
