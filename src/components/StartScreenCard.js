// @flow
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default function createStartCardWith(WrappedComponent) {
  return () => (
    <View>
      <Text>Start screen card title</Text>
      <Text>Start screen card description</Text>
      <WrappedComponent />
      <Button title="Start screen card button" />
    </View>
  );
}
