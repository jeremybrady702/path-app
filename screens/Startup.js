import React from "react";
import {
  Image,
  StyleSheet,
  View
} from "react-native";

export default class SplashScreen extends React.Component {
    _onPress() {
        
      }
    render() {
        return (<View>
            <Image onPress={this._onPress} style={styles.splashImg} source={require("../assets/images/pathlanding.png")} />
        </View>)
    }
}

const styles = StyleSheet.create({
    splashImg: {
        width: 412,
        marginTop: 24,
        height: 675
    }
})


