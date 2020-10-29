import React, { useState } from 'react';
import colors from '../config/colors';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  Button,
  View,
} from 'react-native';
import { Input } from 'react-native-elements';

const functions = require('../functions');

function InputModalComponent(props) {
  const [userinputTitle, setuserinputTitle] = useState('');

  const [userinputDescription, setuserinputDescription] = useState('');

  const onChangeHandlerTitle = (value) => {
    setuserinputTitle(value);
  };

  const onChangeHandlerDescription = (value) => {
    setuserinputDescription(value);
  };

  const resetUserInput = () => {
    setuserinput({
      title: '',
      description: '',
    });
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>ADD EVENT</Text>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Title"
              style={styles.inputFields}
              onChangeText={(value) => onChangeHandlerTitle(value)}
            />
            <Input
              placeholder="Description"
              style={styles.inputFields}
              onChangeText={(value) => onChangeHandlerDescription(value)}
            />
            <Button title="Upload Photos/Videos" />
          </View>

          <View style={styles.modalNav}>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={styles.addButton}
                onPress={() => {
                  console.log('USERINPUTTITLE: ', userinputTitle);
                  console.log('USERINPUTDESCRIPTION: ', userinputDescription);
                  console.log(
                    'PROPS.CURRENTLOCATION.LATITUDE: ',
                    props.currentLocation.latitude
                  );
                  const newPin = {
                    coordinate: {
                      latitude: props.currentLocation.latitude,
                      longitude: props.currentLocation.longitude,
                    },
                    title: userinputTitle,
                    description: userinputDescription,
                    pinColor: 'red',
                  };

                  functions
                    .postMarker(newPin)
                    .then((returnedPin) => {
                      console.log('RETURNEDPIN: ', returnedPin);
                      props.addingMarkertoMarkerList(returnedPin);
                    })
                    .catch((err) => console.log(err));

                  props.toggleInputModalHandler();
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
                onPress={props.toggleInputModalHandler}
              >
                <Text style={styles.closingButtonText}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
  centeredView: {
    flex: 1,
    marginTop: 22,
    justifyContent: 'center',
    alignContent: 'center',
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
  inputContainer: {
    width: '100%',
    marginVertical: 30,
  },
  inputFields: {
    color: colors.white,
  },
  modalHeader: {
    color: colors.secondary,
    fontSize: 50,
    fontWeight: '900',
  },
  modalNav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalText: {
    marginBottom: 35,
    textAlign: 'left',
    color: colors.white,
  },
  modalView: {
    top: 175,
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
  openButton: {
    backgroundColor: colors.primary,
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
});

export default InputModalComponent;
