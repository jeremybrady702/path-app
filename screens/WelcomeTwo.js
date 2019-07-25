import React from "react";
import { Image, StyleSheet, View, Dimensions, Text, StatusBar, Platform } from "react-native";
import Button from "react-native-button";

export default class WelcomeTwo extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.welcomeView2}>
        <Image
          style={styles.intro2}
          source={require("../assets/images/welcome2.png")}
        />
        <Button
          style={{
            backgroundColor: "#01395E",
            color: "white",
            height: 60,
            padding: 14,
            fontSize: 20
          }}
          onPress={() => this.props.navigation.navigate("Welcome3")}
        >
          NEXT
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeView2: {
    // flex: 3,
    maxHeight: Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('screen').height - StatusBar.currentHeight,
    maxWidth: Dimensions.get("window").width
  },
  intro2: {
    flex: 0,
    // marginTop: 24,
    width: "100%",
    height: Platform.OS === 'ios' ? 587 : 600
  }
});
