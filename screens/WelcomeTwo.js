import React from "react";
import {
  Image,
  StyleSheet,
    View,
    Dimensions, 
  Text
} from "react-native";
import Button from 'react-native-button';

export default class WelcomeTwo extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <Image source={require('../assets/images/welcome2.png')} />
            </View>
        )
    }
}