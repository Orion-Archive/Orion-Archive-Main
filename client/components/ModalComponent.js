import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

function ModalComponent(props) {
  // PROPS WILL HAVE STATE CONTROLLING OPEN AND CLOSE FUNC FOR MODALCOMPONENT FROM HOOKS FROM PARENT SCREEN
  return (
    <View>
      <Modal
        animationType="none"
        visible={true} /*{ PASSING IN STATE WHICH WILL BE A BOOLEAN }*/
        transparent={false}
      ></Modal>
    </View>
  );
}

export default ModalComponent;
