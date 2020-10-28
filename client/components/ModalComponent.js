import React, { useState } from 'react';
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
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
            onPress={() => {
              /* setModalVisible(!modalVisible); */
              setModalVisible(false);
            }}
          >
            <Text style={styles.textStyle}>VIEW</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
            onPress={() => {
              /* setModalVisible(!modalVisible); */
              setModalVisible(false);
            }}
          >
            <Text style={styles.textStyle}>X</Text>
          </TouchableHighlight>
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
        <Text style={styles.textStyle}>Show Modal</Text>
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
    backgroundColor: 'yellow',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalNav: {},
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  ScrollView: {
    height: '100%',
    marginTop: 25,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 35,
    textAlign: 'left',
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
