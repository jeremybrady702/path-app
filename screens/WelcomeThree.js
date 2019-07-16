import React from "react";
import { Image, StyleSheet, View, Dimensions, Text } from "react-native";
import Button from "react-native-button";

export default class WelcomeThree extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.welcomeView3}>
        <Image
          style={styles.intro3}
          source={require("../assets/images/welcome3.png")}
        />
        <Button
          style={{
            backgroundColor: "#01395E",
            color: "white",
            height: 60,
            padding: 14,
            fontSize: 20
          }}
          onPress={() => this.props.navigation.navigate("Welcome4")}
        >
          NEXT
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeView3: {
    // flex: 3,
    minHeight: Dimensions.get("window").height
  },
  intro3: {
    flex: 0,
    marginTop: 24,
    width: 411,
    height: 600
  }
});
