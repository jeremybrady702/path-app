import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
// import { Baumans } from '../components/StyledText'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.bodyContainer}>
          
        </View>
      </>
    );
  }
}


//     <View style={styles.container}>
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.contentContainer}>
//         <View style={styles.welcomeContainer}>
//           <Image
//             source={
//               __DEV__
//                 ? require('../assets/images/robot-dev.png')
//                 : require('../assets/images/robot-prod.png')
//             }
//             style={styles.welcomeImage}
//           />
//         </View>

//         <View style={styles.getStartedContainer}>
//           <DevelopmentModeNotice />

//           <Text style={styles.getStartedText}>Get started by opening</Text>

//           <View
//             style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
//             <MonoText>screens/HomeScreen.js</MonoText>
//           </View>

//           <Text style={styles.getStartedText}>
//             Path app test
//           </Text>
//         </View>

//         <View style={styles.helpContainer}>
//           <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
//             <Text style={styles.helpLinkText}>
//               Help, it didn’t automatically reload!
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       <View style={styles.tabBarInfoContainer}>
//         <Text style={styles.tabBarInfoText}>
//           This is a tab bar. You can edit it in:
//         </Text>

//         <View
//           style={[styles.codeHighlightContainer, styles.navigationFilename]}>
//           <MonoText style={styles.codeHighlightText}>
//             navigation/MainTabNavigator.js
//           </MonoText>
//         </View>
//       </View>
//     </View>
//   );
// }

// HomeScreen.navigationOptions = {
//   header: null,
// };

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>

const styles = StyleSheet.create({
  bodyContainer: {
    maxWidth: 400,
  },

});
