// @flow
import React from 'react';
import {
  View,
} from 'react-native';

export default function createStartWrapperWith(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <View>
          <WrappedComponent />
        </View>
      );
    }
  };
}
