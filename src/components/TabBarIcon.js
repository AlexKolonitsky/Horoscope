// @flow
import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  const { name, focused } = props;
  return (
    <Icon.Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
