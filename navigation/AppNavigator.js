import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import WelcomeScreens from "../screens/WelcomeScreens";

import MainTabNavigator from "./MainTabNavigator";
import SplashScreen from "../screens/Startup";

const launchStack = createStackNavigator(
  {
    Startup: SplashScreen,
    Welcome: WelcomeScreens,
    // Welcome2: WelcomeScreen2
  },
  {
    initialRouteName: "Startup"
  }
);

export default createAppContainer(
  createSwitchNavigator({
    Launching: launchStack,
    // Main: MainTabNavigator
  },
    {
      
    initialRouteName:'Launching'
  })
);

// You could add another route here for authentication.
// Read more at https://reactnavigation.org/docs/en/auth-flow.html
