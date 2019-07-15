import React from "react";
import {
  Image,
  StyleSheet,
    View,
    Dimensions, 
  Text
} from "react-native";
import Button from 'react-native-button';

export default class WelcomeScreens extends React.Component {
    static navigationOptions = {
        header: null,
    }
  
    render() {
        return (
            <View style={styles.welcomeView}>
                <Image style={styles.intro1} source={require('../assets/images/splash2.png')} />
                <Button style={{backgroundColor: "#01395E", color: 'white', height: 60, padding: 14, fontSize: 20}} onPress={() => this.props.navigation.navigate('Welcome2')}>
                    NEXT
                </Button>
            </View>
        )
            
            
    }
}

const styles = StyleSheet.create({
    welcomeView: {
        flex: 3,
        minHeight: Dimensions.get('window').height
    },
    intro1: {
        flex:0,
        marginTop: 24,
        width: 411,
        height: 655,
        marginBottom: -55,
    },
  
})