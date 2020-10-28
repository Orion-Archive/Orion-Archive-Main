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
        /* VISIBLE={ PASSING IN STATE VIA PROPS WHICH WILL BE A BOOLEAN } */
        visible={true}
        transparent={false}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}></View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {},
  modalView: {},
});

export default ModalComponent;

/**
 * INITIAL MODAL:
 * 		A. TOP NAV
 * 				1. ADD BUTTON
 * 						A: SIGNED IN? NAVIGATES YOU TO DIFF SCREEN
 * 						B: NOT SIGNED IN? NAVIGATES YOU TO THE LOGINSCREEN
 * 				2. X CLOSING BUTTON
 * 		B. SCROLLABLE EVENT LIST
 */
