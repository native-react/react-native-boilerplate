/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/index'
import {name as appName} from './app.json';

GLOBAL = require('./src/common/Global');
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
