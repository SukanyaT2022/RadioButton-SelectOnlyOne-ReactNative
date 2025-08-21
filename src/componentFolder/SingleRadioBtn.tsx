import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
interface SingleRadioBtnProps {
  onPressProp: () => void;
  isChecked: boolean;
}
const SingleRadioBtn = ({onPressProp, isChecked}:SingleRadioBtnProps) => {
  return <TouchableOpacity onPress={onPressProp} style={[styles.radioBtn, isChecked ? styles.checkStyle: styles.onCheckStyle ]}></TouchableOpacity>;
};

export default SingleRadioBtn;

const styles = StyleSheet.create({
  checkStyle:{
    borderWidth: 6,
    borderColor: 'green', 
  },
  onCheckStyle:{
    borderWidth: 1,
    borderColor: 'gray',
  },
  radioBtn: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },

});
