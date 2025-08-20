import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
interface SingleRadioBtnProps {
  onPressProp: (checked: boolean) => void;
}
const SingleRadioBtn = ({onPressProp}:SingleRadioBtnProps) => {
  const [checked, setChecked] = React.useState(false);
  const handleCheck = () => {
    setChecked(!checked);
    onPressProp(!checked);
  }
  return <TouchableOpacity onPress={handleCheck} style={[styles.radioBtn, checked ? styles.checkStyle: styles.onCheckStyle ]}></TouchableOpacity>;
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
