import React from "react";
import { Image, StyleSheet, View, Dimensions, Text, Platform, StatusBar } from "react-native";
import Button from "react-native-button";

export default class WelcomeScreens extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.welcomeView}>
        <StatusBar backgroundColor="#01395E" />
        <Image
          style={styles.intro1}
          source={require("../assets/images/splash2.png")}
        />
        <Button
          style={{
            backgroundColor: "#01395E",
            color: "white",
            height: 60,
            padding: 14,
            fontSize: 20
          }}
          onPress={() => this.props.navigation.navigate("Welcome2")}
        >
          NEXT
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  welcomeView: {
    maxHeight: Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('screen').height - StatusBar.currentHeight,
    maxWidth: Dimensions.get("window").width,
  },
  intro1: {
    // marginTop: 24,
    width: "100%",
    height: "100%",
    marginBottom: Platform.OS === 'ios' ? "-15%" : "-14%"
  }
});
