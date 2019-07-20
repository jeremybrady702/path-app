import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import WelcomeScreens from "../screens/WelcomeScreens";
import WelcomeTwo from "../screens/WelcomeTwo";
import WelcomeThree from "../screens/WelcomeThree";
import WelcomeFour from "../screens/WelcomeFour";

import MainTabNavigator from "./MainTabNavigator";
import SplashScreen from "../screens/Startup";

const launchStack = createStackNavigator(
  {
    Startup: SplashScreen,
    Welcome: WelcomeScreens,
    Welcome2: WelcomeTwo,
    Welcome3: WelcomeThree,
    Welcome4: WelcomeFour
  },
  {
    initialRouteName: "Startup"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Launching: launchStack
      // Main: MainTabNavigator
    },
    {
      initialRouteName: "Launching"
    }
  )
);

// You could add another route here for authentication.
// Read more at https://reactnavigation.org/docs/en/auth-flow.html
