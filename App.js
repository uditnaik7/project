/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
By: Udit Naik  */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import {Container,Drawer,StyleProvider} from 'native-base';
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/
import {TabNavigator} from 'react-navigation';
import getTheme from './src/themes/components';
import Udn from './src/themes/variables/Udn';

import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import AppBody from './src/components/appBody';
import navigation from './src/components/navigation';

export default class App extends Component<{}> {
  render() {
    return (
      <StyleProvider style={getTheme(Udn)}>
      <Container>

    <AppHeader/>

      <AppBody/>
      <AppFooter/>
      </Container>
      </StyleProvider>
    );
  }
}
