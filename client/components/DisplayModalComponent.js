import React, { useState } from 'react';
import colors from '../config/colors';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function DisplayModalComponent(props) {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.displayVisible}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>EVENTS</Text>
          <ScrollView
            style={styles.ScrollView}
            showsVerticalScrollIndicator={false}
          >
            {/* NEED TO REPLACE THIS HARD CODED TEXT - POPULATE <TEXT> WITH OUR EVENTS FROM THE DB USING GET REQUEST */}
            <Text style={styles.modalSectionHeader}>Title: </Text>
            <Text style={styles.modalText}>Event Test #1</Text>
            <Text style={styles.modalSectionHeader}>Description: </Text>
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <View
              style={{
                borderBottomColor: colors.white,
                borderBottomWidth: 1,
                marginBottom: 30,
              }}
            />

            <Text style={styles.modalSectionHeader}>Title: </Text>
            <Text style={styles.modalText}>Event Test #2</Text>
            <Text style={styles.modalSectionHeader}>Description: </Text>
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <View
              style={{
                borderBottomColor: colors.white,
                borderBottomWidth: 1,
                marginBottom: 30,
              }}
            />

            <Text style={styles.modalSectionHeader}>Title: </Text>
            <Text style={styles.modalText}>Event Test #3</Text>
            <Text style={styles.modalSectionHeader}>Description: </Text>
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <View
              style={{
                borderBottomColor: colors.white,
                borderBottomWidth: 1,
                marginBottom: 30,
              }}
            />

            <Text style={styles.modalSectionHeader}>Title: </Text>
            <Text style={styles.modalText}>Event Test #4</Text>
            <Text style={styles.modalSectionHeader}>Description: </Text>
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <View
              style={{
                borderBottomColor: colors.white,
                borderBottomWidth: 1,
                marginBottom: 30,
              }}
            />

            <Text style={styles.modalSectionHeader}>Title: </Text>
            <Text style={styles.modalText}>Test</Text>
            <Text style={styles.modalSectionHeader}>Description: </Text>
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>
          <View style={styles.modalNav}>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={styles.addButton}
                onPress={() => {
                  props.toggleInputModalHandler();
                  props.toggleDisplayModalHandler();
                }}
              >
                <Text style={styles.addButtonText} resizeMode="contain">
                  {' '}
                  +{' '}
                </Text>
              </TouchableHighlight>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={styles.closingButton}
                onPress={props.toggleDisplayModalHandler}
              >
                <Text style={styles.closingButtonText}>X</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalSectionHeader: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '700',
  },
  modalView: {
    flex: 1,
    marginTop: 50,
    margin: 20,
    backgroundColor: colors.backgroundColor,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalNav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalHeader: {
    color: colors.secondary,
    fontSize: 75,
    fontWeight: '900',
  },
  openButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closingButton: {
    backgroundColor: colors.backgroundColor,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 20,
    padding: 12,
    marginLeft: 5,
    elevation: 2,
  },
  closingButtonText: {
    color: colors.primary,
    fontWeight: '900',
    fontSize: 16,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
    marginRight: 5,
    elevation: 2,
  },
  addButtonText: {
    color: colors.backgroundColor,
    fontWeight: '900',
    fontSize: 20,
    textAlign: 'center',
  },
  ScrollView: {
    height: '100%',
    marginTop: 25,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  modalText: {
    marginBottom: 35,
    textAlign: 'left',
    color: colors.white,
  },
});

export default DisplayModalComponent;

/**
 * INITIAL MODAL:
 * 		A. TOP NAV
 * 				1. ADD BUTTON
 * 						A: SIGNED IN? NAVIGATES YOU TO DIFF SCREEN
 * 						B: NOT SIGNED IN? NAVIGATES YOU TO THE LOGINSCREEN
 * 				2. X CLOSING BUTTON
 * 		B. SCROLLABLE EVENT LIST
 */
