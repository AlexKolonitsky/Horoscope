// @flow
import { createSwitchNavigator } from 'react-navigation';

import MenuNavigator from './MenuNavigator';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MenuNavigator,
});
