import React from "react";
import { Image, StyleSheet, View, Dimensions, Text } from "react-native";
import Button from "react-native-button";

export default class WelcomeFour extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.welcomeView4}>
        <Image
          style={styles.intro4}
          source={require("../assets/images/welcome4.png")}
        />
        <Button
          style={{
            backgroundColor: "#01395E",
            color: "white",
            height: 60,
            padding: 14,
            fontSize: 20
          }}
          onPress={() => this.props.navigation.navigate("Welcome5")}
        >
          NEXT
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeView4: {
    // flex: 3,
    minHeight: Dimensions.get("window").height
  },
  intro4: {
    flex: 0,
    marginTop: 24,
    width: 411,
    height: 600
  }
});
