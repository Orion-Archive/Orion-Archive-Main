import React, { useState } from 'react';
import colors from '../config/colors';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function ModalComponent(props) {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        /* visible={modalVisible} */
        visible={true}
      >
        <View style={styles.modalView}>
          <View style={styles.modalNav}>
            <TouchableHighlight
              style={styles.addButton}
              onPress={() => {
                /* setModalVisible(!modalVisible); */
                setModalVisible(false);
              }}
            >
              <Text style={styles.addButtonText}> + </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.closingButton}
              onPress={() => {
                /* setModalVisible(!modalVisible); */
                setModalVisible(false);
              }}
            >
              <Text style={styles.closingButtonText}>X</Text>
            </TouchableHighlight>
          </View>
          <ScrollView
            style={styles.ScrollView}
            showsVerticalScrollIndicator={false}
          >
            {/* POPULATE <TEXT> WITH OUR EVENTS FROM THE DB USING GET REQUEST */}
            <Text style={styles.modalText}>
              Hello World! shadowOffsetsdf sd // $FlowFixMesd // $$FlowFixMesd
              gfs dg dry asdasdasfasfasfa asdasdasfasfasfasfasf
              asdasdasfasfasfasfasffa sfa Hello World! shadowOffsetsdf sd //
              $FlowFixMesd // $$FlowFixMesd gfs dg df aet we tw e gf sd f sd f s
              df w et a shadowOffsetsdf sd fheruergh weqrtweywry
              asdasdasfasfasfa asdasdasfasfasfasfasf asdasdasfasfasfasfasffa sfa
            </Text>
            <Text style={styles.modalText}>
              Hello World! shadowOffsetsdf sd // $FlowFixMesd // $$FlowFixMesd
              gfs dg dry asdasdasfasfasfa asdasdasfasfasfasfasf
              asdasdasfasfasfasfasffa sfa Hello World! shadowOffsetsdf sd //
              $FlowFixMesd // $$FlowFixMesd gfs dg df aet we tw e gf sd f sd f s
              df w et a shadowOffsetsdf sd fheruergh weqrtweywry
              asdasdasfasfasfa asdasdasfasfasfasfasf asdasdasfasfasfasfasffa sfa
            </Text>
            <Text style={styles.modalText}>
              Hello World! shadowOffsetsdf sd // $FlowFixMesd // $$FlowFixMesd
              gfs dg dry asdasdasfasfasfa asdasdasfasfasfasfasf
              asdasdasfasfasfasfasffa sfa Hello World! shadowOffsetsdf sd //
              $FlowFixMesd // $$FlowFixMesd gfs dg df aet we tw e gf sd f sd f s
              df w et a shadowOffsetsdf sd fheruergh weqrtweywry
              asdasdasfasfasfa asdasdasfasfasfasfasf asdasdasfasfasfasfasffa sfa
            </Text>
            <Text style={styles.modalText}>
              Hello World! shadowOffsetsdf sd // $FlowFixMesd // $$FlowFixMesd
              gfs dg dry asdasdasfasfasfa asdasdasfasfasfasfasf
              asdasdasfasfasfasfasffa sfa Hello World! shadowOffsetsdf sd //
              $FlowFixMesd // $$FlowFixMesd gfs dg df aet we tw e gf sd f sd f s
              df w et a shadowOffsetsdf sd fheruergh weqrtweywry
              asdasdasfasfasfa asdasdasfasfasfasfasf asdasdasfasfasfasfasffa sfa
            </Text>
            <Text style={styles.modalText}>
              Hello World! shadowOffsetsdf sd // $FlowFixMesd // $$FlowFixMesd
              gfs dg dry asdasdasfasfasfa asdasdasfasfasfasfasf
              asdasdasfasfasfasfasffa sfa Hello World! shadowOffsetsdf sd //
              $FlowFixMesd // $$FlowFixMesd gfs dg df aet we tw e gf sd f sd f s
              df w et a shadowOffsetsdf sd fheruergh weqrtweywry
              asdasdasfasfasfa asdasdasfasfasfasfasf asdasdasfasfasfasfasffa sfa
            </Text>
          </ScrollView>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>Show Modal</Text>
      </TouchableHighlight>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  openButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closingButton: {
    backgroundColor: colors.white,
    padding: 10,
    elevation: 2,
  },
  closingButtonText: {
    color: colors.backgroundColor,
    fontWeight: '900',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  addButtonText: {
    color: colors.backgroundColor,
    fontWeight: '900',
    fontSize: 20,
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
