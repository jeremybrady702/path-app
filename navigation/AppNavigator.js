import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import WelcomeScreens from '../screens/WelcomeScreens'

import MainTabNavigator from './MainTabNavigator';
import SplashScreen from '../screens/Startup'
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Startup: SplashScreen,
    Welcome: WelcomeScreens,
    Main: MainTabNavigator,
  })
);
