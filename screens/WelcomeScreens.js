import React from "react";
import {
  Image,
  StyleSheet,
    View,
    Button,
  Dimensions
} from "react-native";

export default class WelcomeScreens extends React.Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <View style={styles.WelcomeView}>
                <Image style={styles.Intro1} source={require('../assets/images/splash2.png')} />
                <Button style={styles.Button1}title='Next'></Button>
            </View>
        )
            
            
    }
}

const styles = StyleSheet.create({
    WelcomeView: {
        height: 675
    },
    Intro1: {
        flex:1,
        marginTop: 24,
        width: 411,
        height: 655,
        marginBottom: -50,
    },
    Button1: {
        flex:2,
        marginBottom: 50,
        
    }
})