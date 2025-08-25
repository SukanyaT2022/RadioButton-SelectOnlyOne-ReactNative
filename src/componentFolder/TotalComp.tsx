import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface TotalCompProps {
price: number; 

}
const TotalComp = ({price, }:TotalCompProps) => {
  const tax = (price * 12) / 100;
  const totalAfterTax = price + tax;
  return (
    <View style = {styles.mainBox}>
      <View style = {styles.wrapper}>
      <Text style = {styles.titleStyle}>Total</Text> 
      <Text style = {styles.titleStyle}>${price}</Text> 
      </View>
      <View style = {styles.wrapper}>
      <Text style = {styles.titleStyle}>Total /after tax 12%</Text> 
      <Text style = {styles.titleStyle}>${totalAfterTax}</Text> 
      </View>
    </View>
  )
}

export default TotalComp

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


})