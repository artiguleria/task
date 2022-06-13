/**
 * @format
 */
 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import { LogBox } from 'react-native';
import {name as appName} from './app.json';
import  './src/Services/api'


AppRegistry.registerComponent(appName, () => App);
LogBox.ignoreAllLogs()