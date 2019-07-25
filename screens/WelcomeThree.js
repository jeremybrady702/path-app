import React from "react";
import { Image, StyleSheet, View, Dimensions, Text, Platform, StatusBar } from "react-native";
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
    maxHeight: Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('screen').height - StatusBar.currentHeight,
    maxWidth: Dimensions.get("window").width
  },
  intro3: {
    flex: 0,
    marginTop: 24,
    width: "100%",
    height: 600,
    marginBottom: Platform.OS === 'ios' ? "-8%" : "-5%"
  }
});
