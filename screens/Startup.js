import React from "react";
import {
  Image,
  StyleSheet,
    View,
  Dimensions
} from "react-native";


export default class SplashScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    componentDidMount() {
        setTimeout(() => { this.props.navigation.navigate('Welcome') }, 2000)
    }

    render() {
        return (<View style={styles.StartUpView}>
            <Image style={styles.splashImg} source={require("../assets/images/pathlanding.png")} />
        </View>)
    }
}

const styles = StyleSheet.create({
    StartUpView: {
        minWidth: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height
    },
    
    splashImg: {
        flex: 1,
        width: Dimensions.get('window').width,
        resizeMode: 'cover',
        marginTop: 24,
        
    }
})


