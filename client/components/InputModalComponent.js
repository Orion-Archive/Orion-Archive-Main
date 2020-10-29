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

function InputModalComponent(props) {
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
          <Text style={styles.modalHeader}>EVENTS</Text>
          <ScrollView
            style={styles.ScrollView}
            showsVerticalScrollIndicator={false}
          >
            {/* NEED TO REPLACE THIS HARD CODED TEXT - POPULATE <TEXT> WITH OUR EVENTS FROM THE DB USING GET REQUEST */}
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
          <View style={styles.modalNav}>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={styles.addButton}
                onPress={() => {
                  /* setModalVisible(!modalVisible); */
                  setModalVisible(false);
                }}
              >
                <Text style={styles.addButtonText} resizeMode="contain">
                  Confirm
                </Text>
              </TouchableHighlight>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={styles.closingButton}
                onPress={() => {
                  /* setModalVisible(!modalVisible); */
                  setModalVisible(false);
                }}
              >
                <Text style={styles.closingButtonText}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      {/* NEED TO UPDATE THIS - THIS BUTTON TRIGGERS THE MODAL TO OPEN */}
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
    padding: 14,
    marginRight: 5,
    elevation: 2,
  },
  addButtonText: {
    color: colors.backgroundColor,
    fontWeight: '900',
    fontSize: 16,
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

export default InputModalComponent;
