import React from "react";
import {
  Image,
  StyleSheet,
    View,
  Dimensions
} from "react-native";
import { Container, Content, Button, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material'

export default class WelcomeScreens extends React.Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <View style={styles.WelcomeView}>
                <Image style={styles.Intro1} source={require('../assets/images/splash2.png')} />
                <Button large block primary>
                    <Text>Next</Text>
                </Button>
            </View>
        )
            
            
    }
}

const styles = StyleSheet.create({
    WelcomeView: {
        flex: 3,
        minHeight: Dimensions.get('window').height
    },
    Intro1: {
        flex:0,
        marginTop: 24,
        width: 411,
        height: 655,
        marginBottom: -55,
    },
    Button1: {
        color: 'green',
        fontSize: 25,
        padding: 10,
        width: 300,
        marginHorizontal: 50,
        height: 150
    }
})