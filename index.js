/**
 * @format
 */

import {AppRegistry, StatusBar} from 'react-native';
// import App from './App';
import App from './app/navigation';
import {name as appName} from './app.json';
StatusBar.setBackgroundColor("#E1341E")

AppRegistry.registerComponent(appName, () => App);
