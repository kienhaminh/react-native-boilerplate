/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (__DEV__) {
  require('./reactotron.config');
  LogBox.ignoreLogs([
    'getHost: "Invalid non-string URL" for scriptURL - Falling back to localhost',
  ]);
}

AppRegistry.registerComponent(appName, () => App);
