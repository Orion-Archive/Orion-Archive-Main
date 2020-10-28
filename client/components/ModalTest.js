import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  SafeAreaView,
  View,
} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        {/* <View style={styles.centeredView}> */}
        <SafeAreaView style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>

          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
          {/* </View> */}
        </SafeAreaView>
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
    marginTop: 22,
    backgroundColor: 'pink',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 35,
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
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
