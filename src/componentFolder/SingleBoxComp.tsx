import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SingleRadioBtn from '../componentFolder/SingleRadioBtn'

interface SingleBoxCompProps {
title: string;
price: string;
message: string;
onpressProp: () => void;
isSelected?: boolean; // Optional prop to indicate if the box is selected
}

const SingleBoxComp = ({title, price, message, onpressProp, isSelected = false}:SingleBoxCompProps) => {
  // const [changeColor, setChangeColor] = React.useState(false);
  return (
    <View style={[styles.mainBox ,isSelected && styles.changeColorMainBox]}>
      <View style={styles.wrapper}>
        <View style={styles.wrapRadioPaynow}>
         <SingleRadioBtn onPressProp = {onpressProp} isChecked={isSelected}/>
         <Text style={styles.titleStyle}>{title}</Text>
         </View>
         <Text style={styles.priceStyle}>${price}</Text>
         </View>
         <Text style={styles.messageStyle}>{message}</Text>
    </View>
  )
}

export default SingleBoxComp

const styles = StyleSheet.create({
mainBox:{
    borderColor: 'gray',
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
    width: '100%',
    gap: 5,
},
changeColorMainBox:{
  borderColor: 'green',
},
wrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',  
},
wrapRadioPaynow:{
  flexDirection: 'row',
  gap:5,

},
titleStyle:{
fontWeight: 'bold',

},
priceStyle:{

},
messageStyle:{

},

})