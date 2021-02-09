import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font';

import { AppLoading } from 'expo';
import HomeStackNavigator from './src/navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {
  state = {
    isFontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Bold": require('./src/fonts/Montserrat-ExtraBold.otf'),
      "Medium": require('./src/fonts/Montserrat-Medium.otf'),
      "Regular": require('./src/fonts/Montserrat-Regular.otf')
    })
    this.setState({ isFontLoaded: true })
  }

  render() {
    return (
      (this.state.isFontLoaded === true) ?
        (
            <NavigationContainer>
              <StatusBar style='light' backgroundColor='#5ba3cb'  />
              <HomeStackNavigator />
            </NavigationContainer>
        ) 
        : 
        (<AppLoading />)
    );
  }
}
