import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
} from 'react-native';

/**
 * NOTE TO TEAM: TO VIEW YOUR IOS APP SIMULATOR
 * 1. RUN "NPM START"
 * 2. TO RUN THE IOS SIMULATOR - CHOOSE BETWEEN A OR B (DEPENDING ON OS):
 * 		A. MACOS:
 * 				1. INSTALL XCODE
 * 				2. LOCATE XCODE'S TOP MAIN MENU (NEXT TO APPLE LOGO ON THE FAR LEFT)
 * 				3. FOLLOW PATH "XCODE > OPEN DEVELOPER TOOL > SIMULATOR" (A IPHONE WINDOW WILL POP UP)
 * 				4. SELECT "RUN ON IOS SIMULATOR" (MAKE SURE IOS SIMULATOR IS RUNNING FROM STEP 3)
 * 				5. CONFIRM TO OPEN APP WITH EXPO ON THE IOS SIMULATOR WHEN PROMPTED
 * 						A. TO SEE CHANGES MADE TO THE APP ON YOUR SIMULATOR, SAVE YOUR APPLICATION ON VS CODE EDITOR
 * 								1. IF THAT FAILS, IN YOUR IOS SIMULATOR, PRESS CTRL + D THEN CMND + D TO POPULATE THE DEVELOPER MENU
 * 										A. THEN PRESS "REFRESH"
 * 		B. WINDOWS: SCAN THE QR CODE WITH YOUR IPHONE (MAKE SURE "EXPO CLIENT" IS INSTALLED ON IPHONE)
 * 				1. CONFIRM TO OPEN APP WITH EXPO ON YOUR IPHONE WHEN PROMPTED
 * 						A. IF YOU NEED TO REFRESH THE APPLICATION ON YOUR IOS SIMULATOR ON YOUR IPHONE:
 * 								1. SHAKE YOUR IPHONE TO POPULATE THE DEVELOPER MENU AND CLICK REFRESH
 */

export default function App() {
  // TEXT ONPRESS HANDLER EXAMPLE
  const handlePress = () => {
    console.log('Text Pressed!');
  };

  return (
    // VIEW: ACTS LIKE A DIV
    // VIEW -> SAFEAREAVIEW: MAKES SURE THAT THE IPHONE TOP NOTCH DOESN'T COVER OUR CONTENT
    <View style={styles.container}>
      <Text onPress={handlePress}>Welcome to Orion Archives</Text>
      {/* TOUCHABLE TAGS OFFER DIFFERENT USER FEEDBACK WHEN INTERACTING WITH ELEMENTS */}
      <TouchableHighlight onPress={() => console.log('Image Tapped!')}>
        {/* Sourced Images from Repo Assets Folder */}
        {/* <Image source={require('./assets/icon.png')} /> */}
        {/* Sourced Images from the Interwebs: Width & Height Properties Required */}
        <Image
          source={{
            width: 300,
            height: 564,
            uri:
              'https://www.clipartkey.com/mpngs/m/117-1174303_orion-the-hunter-drawing-orion-drawings-illustration-orion.png',
          }}
        />
      </TouchableHighlight>
      <Button
        title="Enter"
        onPress={() =>
          Alert.alert('Welcome to Orion Archive', 'Dare to Enter?', [
            { text: 'Yes', onPress: () => console.log('Yes') },
            { text: 'No', onPress: () => console.log('No') },
          ])
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

// APPLYING STYLESHEET.CREATE IS OPTIONAL, CAN REFERENCE A SIMPLE OBJECT TO STYLE; HOWEVER, USING STYLESHEET.CREATE WILL CATCH ANY TYPO STYLE PROPERTY NAMES THAT ARE INVALID
const styles = StyleSheet.create({
  container: {
    // FLEX: WILL GROW VERTICALLY AND HORIZONTALLY TO TAKE UP FULL SCREEN
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
