import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Platform,
  StatusBar,
  TouchableWithoutFeedback
} from "react-native";


export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Welcome");
    }, 2000);
  }

  render() {
    return (
      <TouchableWithoutFeedback
      onPress={() => {
        this.props.navigation.navigate("Welcome");
      }}
    >    
      <View style={styles.StartUpView}>
        <Image
          style={styles.splashImg}
          source={require("../assets/images/pathlanding.png")}
        />
        </View>
        </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
  StartUpView: {
    maxHeight:
      Platform.OS === "ios"
        ? Dimensions.get("window").height
        : Dimensions.get("screen").height - StatusBar.currentHeight,
    maxWidth: Dimensions.get("window").width
  },

  splashImg: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
